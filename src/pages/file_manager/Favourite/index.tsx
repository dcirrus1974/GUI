import React, {useState, useEffect, useRef} from 'react'
import Menubar from '../../../components/MenuBar'
import Header from '../../../layouts/Header'
import './index.scss';
const Favourite: React.FC = () => {
    return (
      <div className="Favourite">          
        <Header/>
        <Menubar/>
      </div>      
    );
}
export default Favourite;
