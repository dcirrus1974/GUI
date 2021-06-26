import React, {useState, useEffect, useRef} from 'react'
import { Button , ButtonGroup, Form, Col, Row, FormGroup, InputGroup, FormControl} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Redirect, useHistory} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import './index.scss';
const eye = <FontAwesomeIcon icon={faEye} />;
const eye_slash=<FontAwesomeIcon icon={faEyeSlash} />;
const Index_right: React.FC = () => {
  const [IsForgot, setIsForgot]=useState(false);
  const forgot=()=>{
    setIsForgot(IsForgot? false:true);
  };  
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [IsIndividual, setIsIndividual]=useState(true);
  const Pressed_1=()=>{    
      setIsIndividual(true);
  };
  const Pressed_2=()=>{    
    setIsIndividual(false);
  };      
  const [LoginId,setLoginId]=useState("login");
  const setlog=()=>{
    setLoginId("testing");
  };
  var min = 1;
  var max = 1000000;
  var rand =  Math.floor(min + (Math.random() * (max-min)));
  const history = useHistory();
  const load_page=()=>{    
    history.push("/personal");
  };
    return (
      <div className="login_part_right">          
          {!IsForgot?
          <div className="title_login">LOGIN</div>
          :null}          
          {IsForgot?
          <div className="title_forgot">FORGOT PASSWORD</div>
          :null}     
          <div className="btn_group_1">
            <ButtonGroup>
              <Button variant="primary" onClick={Pressed_1}>Individual</Button>
              <Button variant="primary" onClick={Pressed_2}>Bussiness</Button>
            </ButtonGroup>            
          </div>          
          <div className="cid_login">
              <Form.Label>Login ID <span className="icon-star">*</span></Form.Label>
              <Form.Control type="email" placeholder="Akhil@Dcirrus.com" />
          </div>            
            {!IsIndividual?<div className="cid_corporate">              
              <Form.Label>Corporate ID <span className="icon-star">*</span></Form.Label>
              <Form.Control type="number" placeholder="785521622" />
          </div>:null}
          {!IsForgot?
          <div>
            <FormGroup className="cid_password">
                <Form.Label>Password <span className="icon-star">*</span></Form.Label>
                <InputGroup>
                  <FormControl type={passwordShown ? "text" : "password"}></FormControl>
                  <InputGroup.Append><i onClick={togglePasswordVisiblity}>{passwordShown ? eye : eye_slash}</i></InputGroup.Append>
                </InputGroup>                
            </FormGroup>
          <div className="cid_captcha">
              <Form.Label>Captcha <span className="icon-star">*</span></Form.Label>              
              <div className="captcha">
              <Form.Control className="captcha_input" type="password"/>
              <span>{rand}</span>
              </div>          
          </div>          
          <div className="login_bottom">
            <div className="login_stay_check">
              <input type="checkbox"/>
              <label>Stay logged in</label>
            </div> 
            <Button variant="primary" onClick={load_page}>Login</Button>                         
          </div>
          <div className="login_btm_url">                        
            <a onClick={forgot}>Forgot Passoword?</a>&nbsp;|&nbsp;
            <a href="#">Create New Account</a>
          </div></div>
          :null}
          {IsForgot?
          <div className="forgot_btm">
            <Button variant="primary" onClick={forgot}>Back</Button>
            <Button variant="primary">Get Password Reset Link</Button>
          </div>
          :null}
      </div>      
    );
}
export default Index_right;
