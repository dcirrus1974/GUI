import React, {useState, useEffect, useRef} from 'react'
import Menubar from '../../../components/MenuBar'
import Header from '../../../layouts/Header'
import './index.scss';
const Recent_Files: React.FC = () => {
    return (
      <div className="Recent_Files">          
        <Header/>
        <Menubar/>
      </div>      
    );
}
export default Recent_Files;
