import React from 'react';
import Navbar from '../../../Components/Navbar';
import Sidebar from '../../../Components/Sidebar';
import Header from '../../../Components/Header/recentFiles';
import Dialogs from '../../../Components/Dialogs/Dialogs.jsx';
import Buttons from '../../../Components/ContextMenu/ContextMenuActions/OtherButtonAction.jsx';

export default function Favourite(){

  return (
    <>
      <Navbar />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <div style={{width: '100%', marginTop: '74px'}}>
          <Header title="Modals" />
          <Buttons />
        </div>
      </div>
      <Dialogs />
    </>
  );
}
