import React, { Component} from 'react';
import {Util} from '../../util/Util';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import '../root.css';
import './TimeSlider.css'

class TimeSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spinState: 0,
      isSpinning: false
    }
  }

  getMarks() {
      return {  2: Util.getHourMark(2),
                7: Util.getHourMark(7),
                12: Util.getHourMark(12),
                17: Util.getHourMark(17),
                22: Util.getHourMark(22),
            }
  }

  getSliderClass() {
      let res = 'time-slider';
      if(!this.props.isByHour) {
          res += ' time-slider-day'
      }
      return res;
  }

  onUpdate = hour => {
    this.props.onUpdateTimeSlider(hour);
  }

  render() {
      return (
        <Slider
            className={this.getSliderClass()}
            max={23}
            marks={this.getMarks()}
            onChange={this.onUpdate}
        />
      );
  }
}

export default TimeSlider;