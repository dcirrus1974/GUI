import React from 'react';
import Navbar from '../../../Components/Navbar';
import Sidebar from '../../../Components/Sidebar';
import Header from '../../../Components/Header/settings';
import SettingsList from '../../../Components/Settings/Settings.jsx';
import Dialogs from '../../../Components/Dialogs/Dialogs.jsx';

export default function Settings(){

  return (
    <>
      <Navbar />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <div style={{width: '100%', marginTop: '74px'}}>
          <Header title="Settings" />
          <SettingsList />
        </div>
      </div>
      <Dialogs />
    </>
  );
}
