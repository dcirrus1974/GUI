import React from 'react'
import Button from '@material-ui/core/Button';

import './index.css';
import img_icon from '../../assets/images/dcirruslogo_big.png';


const Index_left = () => {    
    return (
      <div style={{width: "50%"}}>
        <div className="login_part_left">
            <div className="icon_header">  
              <img src={img_icon} alt="logo"></img>
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
              <Button variant="contained">DCirrus.com</Button>
            </div>
            <div className="login_left_footer">
              <a href="javascript;">Privacy Policy</a>&nbsp;|&nbsp;
              <a href="javascript;">Terms & services</a>&nbsp;|&nbsp;            
              <a href="javascript">Contact us</a>
            </div>
            <div className="login_copyright">
              Copyright 2020 DCirrus. All Rights Reserved.
            </div>
        </div>
      </div>
    );
}

export default Index_left;
