import React, {useState, useEffect, useRef} from 'react'
import Menubar from '../../../components/MenuBar'
import Header from '../../../layouts/Header'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import './index.scss';
const Personal_Files: React.FC = () => {
    return (
      <div className="Personal_Files">
        <Header/>
        <div className="personal_page">
          <Menubar/>
          <div className="personal_page_right">
            <div className="personal_page_right_top">
              <div className="personal_title">PERSONAL FILES</div>
              <div className="personal_btn_group">
                <Button variant="contained" color="primary">New Folder<AddIcon/></Button>
                <Button variant="contained" color="primary">Upload&nbsp;<CloudUploadIcon/></Button>
                <div className="icon_side"><ViewAgendaIcon/></div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    );
}
export default Personal_Files;
