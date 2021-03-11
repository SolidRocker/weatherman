
You can view this project here: https://solidrocker.github.io/weatherman/

# Introduction
This is a PWA that displays your current location's daily and hourly weather forecasts, as well as forecasts from any cities you choose from the list.

### Features
 - Displays details of today's forecast when loaded, according to local time.
 - Displays hourly data when you move the sliders.
 - Displays forecasts of different cities when you choose from the dropdown list.
 - Scrollable list to choose forecasts for the next 8 days, as well as previews of some data.
 - Animations on first load: Main details fade in when application is loaded.
 - Animations when changing country: A loading screen will fade in, and only fade out after data has been loaded.
 - Responsive UI when screen size or screen orientation changes.
 - Displays an alert label when you go offline.
 - Displays error popups when data loading fails.
 - Caches loaded data with service worker: If you go offline after looking through a few cities' forecasts, you can still view these cities' data. However, if you click on a new city, an error message will appear.
 
### Other Notes
 - For hourly forecasts, OpenWeather API only returns the next 48 hours, even though we have 8 days' worth of daily forecasts. So for Day 3 onwards, I am using Day 1's hourly data. Only the first 2 days' hourly forecasts are accurate. It returns the daily forecast of all 8 days, so daily forcasts are not affected.
 - I added a dummy city (last city in Germany) to showcase an error message if weather data cannot be returned.
 
### Next Steps
 - Allow bookmarking/saving of a few cities for easy access (via DB and redux).
 - Change GET requests to POST requests, and shift them to a backend service to bypass CORS issues and hide API keys.
 - Allow toggling between Fahrenheit/Celsius.
 - Display weather warnings and advisories.
 - [Big update] Show live map for users to monitor weather in a region in real-time.

### APIs, Libraries and Resources Used:
 - [OpenWeather](http://openweathermap.org/) for gettting weather forecasts  
 - [Here.com](mhttps://developer.here.com/documentation) for geolocation services
 - React JS
 - Bootstrap for React for UI components such as alerts and dropdown lists.
 - Axios for HTTP Requests
 - Animation icons from [Amcharts](https://www.amcharts.com/free-animated-svg-weather-icons/)
 - Logo from [Icon-icons](Icon-icons.com)

 
 
