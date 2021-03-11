import React, { Component} from 'react';
import { WiHumidity, WiStrongWind, WiThermometer, WiCloud } from "react-icons/wi";

import wThunderstorm from "../../img/weatherIcons/thunder.svg";
import wDrizzle from "../../img/weatherIcons/drizzle.svg";
import wRain from "../../img/weatherIcons/rain.svg";
import wSnow from "../../img/weatherIcons/snow.svg";
import wDay from "../../img/weatherIcons/day.svg";
import wNight from "../../img/weatherIcons/night.svg";
import wCloudy from "../../img/weatherIcons/cloudy.svg";

import '../root.css';
import './InfoDisplay.css'

import TimeSlider from '../TimeSlider/TimeSlider';

class InfoDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currSelection: 0
        }
    }

    isDayTimeNow() {
        let currDT = new Date();
        if(currDT < this.props.currWeather.sunrise || currDT > this.props.currWeather.sunset) {
          return false;
        }
        return true;
    }

    getBGIcon() {
        switch(this.props.currWeather.weather.main) {
          case 'Thunderstorm':
            return wThunderstorm;
          case 'Drizzle':
            return wDrizzle;
          case 'Rain':
            return wRain;
          case 'Snow':
            return wSnow;
          case 'Clear':
            if(this.isDayTimeNow()) {
              return wDay;
            }
            return wNight;
          default:
            return wCloudy;  // includes cloudy.
        }
    }

    getTemperature() {
        if(this.isDayTimeNow()) {
          return this.props.currWeather.temp.day;
      }
      return this.props.currWeather.temp.night;
    }

    getFeels() {
        if(this.isDayTimeNow()) {
          return this.props.currWeather.feels.day;
      }
      return this.props.currWeather.feels.night;
    }

    render() {
        return (
            <div className="info-body">
                <img className="info-bg-icon" src={this.getBGIcon()} alt={this.props.currWeather.weather.main}></img>

                <div className="info-temp">{this.getTemperature()}&deg;</div>

                <div className="info-desc-text">
                    <WiCloud className="info-desc-icon"/>
                    <span>
                        <b>{this.props.currWeather.weather.description}</b>
                    </span>
                </div>
                
                <div className="info-desc-text">
                    <WiHumidity className="info-desc-icon"/>
                    <span>
                        Humidity: <b>{this.props.currWeather.humidity}%</b>
                    </span>
                </div>

                <div className="info-desc-text">
                    <WiStrongWind className="info-desc-icon"/>
                    <span>
                        Wind Speed: <b>{this.props.currWeather.windspeed}km/h</b>
                    </span>
                </div>

                <div className="info-desc-text">
                    <WiThermometer className="info-desc-icon"/>
                    <span>
                        Feels Like: <b>{this.getTemperature()}&deg;C</b>
                    </span>
                </div>

                <div className="info-space"></div>

                <TimeSlider
                    className="info-time-slider"
                    onUpdateTimeSlider={this.props.onUpdateTimeSlider}
                    isByHour={this.props.isByHour}
                />
            </div>
        )
    }
}

export default InfoDisplay;