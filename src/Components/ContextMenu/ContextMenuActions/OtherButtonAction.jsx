import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { setVisibleDialogRename,
        setVisibleDialogDepositRequest,
        setVisibleDialogTagFiles,
        setVisibleDialogShareFiles,
        setVisibleDialogDeleteFilesOrFolders,
        setVisibleDialogExportLogs,
        setVisibleDialogCopy,
        setVisibleDialogMove,
        setVisibleDialogHistory,
      } from '../../../actions/actions';

export default function OtherButtonAction() {
  const dispatch = useDispatch();

  return (
    <>
      <Button 
        variant="contained" 
        size="large" 
        onClick={() => dispatch(setVisibleDialogRename(true)) }
        style={{marginLeft: '20px', textTransform: 'none', backgroundColor: '#2196f3', color: 'white', marginRight: '20px'}}>
        Rename
      </Button>
      <Button 
        variant="contained" 
        size="large" 
        onClick={() => dispatch(setVisibleDialogDepositRequest(true)) }
        style={{textTransform: 'none', backgroundColor: '#2196f3', color: 'white', marginRight: '20px'}}>
        Deposit Request
      </Button>
      <Button 
        variant="contained" 
        size="large" 
        onClick={() => dispatch(setVisibleDialogTagFiles(true)) }
        style={{textTransform: 'none', backgroundColor: '#2196f3', color: 'white', marginRight: '20px'}}>
        Tag Files
      </Button>
      <Button 
        variant="contained" 
        size="large" 
        onClick={() => dispatch(setVisibleDialogShareFiles(true)) }
        style={{textTransform: 'none', backgroundColor: '#2196f3', color: 'white', marginRight: '20px'}}>
        Share Files
      </Button>
      <Button 
        variant="contained" 
        size="large" 
        onClick={() => dispatch(setVisibleDialogDeleteFilesOrFolders(true)) }
        style={{textTransform: 'none', backgroundColor: '#2196f3', color: 'white', marginRight: '20px'}}>
        Delete Files or Folders
      </Button>
      <Button 
        variant="contained" 
        size="large" 
        onClick={() => dispatch(setVisibleDialogExportLogs(true)) }
        style={{textTransform: 'none', backgroundColor: '#2196f3', color: 'white', marginRight: '20px'}}>
        Export Logs
      </Button>
      <Button 
        variant="contained" 
        size="large" 
        onClick={() => dispatch(setVisibleDialogCopy(true)) }
        style={{textTransform: 'none', backgroundColor: '#2196f3', color: 'white', marginRight: '20px'}}>
        Copy
      </Button>
      <Button 
        variant="contained" 
        size="large" 
        onClick={() => dispatch(setVisibleDialogMove(true)) }
        style={{textTransform: 'none', backgroundColor: '#2196f3', color: 'white', margin: '35px 0 0 20px'}}>
        Move
      </Button>
      <Button 
        variant="contained" 
        size="large" 
        onClick={() => dispatch(setVisibleDialogHistory(true)) }
        style={{textTransform: 'none', backgroundColor: '#2196f3', color: 'white', margin: '35px 20px 0 20px'}}>
        Version History
      </Button>
    </>
  );
}
