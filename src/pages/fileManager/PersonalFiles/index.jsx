import React from 'react';
import Navbar from '../../../Components/Navbar';
import Sidebar from '../../../Components/Sidebar';
import PersonalRootHeader from '../../../Components/Header/personalRoot';
// import PersonalSubHeader from '../../../Components/Header/personalSub';
import FileList from '../../../Components/FileList/FileList.jsx';
import Dialogs from '../../../Components/Dialogs/Dialogs.jsx';

export default function PersonalFiles(){

  return (
    <>
      <Navbar />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <div style={{width: '100%', marginTop: '74px'}}>
          <PersonalRootHeader title="Personal Files" />
          <FileList />
        </div>
      </div>
      <Dialogs />
    </>
  );
}
