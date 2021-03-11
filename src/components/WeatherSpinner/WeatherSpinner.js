import React, { Component} from 'react';
import Spinner from 'react-bootstrap/Spinner';

import '../root.css';
import './WeatherSpinner.css'

class WeatherSpinner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spinState: 0,
      isSpinning: false
    }
  }

  componentDidUpdate(prevProps) {

    if(this.props.isSpinning !== prevProps.isSpinning) {

      // Start the spin state
      if(!this.state.isSpinning && this.props.isSpinning) {
        this.setState({
          isSpinning: true,
          spinState: 1
        });
      }

      // If information has been loaded
      if(this.state.isSpinning && !this.props.isSpinning) {
        this.setState({
          spinState: 2
        });
      }
    }
  }

  // 0 = Loading screen not shown
  // 1 = Fade in loading screen
  // 2 = Show loading screen
  // 3 = Fade out loading screen
  displaySpinner() {

    if(!this.state.isSpinning) {
      return null;
    }

    let currClass = 'spin-container';
    switch(this.state.spinState) {
      case 0:
        currClass += ' spin-container-end-spin';
        break;
      case 1:
        currClass += ' spin-container-start-spin spin-container-fade-in';
        break;
      case 2:
        currClass += ' spin-container-fade-out';
        break;
      default:
        break;
    }

    return (
      <div className={currClass} onAnimationEnd={this.onAnimationEnd}>
          <Spinner animation="border" role="status" variant="light" className="spin"/>
      </div>
    )
  }

  onAnimationEnd = () => {

    if(this.state.spinState === 2) {
      this.setState({
        spinState: 0,
        isSpinning: false
      });
    }
  }

  render() {
    return (
      <div>
        {this.displaySpinner()}
      </div>
    );
  }
}

export default WeatherSpinner;
