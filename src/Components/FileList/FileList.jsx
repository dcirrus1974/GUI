/* eslint-disable */
import React, { useEffect } from 'react';
import File from '../File/File.jsx'; 
import FileListEmptyMessage from './FileListEmptyMessage';
import Loader from '../Loader/Loader.jsx'; 
import './FileList.css';
import { useSelector, useDispatch } from 'react-redux';

import { getPersonalData } from '../../actions/actions';

export default function FileList() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.personalData.loading);
    const fileList = useSelector(state => state.personalData.allData);
    const subFileList = useSelector(state => state.personalData.subData);
    let folderListComponent = '';
    let fileListComponent = '';
    if(fileList.action === 'fetchAllAdmFolderListResponse'){
        if(fileList.object.length > 0 && fileList !== 'error'){
            fileListComponent = fileList.object.map((file, key) => {
                return file.fileType!==null ? <File type={file.fileType} name={file.fileName} editable={file.notePresent} size={file.fileSize} key={key} />:null
            });
            folderListComponent = fileList.object.map((file, key)=>{
                return file.fileType===null ? <File type={file.folderType} name={file.folderNM} editable={file.notePresent} folderId={file.folderId} size={file.folderSize} key={key} />:null
            });
        }
    } else if(subFileList.action === 'fetchAllAdmFolderChildListResponse'){
        if(subFileList !== 'error'){
            fileListComponent = subFileList.object.unIndexDocumentsList.map((file, key) => {
                return <File type={file.fileType} name={file.fileName} editable={file.notePresent} size={file.fileSize} key={key} />
            });
            folderListComponent = subFileList.object.unIndexFoldersList.map((file, key)=>{
                return <File type={file.folderType} name={file.folderPathLastChild} editable={file.notePresent} folderId={file.folderId} size={file.folderSize} key={key} />
            });
        }
    }

    useEffect(() => {
        dispatch(getPersonalData());    
    }, []);

    return <div className="FileList">
        <div className="folder_title">Folders</div>
        <div className="folder_content">
        { loading ? 
            <Loader /> : 
            folderListComponent.length ? folderListComponent : <FileListEmptyMessage />
        }            
        </div><hr/>            
        <div className="file_title">Files</div>
        <div className="file_content">
        { loading ? 
            <Loader /> :            
            fileListComponent.length ? fileListComponent : <FileListEmptyMessage />
        }
        </div>
    </div>
}
