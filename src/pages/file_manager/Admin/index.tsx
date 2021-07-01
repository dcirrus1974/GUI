import React, {useState, useEffect, useRef} from 'react'
import Menubar from '../../../components/MenuBar'
import Header from '../../../layouts/Header'
import './index.scss';
const Admin: React.FC = () => {
    return (
      <div className="Admin">     
        <Header/>
        <Menubar/>     
      </div>      
    );
}
export default Admin;
