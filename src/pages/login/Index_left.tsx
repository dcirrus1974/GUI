import React, {useState, useEffect, useRef} from 'react'
import { Button , ButtonGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

import './index.scss';
import img_icon from '../../assets/images/dcirruslogo_big.png';


const Index_left: React.FC = () => {    
    return (
      <div className="login_part_left">
          <div className="icon_header">  
            <img src={img_icon}></img>
          </div>             
          <div className="mid_line"></div>
          <div className="title_why">
            <p className="title_1"><strong>Why DCirrus?</strong></p>
            <p className="title_2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="btn_page">
            <Button>DCirrus.com</Button>
          </div>
          <div className="login_left_footer">
            <a href="#">Privacy Policy</a>&nbsp;|&nbsp;
            <a href="#">Terms & services</a>&nbsp;|&nbsp;            
            <a href="#">Contact us</a>
          </div>
          <div className="login_copyright">
            Copyright 2020 DCirrus. All Rights Reserved.
          </div>
      </div>
    );
}

export default Index_left;
