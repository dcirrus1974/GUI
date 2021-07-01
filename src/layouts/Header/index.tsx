import React, {useState, useEffect, useRef} from 'react'
import headericon from '../../assets/images/dcirruslogo_medium.png'
import { BsFillBellFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import {FaSearch, FaSlidersH} from "react-icons/fa";
import ReactSearchBox from 'react-search-box'

import './index.scss';
import { Icon } from '@fortawesome/fontawesome-svg-core';
const data = [
  {
    key: 'john',
    value: 'John Doe',
  },
  {
    key: 'jane',
    value: 'Jane Doe',
  },
  {
    key: 'mary',
    value: 'Mary Phillips',
  },
  {
    key: 'robert',
    value: 'Robert',
  },
  {
    key: 'karius',
    value: 'Karius',
  },
]
const Header: React.FC = () => {
  
    return (
      <div className="Header">       
      <img src={headericon}></img>
      <div className="icon_find"><FaSearch/></div>
      <ReactSearchBox
          placeholder="Search"
          data={data}
          onSelect={record => console.log(record)}
          onFocus={() => {
            console.log('This function is called when is focussed')
          }}
          onChange={value => console.log(value)}
          fuseConfigs={{
            threshold: 0.05,
          }}
          value="John"          
        />
        <div className="icon_mid"><FaSlidersH/></div>
        <div className="icon_bell"><BsFillBellFill/></div>
        <div className="icon_fill"><BsFillGrid3X3GapFill/></div>
        <div className="icon_circle"><BiUserCircle/></div>
      </div>      
    );
}
export default Header;
