
You can view this project here: https://solidrocker.github.io/weatherman/

# Introduction
This is a PWA that displays your current location's daily and hourly weather forecasts, as well as forecasts from any cities you choose from the list.

### Features
 - Displays details of today's forecast according to local time.
 - Displays hourly data when you move the sliders.
 - Displays forecasts of the city you choose from the dropdown list.
 - Scrollable list (with minimal data) to choose forecasts for the next 7 days.
 - Animations on first load: Main data area fades in when application is loaded.
 - Animations when changing country: A loading screen will fade in, and only fade out after data has been loaded.
 - Responsive UI when screen size or screen orientation changes.
 - Displays an alert label when you go offline.
 - Displays error popups when data loading fails.
 - Caches loaded data with service worker: If you go offline after looking through a few cities' forecasts, you can still view these cities' data. However, if you click on a new city, an error message will appear.
 
### Other Notes
 - For hourly forecasts, OpenWeather API only returns the next 48 hours, even though we have 8 days' worth of daily forecasts. So, for Day 3 onwards, I am using Day 1's hourly data. Only the first 2 days' hourly forecasts are accurate. The daily forecasts (data you see when you change days) are not affected.
 - I added a dummy city (last entry in Germany) to test/showcase an error message if weather data cannot be returned.
 
### Next Steps
 - Allow bookmarking/saving a few cities for easy access (use DB and redux).
 - Change GET requests to POST requests, and shift them to a backend service to bypass CORS issues, and also to hide API keys.
 - Allow toggling between Fahrenheit/Celsius.
 - Display weather warnings and advisories.
 - [Big update] Show live map for users to monitor weather in a region in real-time. (Map API)

### APIs, Libraries and Resources:
 - [OpenWeather](http://openweathermap.org/) for gettting weather forecasts  
 - [Here.com](mhttps://developer.here.com/documentation) for geolocation services
 - React JS
 - Bootstrap-for-React for UI components such as alerts and dropdown lists.
 - Axios for HTTP Requests
 - [Amcharts](https://www.amcharts.com/free-animated-svg-weather-icons/) for animation icons
 - [Icon-icons](Icon-icons.com) for logo
