import React, { Component} from 'react';
import {countryList} from '../../util/CountryList';
import {CountryDropdownToggle, CountryDropdownMenu} from './CountryDropdownUtil';
import Dropdown from 'react-bootstrap/Dropdown';

import '../root.css';
import './CountryDropdown.css'

class CountryDropdown extends Component {

    generateFullList() {

      let objList = [];

      countryList.forEach(element => {
        objList.push({type: "country", name: element.label});
        element.cities.forEach(city => {
          objList.push({type: "city", name: city});
        });
      });

      let resList = objList.map((elem, i) => {
        if(elem.type === "country") {
          let keyName = elem.name + '_' + elem.type;
          return <Dropdown.Header key={keyName} className="country-dropdown-country">{elem.name.toUpperCase()}</Dropdown.Header>
        }
        return <Dropdown.Item key={elem.name} eventKey={elem.name} className="country-dropdown-city-multi">&nbsp;&nbsp;{elem.name}</Dropdown.Item>
      });

      return(
        <Dropdown.Menu as={CountryDropdownMenu} className="country-dropdown-menu">
          {resList}
        </Dropdown.Menu>
      );
    }

    render() {
      return (
        <Dropdown
          className="country-dropdown"
          onSelect={this.props.onSelect}>

          <Dropdown.Toggle as={CountryDropdownToggle}>
              {this.props.country}
          </Dropdown.Toggle>
          {this.generateFullList()}
        </Dropdown>
      )
    }
}

export default CountryDropdown;