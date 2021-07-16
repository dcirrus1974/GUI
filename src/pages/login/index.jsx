import React from 'react'
import IndexLeft from './Index_left';
import IndexRight from './Index_right';
import './index.css';

const Login = () => {    
    return (
      <div className="page_login">
          <IndexLeft />
          <IndexRight />
      </div>
    );
}

export default Login;
