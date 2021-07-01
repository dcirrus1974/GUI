import React, {useState, useEffect, useRef} from 'react'
import Menubar from '../../../components/MenuBar'
import Header from '../../../layouts/Header'
import './index.scss';
const Personal_Files: React.FC = () => {
    return (
      <div className="Personal_Files">
        <Header/>
        <Menubar/>
        
      </div>      
    );
}
export default Personal_Files;
