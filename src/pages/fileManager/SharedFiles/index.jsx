import React from 'react';
import Navbar from '../../../Components/Navbar';
import Sidebar from '../../../Components/Sidebar';
import Header from '../../../Components/Header/sharedFiles';
import Dialogs from '../../../Components/Dialogs/Dialogs.jsx';
import SharedTable from '../../../Components/SharedFiles/SharedTable';
import DepositTable from '../../../Components/SharedFiles/DepositTable';

export default function SharedFiles(){
  const [Id, setId]=React.useState(true);
  return (
    <>
      <Navbar />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <div style={{width: '100%', marginTop: '74px'}}>
          <Header title="Shared Files" Id={Id} setId={setId} />
          {Id?<SharedTable />:<DepositTable/>}
        </div>
      </div>
      <Dialogs />
    </>
  );
}
