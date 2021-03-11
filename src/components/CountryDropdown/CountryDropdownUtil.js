import React, {useState} from 'react';
import FormControl from 'react-bootstrap/FormControl';
import {BiDownArrow} from 'react-icons/bi'

export const CountryDropdownToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
      href=""
      ref={ref}
      className="country-dropdown-current"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <span className="country-dropdown-arrow">&nbsp;<BiDownArrow/></span>
    </div>
  ));
  
  export const CountryDropdownMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {children.filter(
              (child) => !value || child.key.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );