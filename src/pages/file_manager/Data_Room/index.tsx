import React, {useState, useEffect, useRef} from 'react'
import Menubar from '../../../components/MenuBar'
import Header from '../../../layouts/Header'
import './index.scss';
const Data_Room: React.FC = () => {
    return (
      <div className="Data_Room">      
        <Header/>
        <Menubar/>    
      </div>      
    );
}
export default Data_Room;
