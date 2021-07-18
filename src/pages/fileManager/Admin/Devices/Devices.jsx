import React from 'react';
import Navbar from '../../../../Components/Navbar';
import Sidebar from '../../../../Components/Sidebar';
import Header from '../../../../Components/Header/adminDevices';
import Dialogs from '../../../../Components/Dialogs/Dialogs.jsx';
import EnhancedTableAll from '../../../../Components/Admin/Devices/allTable';
import EnhancedTableAuto from '../../../../Components/Admin/Devices/autoIpTable';


export default function Devices(){
  const [Id, setId]=React.useState(true);
  return (
    <>
      <Navbar />
      <div style={{display: 'flex'}}>
        <Sidebar />
        <div style={{width: '100%', marginTop: '74px'}}>
          <Header title="Devices" setId={setId} Id={Id}/>
          {Id?<EnhancedTableAll/>:<EnhancedTableAuto/>}
        </div>
      </div>
      <Dialogs />
    </>
  );
}
