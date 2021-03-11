import axios from 'axios';
import React, {Component} from 'react';
import {Util} from '../../util/Util';
import '../root.css';
import './Weather.css';

import WeatherSpinner from '../WeatherSpinner/WeatherSpinner';
import InfoDisplay from '../InfoDisplay/InfoDisplay';
import CountryDropdown from '../CountryDropdown/CountryDropdown';
import DayScroller from '../DayScroller/DayScroller';

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import WeatherAlert from '../WeatherAlert/WeatherAlert';

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isInit: false,
      isLoading: true,
      latitude: 47.67401743463503,
      longitude: -122.1361362693161,

      country: '',
      dailyWeather: [],
      currSelection: 0,
      currWeather: {},

      currHour: 0,
      isByHour: false,

      hasError: false,
      errorMsg: ''
    }
  }

  componentDidMount() {

    if ("geolocation" in navigator) {

      let self = this;
      navigator.geolocation.getCurrentPosition(function(position) {
        axios.get(Util.getReverseGeocodeAPI(position.coords.latitude, position.coords.longitude))
        .then(response => {
          
          //console.log(response);
          if(response.data.data.length > 1) {
            self.setState({
              country: response.data.data[0].locality
            });
          }

          self.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }, () => {
            self.getWeatherData();
          });
        })
        .catch(error => {
          self.setState({
            country: 'Seattle'
          });
          self.getWeatherData();
        })
      });
    }
  }

  closeModal = () => {
    this.setState({
      hasError: false,
      errorMsg: ''
    })
  }

  showErrorPopup() {

    return (
      <Modal
        size="md"
        centered
        show={this.state.hasError}
        onHide={this.closeModal}
        >
        <Modal.Header closeButton>
          <Modal.Title>Error Loading Weather Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.state.errorMsg}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  getWeatherData() {

    let self = this;
    axios.get(Util.getWeatherAPI(this.state.latitude, this.state.longitude))
    .then(response => {
      
      let weatherList = Util.createWeatherObj(response.data);

      this.setState({
        dailyWeather: weatherList,
        isInit: true,
        isLoading: false,
        isByHour: false,
        currHour: 0,
        currWeather: weatherList[0]
      });
    })
    .catch(error => {

      let errorMsg = "Network error. Please try again.";
      if(error.response) {
        errorMsg = "Error " + error.response.status + ": " + error.response.statusText + ". Please try again.";
      }

      self.setState({
        isLoading: false,
        hasError: true,
        errorMsg: errorMsg,
      });
    });
  }

  getCurrWeather() {

    let res = JSON.parse(JSON.stringify(this.state.currWeather));
    if(this.state.isByHour) {

      let cHour = res.hourly[this.state.currHour];
      res.temp.day = res.temp.night = cHour.temp;
      res.feels.day = res.feels.night = cHour.feels;
      res.humidity = cHour.humidity;
      res.weather = cHour.weather;
      res.windspeed = cHour.windspeed;
    }
    return res;
  }

  getDisplayDate() {
    let res = Util.toCapitalize(this.state.currWeather.day) + ", ";
    res += Util.getHourMark(this.state.currHour, true);
    return res;
  }

  getCityGeocode(city) {
    this.setState({
      isLoading: true
    });
    
    axios.get(Util.getGeocodeAPI(city), {timeout: 5000})
    .then(response => {
      this.setState({
        latitude: response.data.data[0].latitude,
        longitude: response.data.data[0].longitude,
        country: city
      }, () => {
        this.getWeatherData();
      });
    })
    .catch(err => {

      console.log(err.message);
      let errMsg = "Cannot load data from city. Please try again."
      this.setState({
        isLoading: false,
        hasError: true,
        errorMsg: errMsg
      });
    });
  }

  showLoadingScreen() {
    return <WeatherSpinner isSpinning={this.state.isLoading}/>
  }

  onSelectDayScroll = (daySelection) => {
    this.setState({
      currSelection: daySelection,
      currWeather: this.state.dailyWeather[daySelection],
      isByHour: false,
      currHour: 0,
    });
  }

  onSelectDropdown = (city) => {
    this.getCityGeocode(city);
  }

  onUpdateTimeSlider = (hour) => {
    this.setState({
      currHour: hour,
      isByHour: true
    });
  }

  render() {

    if(!this.state.isInit) {
      return null;
    }

    return (
      <div className="weather">

        {this.showErrorPopup()}
        {this.showLoadingScreen()}

        <header className="weather-header">
          <WeatherAlert />
          <CountryDropdown
            country={this.state.country}
            onSelect={this.onSelectDropdown}
          />
          <div className="weather-time">{this.getDisplayDate()}&nbsp;</div>
        </header>

        <div className="weather-body-bg">
          <InfoDisplay
            currWeather={this.getCurrWeather()}
            onUpdateTimeSlider={this.onUpdateTimeSlider}
            isByHour={this.state.isByHour}
          />
        </div>

        <DayScroller
          dailyWeather={this.state.dailyWeather}
          currSelection={this.state.currSeection}
          onUpdate={this.onSelectDayScroll}
        />
      </div>
    );
  }
}

export default Weather;
