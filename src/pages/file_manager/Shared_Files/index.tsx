import React, {useState, useEffect, useRef} from 'react'
import Menubar from '../../../components/MenuBar'
import Header from '../../../layouts/Header'
import './index.scss';
const Shared_Files: React.FC = () => {
    return (
      <div className="Shared_Files">      
        <Header/>
        <Menubar/>    
      </div>      
    );
}
export default Shared_Files;
