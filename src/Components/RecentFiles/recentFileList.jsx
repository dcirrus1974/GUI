/* eslint-disable */
import React, { useEffect } from 'react';
import File from '../File/File.jsx'; 
import './FileList.css';



function CreateData(name, size, share, version, date,tag) {
    return { name, size, share, version, date,tag};
}
const CalSize=(size)=>{
    if(size<1024)
      return size+'Byte';
    else if(size<1024*1024)
      return Math.floor(size/1024)+'KB';
    else if(size<1024*1024*1024)
      return Math.floor(size/(1024*1024))+'MB';
    else
      return Math.floor(size/(1024*1024*1024))+'GB';
} 



export default function FileList() {            
    return(
    <div className="FileList" style={{display:'flex', flexDirection:'column'}}>
        <div className="folder_title">Today</div>            
        <hr/>            
        <div>
            <File type="docx" name="My File01" size="1MB"/>
            <File type="docx" name="My File01" size="1MB"/>
            <File type="docx" name="My File01" size="1MB"/>
            <File type="docx" name="My File01" size="1MB"/>
            <File type="docx" name="My File01" size="1MB"/>
            <File type="docx" name="My File01" size="1MB"/>
            <File type="docx" name="My File01" size="1MB"/>
            
        </div>     
        <div className="file_title">Yesterday</div>
        <hr/>        
        <div>
            <File type="docx" name="My File01" size="1MB"/>
            <File type="docx" name="My File01" size="1MB"/>
            <File type="docx" name="My File01" size="1MB"/>
            <File type="docx" name="My File01" size="1MB"/>
            <File type="docx" name="My File01" size="1MB"/>
        </div>
        <div className="file_title">Last Month</div>
        <hr/>        
        <div>
            <File type="docx" name="My File01" size="1MB"/>
            <File type="docx" name="My File01" size="1MB"/>
            <File type="docx" name="My File01" size="1MB"/>
            <File type="docx" name="My File01" size="1MB"/>
            <File type="docx" name="My File01" size="1MB"/>
            <File type="docx" name="My File01" size="1MB"/>
        </div>
    </div>)
}
