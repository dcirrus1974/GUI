import React, {useState, useEffect, useRef} from 'react'
import Menubar from '../../../components/MenuBar'
import Header from '../../../layouts/Header'
import './index.scss';
const Personal_Files: React.FC = () => {
    return (
      <div className="Personal_Files">
        <Header/>
        <div className="personal_page">
          <Menubar/>
          <div className="personal_page_right">
            <div className="personal_title">PERSONAL FILES</div>
                        
          </div>
        </div>
      </div>      
    );
}
export default Personal_Files;
