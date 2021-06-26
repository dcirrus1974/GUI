import React, {useState, useEffect, useRef} from 'react'
import { Button , Row, Col, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import Index_left from './Index_left';
import Index_right from './Index_right';
import './index.scss';


const Login: React.FC = () => {    
    return (
      <div className="page_login">
          <Index_left/>
          <Index_right/>
      </div>
    );
}

export default Login;
