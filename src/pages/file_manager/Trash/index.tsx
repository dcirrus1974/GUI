import React, {useState, useEffect, useRef} from 'react'
import Menubar from '../../../components/MenuBar'
import Header from '../../../layouts/Header'
import './index.scss';
const Trash: React.FC = () => {
    return (
      <div className="Trash">     
        <Header/>
        <Menubar/>     
      </div>      
    );
}
export default Trash;
