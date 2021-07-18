import React from 'react';
import Navbar from '../../../../Components/Navbar';
import Sidebar from '../../../../Components/Sidebar';
import Header from '../../../../Components/Header/adminAccess';
import Dialogs from '../../../../Components/Dialogs/Dialogs.jsx';
import EnhancedTableAccess from '../../../../Components/Admin/Access/accessTable.jsx';

export default function Access(){

  return (
    <>
      <Navbar/>
      <div style={{display: 'flex'}}>
        <Sidebar />
        <div style={{width: '100%', marginTop: '74px'}}>
          <Header title="Access Permissions"/>
          <EnhancedTableAccess/>
        </div>
      </div>
      <Dialogs />
    </>
  );
}
