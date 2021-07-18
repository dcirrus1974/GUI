import React from 'react';
import Navbar from '../../../../Components/Navbar';
import Sidebar from '../../../../Components/Sidebar';
import Header from '../../../../Components/Header/adminUser';
import Dialogs from '../../../../Components/Dialogs/Dialogs.jsx';
import EnhancedTable from '../../../../Components/Admin/Users/userTable.jsx';

export default function Users(){

  return (
    <>
      <Navbar />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <div style={{width: '100%', marginTop: '74px'}}>
          <Header title="Users" />
          <EnhancedTable/>
        </div>
      </div>
      <Dialogs />
    </>
  );
}
