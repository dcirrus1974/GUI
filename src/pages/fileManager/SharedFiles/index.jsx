import React from 'react';
import Navbar from '../../../Components/Navbar';
import Sidebar from '../../../Components/Sidebar';
import Header from '../../../Components/Header/shardFiles';
import FileList from '../../../Components/FileList/FileList.jsx';
import Dialogs from '../../../Components/Dialogs/Dialogs.jsx';

export default function SharedFiles(){

  return (
    <>
      <Navbar />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <div style={{width: '100%', marginTop: '74px'}}>
          <Header title="Shared Files" />
          <FileList />
        </div>
      </div>
      <Dialogs />
    </>
  );
}
