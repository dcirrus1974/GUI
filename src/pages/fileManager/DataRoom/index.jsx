import React from 'react';
import Navbar from '../../../Components/Navbar';
import Sidebar from '../../../Components/Sidebar';
import PersonalSubHeader from '../../../Components/Header/personalSub';
import FileList from '../../../Components/FileList/FileList.jsx';
import Dialogs from '../../../Components/Dialogs/Dialogs.jsx';

export default function DataRoom(){

  return (
    <>
      <Navbar />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <div style={{width: '100%', marginTop: '74px'}}>
          <PersonalSubHeader title="Data Room" />
          <FileList checkbox="true"/>
        </div>
      </div>
      <Dialogs />
    </>
  );
}
