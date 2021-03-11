import React, { Component} from 'react';
import Alert from 'react-bootstrap/Alert'
import { Online, Offline } from "react-detect-offline";

import '../root.css';
import './WeatherAlert.css'

class WeatherAlert extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasInit: false,
      polling: {
        enabled: true,
        url: 'https://ipv4.icanhazip.com/',
        interval: 5000,
        timeout: 3000
      } 
    }
  }
  displayAlert(isDisplay, classes) {

    // Stops the alert from showing upon initializing app.
    if(!isDisplay && !this.state.hasInit) {
      return null;
    }

    return (
      <div className={classes}>
          <Alert className={classes} variant={'danger'} onAnimationEnd={this.onAnimationEnd}>
            You are currently offline. Please check your internet connection.
          </Alert>
      </div>
    )
  }

  onAnimationEnd = () => {
    this.setState({
      hasInit: true
    })
  }

  render() {
    return (
      <div>
       <Online polling={this.state.polling}>
          {this.displayAlert(false, 'weather-alert-fade-out')}
        </Online>
       <Offline polling={this.state.polling}>
          {this.displayAlert(true, 'weather-alert-stay weather-alert-fade-in')}
        </Offline>
      </div>
    );
  }
}

export default WeatherAlert;
