import React from 'react';
import Navbar from '../../../Components/Navbar';
import Sidebar from '../../../Components/Sidebar';
import PersonalSubHeader from '../../../Components/Header/personalSub';
// import FileList from '../../../Components/FileList/FileList.jsx';
import Dialogs from '../../../Components/Dialogs/Dialogs.jsx';
import EnhancedTable from '../../../Components/File/FileTable/FileTable.jsx';

export default function DataRoom(){

  return (
    <>
      <Navbar />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <div style={{width: '100%'}}>
          <PersonalSubHeader title="Data Room" />
          <EnhancedTable />
        </div>
      </div>
      <Dialogs />
    </>
  );
}
