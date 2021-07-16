import React, { useState } from 'react'
import { Button,
        ButtonGroup,
        TextField,
        InputAdornment,
        IconButton,
        FormControl,
        OutlinedInput
        } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { useHistory} from "react-router-dom";
import './index.css';
import Axios from 'axios';

const Index_right = () => {
  const [isForgot, setIsForgot] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isIndividual, setIsIndividual] = useState(false);
  const [captchaImg, setCaptchaImg] = useState('');
  const [email, setEmail] = useState('');
  const [corporateId, setCorporateId] = useState('');
  const [captcha, setCaptcha] = useState('');
  const history = useHistory();

  React.useEffect( () => {
    const getCaptcha = async () => {
      const captcha=await Axios.request({
        url: "https://dcirrus.co.in/api.acms/v1/publicapi/gencaptcha/0/loginFetchCaptchaAfter",
        method: "post",
        withCredentials: true,
      });
      setCaptchaImg(captcha.data.objectD.img);
    }
    getCaptcha();
  }, []);

  const forgot = (e) => {
    e.preventDefault();
    setIsForgot(!isForgot);
  };
  const onIndividual = () => {
    setIsIndividual(true);
    document.getElementById('individual').style.backgroundColor = "#016fd3";
    document.getElementById('individual').style.color = "white";
    document.getElementById('bussiness').style.backgroundColor = "white";
    document.getElementById('bussiness').style.color = "#016fd3";
  };
  const onBussiness = () => {
    setIsIndividual(false);
    document.getElementById('bussiness').style.backgroundColor = "#016fd3";
    document.getElementById('bussiness').style.color = "white";
    document.getElementById('individual').style.backgroundColor = "white";
    document.getElementById('individual').style.color = "#016fd3";
  };
  
  const onSubmit = async () => {
    const dvcid = email.toUpperCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, '');
    const login_data = {
      "userValidateDto": {
      "userName": email,
      "password": password,
      "lawFirmNumber": corporateId,
      "deviceId": dvcid,
      "captcaStr": captcha,
      "rememberMe": 0
      },
      "deviceDto": {
        "lawFirmNumber": corporateId,
        "loginId": email,
        "deviceId": dvcid,
        "remoteAddress": "1.1.1.1",
        "deviceType": "desktop",
        "deviceName": "Web Browser",
        "remoteAddressV4": "1.1.1.1",
        "geoLocation": "",
        "regNew": "browser"
      },
    }
    let token = await Axios.request({
      url: "https://dcirrus.co.in/api.acms/v1/publicapi/login/0/loginsuccess",
      method: 'post',
      headers: { 
        'Content-Type': 'application/json', 
      },
      withCredentials: true,
      data: login_data,
    });
    localStorage.setItem('token', token.data.objectD.token);
    history.push("/personal");
  }

  return (
    <div style={{width: '50%'}}>
      <div className="login_part_right">          
          {!isForgot?
          <div className="title_login">LOGIN</div>
          :null}          
          {isForgot?
          <div className="title_forgot">FORGOT PASSWORD</div>
          :null}     
          <div className="btn_group_1">
            <ButtonGroup variant="contained" style={{width: "100%", border: "1px solid #016fd3"}}>
              <Button variant="outlined" id="individual" onClick={onIndividual} style={{padding: "12px 0"}}>Individual</Button>
              <Button variant="outlined" id="bussiness" onClick={onBussiness}>Bussiness</Button>
            </ButtonGroup>            
          </div>          
          <div className="cid_login">
              <div>Login ID<span className="icon-star">*</span></div>
              <TextField 
                id="email" 
                placeholder="Akhil@Dcirrus.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined" 
                size="small" 
                style={{width: "100%", marginTop: "5px"}} />
          </div>            
            {!isIndividual?<div className="cid_corporate">              
              <div>Corporate ID <span className="icon-star">*</span></div>
              <TextField 
                id="corporateId" 
                variant="outlined"
                value={corporateId}
                onChange={(e) => setCorporateId(e.target.value)}
                size="small" 
                style={{width: "100%", marginTop: "5px"}} />
          </div>:null}
          {!isForgot?
            <>
              <div className="cid_password">
                <div>Password <span className="icon-star">*</span></div>
                <FormControl size="small" variant="outlined" style={{width: "100%", marginTop: "5px"}}>
                  <OutlinedInput
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={ (e) => setPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={0}
                  />
                </FormControl>
              </div>
              <div className="cid_captcha">
                  <div>Captcha <span className="icon-star">*</span></div>
                  <div style={{display: "flex", marginTop: "5px"}}>              
                    <TextField 
                      id="captcha" 
                      variant="outlined"
                      value={captcha}
                      onChange={(e) => setCaptcha(e.target.value)}
                      size="small" 
                      style={{width: "calc(100% - 150px)"}} />
                    <div className="img_captcha" style={{backgroundImage: 'url('+captchaImg+')'}}>
                    </div>
                  </div>    
              </div>          
              <div className="login_bottom">
                <div className="login_stay_check">
                  <input type="checkbox"/>
                  <label>Stay logged in</label>
                </div> 
                <Button variant="contained" onClick={onSubmit}>Login</Button>                         
              </div>
              <div className="login_btm_url">                        
                <a href="javascript;" onClick={forgot}>Forgot Passoword?</a>&nbsp;|&nbsp;
                <a href="javascript;">Create New Account</a>
              </div>
            </> : null}
          {isForgot?
          <div className="forgot_btm">
            <Button variant="contained" onClick={() => setIsForgot(!isForgot)}>Back</Button>
            <Button variant="contained">Get Password Reset Link</Button>
          </div>
          :null}
      </div>      
    </div>
  );
}
export default Index_right;
