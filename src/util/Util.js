const openWeatherMapAPIKey = '8a3b877f6488d0d35ad8827d3461a848';
const positionStackAPIKey = 'a80e3d84441af6900f068affd975bd7b';

export const Util = {

    toCapitalize(textToCap) {
        let input = textToCap.split(' ');
        let res = '';
        input.forEach(element => {
            if(res !== '') {
                res += ' ';
            }
            res += element.slice(0, 1).toUpperCase() + element.slice(1);
        });
        return res;
    },

    toDayOfWeek(id) {
        switch(id) {
            case 0: return "sun";
            case 1: return "mon";
            case 2: return "tue";
            case 3: return "wed";
            case 4: return "thu";
            case 5: return "fri";
            case 6: return "sat";
            default: return "";
        }
    },

    getHourMark(hourMark, hasSpace = false) {
        let hour = new Date().getHours();
        let res = (hour + hourMark) % 24;

        let spacing = hasSpace ? " " : "";
        let postFix = spacing + "am";
        
        if(res > 12) {
            res -= 12;
            postFix = spacing + "pm";
        }
        
        if(res === 0) {
            res = 12;
        }
        return res + postFix;
    },

    getWeatherAPI(latitude, longitude) {
      return "https://api.openweathermap.org/data/2.5/onecall?lat="
                + latitude
                + "&lon="
                + longitude
                + "&exclude=minutely&units=metric&appid="
                + openWeatherMapAPIKey;
    },

    getGeocodeAPI(city) {
      return "http://api.positionstack.com/v1/forward?access_key="
                + positionStackAPIKey
                + "&query="
                + city;
    },

    getReverseGeocodeAPI(latitude, longitude) {
      return "http://api.positionstack.com/v1/reverse?access_key="
                + positionStackAPIKey
                + "&query="
                + latitude
                + ","
                + longitude;
    },

    createWeatherObj(data) {
        
        let res = [];
        let dayCounter = 0;

        data.daily.forEach(element => {

            //console.log(element);
            let cDate = new Date(element.dt * 1000);
            let dateString = Util.toDayOfWeek(cDate.getDay());
    
            let newData = {
              temp: {
                day: Math.round(element.temp.day),
                night: Math.round(element.temp.night),
              },
              feels: {
                day: Math.round(element.feels_like.day),
                night: Math.round(element.feels_like.night),
              },
              humidity: element.humidity,
              windspeed: Math.round(element.wind_speed * 3.6),  // Convert m/s to km/h
              sunrise: element.sunrise,
              sunset: element.sunset,
              day: dateString,
              weather: {
                main: element.weather[0].main,
                description: Util.toCapitalize(element.weather[0].description),
                icon: element.weather[0].icon,
              },
              counter: dayCounter,
            }

            // Add hourly forecast to each day.
            // Since API can only pull 48 hours, we intercept the code to reset the
            // hours, and show Day 1's hourly data from Day 3 onwards.
            // So, only Day 1 and Day 2's hourly data is correct.
            let minHour = dayCounter * 24;
            let maxHour = minHour + 23;
            let hourly = [];
            let hourCounter = 0;

            // Reset hours
            minHour = minHour > 24 ? 0: minHour;
            maxHour = maxHour > 47 ? 23: maxHour;

            for(let i = minHour; i <= maxHour; ++i) {

                let hourElem = data.hourly[i];
                let newHourData = {
                    hour: hourCounter,
                    temp: Math.round(hourElem.temp),
                    feels: Math.round(hourElem.feels_like),
                    humidity: hourElem.humidity,
                    windspeed: Math.round(hourElem.wind_speed * 3.6),  // Convert m/s to km/h
                    weather: {
                      main: hourElem.weather[0].main,
                      description: Util.toCapitalize(hourElem.weather[0].description),
                      icon: hourElem.weather[0].icon,
                    },
                }
                hourly.push(newHourData);
                ++hourCounter;
            }

            newData.hourly = hourly;
            res.push(newData);
            ++dayCounter;
        });
        return res;
    }
}
