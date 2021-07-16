import React from 'react';
import Navbar from '../../../Components/Navbar';
import Sidebar from '../../../Components/Sidebar';
import Header from '../../../Components/Header/recentFiles';
import FileList from '../../../Components/FileList/FileList.jsx';
import Dialogs from '../../../Components/Dialogs/Dialogs.jsx';

export default function Favourite(){

  return (
    <>
      <Navbar />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <div style={{width: '100%'}}>
          <Header title="Favourite" />
          <FileList />
        </div>
      </div>
      <Dialogs />
    </>
  );
}
