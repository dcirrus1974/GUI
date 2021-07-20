/* eslint-disable */
import React, { useEffect } from 'react';
import File from '../File/File.jsx'; 
import FileListEmptyMessage from './FileListEmptyMessage';
import FolderListEmptyMessage from './FolderListEmptyMessage';
import Loader from '../Loader/Loader.jsx'; 
import './FileList.css';
import { useSelector, useDispatch } from 'react-redux';
import { getPersonalData } from '../../actions/actions';
import EnhancedTable from '../File/FileTable/FileTable.jsx';
import {Grid} from '@material-ui/core';



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



export default function FileList(props) {
    const {checkbox, isDialog}=props;
    const rows=[];
    const dispatch = useDispatch();
    const loading = useSelector(state => state.personalData.loading);
    const fileList = useSelector(state => state.personalData.allData);
    const subFileList = useSelector(state => state.personalData.subData);
    const isTable=useSelector(state=>state.personalData.isTable);
    let folderListComponent = '';
    let fileListComponent = '';
    if(fileList.action === 'fetchAllAdmFolderListResponse'){
        if(fileList.object.length > 0 && fileList !== 'error'){
            folderListComponent = fileList.object.map((file, key)=>{
                if(file.folderType==="S"){
                    rows.push(CreateData(
                        <File checkbox={checkbox} type={file.folderType} name={file.folderNM} editable={file.notePresent} folderId={'folder'+file.folderId} size={file.folderSize} key={key} />,
                        CalSize(file.folderSize),
                        "Shared",
                        file.versionNumber,
                        file.fileCreatedDate,
                        file.tag        
                    ));
                }
                return file.fileType===null ?<File isDialog={isDialog} checkbox={checkbox} type={file.folderType} name={file.folderNM} editable={file.notePresent} folderId={'folder'+file.folderId} size={file.folderSize} key={key} />:null
            });              
            fileListComponent = fileList.object.map((file, key) => {
                if(file.fileType!==null){
                    rows.push(CreateData(
                        <File checkbox={checkbox} type={file.fileType} name={file.fileName} editable={file.notePresent} size={file.fileSize} key={key} folderId={'file'+file.id} />,
                        CalSize(file.fileSize),
                        "Shared",
                        file.versionNumber,
                        file.fileCreatedDate,
                        file.tag
                    ));
                }
                return file.fileType!==null ? <File checkbox={checkbox} type={file.fileType} name={file.fileName} editable={file.notePresent} size={file.fileSize} key={key} folderId={'file'+file.id}/>:null
            });                                  
        }
    } 
    if(subFileList.action === 'fetchAllAdmFolderChildListResponse'){
        if(subFileList !== 'error'){
            folderListComponent = subFileList.object.unIndexFoldersList.map((file, key)=>{
                if(file.folderType==="S"){
                    rows.push(CreateData(
                        <File checkbox={checkbox} type={file.folderType} name={file.folderPathLastChild} editable={file.notePresent} folderId={'folder'+file.folderId} size={file.folderSize} key={key} />,
                        CalSize(file.folderSize),
                        "Shared",
                        file.versionNumber,
                        file.fileCreatedDate,
                        file.tag        
                    ));
                }
                return <File isDialog={isDialog} checkbox={checkbox} type={file.folderType} name={file.folderPathLastChild} editable={file.notePresent} folderId={'folder'+file.folderId} size={file.folderSize} key={key} />
            });
            fileListComponent = subFileList.object.unIndexDocumentsList.map((file, key) => {
                if(file.fileType!==null){
                    rows.push(CreateData(
                        <File checkbox={checkbox} type={file.fileType} name={file.fileName} editable={file.notePresent} size={file.fileSize} key={key} folderId={'file'+file.id}/>,
                        CalSize(file.fileSize),
                        "Shared",
                        file.versionNumber,
                        file.fileCreatedDate,
                        file.tag
                    ));
                }
                return <File checkbox={checkbox} type={file.fileType} name={file.fileName} editable={file.notePresent} size={file.fileSize} key={key} folderId={'file'+file.id}/>
            });
        }
    }

    useEffect(() => {
        dispatch(getPersonalData());            
    }, []);

    return isDialog?
    <div className="folder_content">        
        { loading ? 
            <Loader /> : 
            folderListComponent.length ? folderListComponent : <FolderListEmptyMessage />
        }            
    </div>
    :isTable?<div className="FileList">
        <div className="folder_title">Folders</div>
        <div className="folder_content">
        { loading ? 
            <Loader /> : 
            folderListComponent.length ? folderListComponent : <FolderListEmptyMessage />
        }            
        </div><hr/>            
        <div className="file_title">Files</div>
        <div className="file_content">
        { loading ? 
            <Loader /> :            
            fileListComponent.length ? fileListComponent : <FileListEmptyMessage />
        }
        </div>
    </div>:
    <div className="FileList"><EnhancedTable rows={rows}/></div>
}
