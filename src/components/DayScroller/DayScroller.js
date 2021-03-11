import React, { Component} from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import '../root.css';
import './DayScroller.css'

class DayScoller extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currSelection: 0,
            width: 0,
            height: 0
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    getIcon = (icon, desc) => {
        let iconSrc = "https://openweathermap.org/img/wn/" + icon + "@4x.png";

        if(this.state.width < this.state.height * 0.9) {
            return <img className="scroll-icon-lg" src={iconSrc} alt={desc}></img>
        }
        return <img className="scroll-icon-sm" src={iconSrc} alt={desc}></img>
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

        
        return (
        <div key={i} className={currContainerClass}>
            <div className={currIconClass}></div>
            <div className="scroll-date">{element.day.toUpperCase()}</div>
            {this.getIcon(element.weather.icon, element.weather.description)}
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