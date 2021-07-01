import React, {useState, useEffect, useRef} from 'react'
import Menubar from '../../../components/MenuBar'
import Header from '../../../layouts/Header'
import './index.scss';
const Settings: React.FC = () => {
    return (
      <div className="Settings">    
        <Header/>
        <Menubar/>      
      </div>      
    );
}
export default Settings;
