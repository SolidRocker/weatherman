import React, { Component} from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import '../root.css';
import './DayScroller.css'

class DayScoller extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currSelection: 0
        }
    }

    onSelect = key => {
        this.setState({
            currSelection: key
        })
        this.props.onUpdate(key);
    }

    renderBox = (element, i) => {

        let currContainerClass = "scroll-box";
        let currIconClass = "scroll-arrow-hidden";

        if(this.state.currSelection == i) {
            currContainerClass = "scroll-box-active";
            currIconClass = "scroll-arrow";
        }

        let iconSrc = "http://openweathermap.org/img/wn/" + element.weather.icon + "@4x.png";

        return (
        <div key={i} className={currContainerClass}>
            <div className={currIconClass}></div>
            <div className="scroll-date">{element.day.toUpperCase()}</div>
            <img className="scroll-icon" src={iconSrc} alt={element.weather.description}></img>
            <div className="scroll-temp-day">{element.temp.day}&deg;</div>
            <div className="scroll-temp-night">{element.temp.night}&deg;</div>
        </div>
        );
    }

    render() {
      return (
            <ScrollMenu
                alignCenter={false}
                data={this.props.dailyWeather.map(this.renderBox)}
                selected={this.props.currSelection}
                onSelect={this.onSelect}
            />
      )
    }
}

export default DayScoller;