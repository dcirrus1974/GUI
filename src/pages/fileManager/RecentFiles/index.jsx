import React from 'react';
import Navbar from '../../../Components/Navbar';
import Sidebar from '../../../Components/Sidebar';
import Header from '../../../Components/Header/recentFiles';
import FileList from '../../../Components/RecentFiles/recentFileList';
import Dialogs from '../../../Components/Dialogs/Dialogs.jsx';
import EnhancedTable from '../../../Components/RecentFiles/recentFileTable.jsx';
import { useSelector } from 'react-redux';

export default function RecentFiles(){
  const isTable=useSelector(state=>state.personalData.isTable);
  return (
    <>
      <Navbar />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <div style={{width: '100%', marginTop: '74px'}}>
          <Header title="Recent Files" />
          {isTable?<FileList />:<EnhancedTable/>}
        </div>
      </div>
      <Dialogs />
    </>
  );
}
