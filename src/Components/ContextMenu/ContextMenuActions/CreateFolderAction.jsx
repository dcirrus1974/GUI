import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import { setVisibleDialogCreateFolder } from '../../../actions/actions';

export default function CreateFolderAction() {
  const dispatch = useDispatch();

  return (
    <Button 
      variant="contained" 
      size="large" 
      onClick={() => dispatch(setVisibleDialogCreateFolder(true)) }
      style={{textTransform: 'none', backgroundColor: '#2196f3', color: 'white', marginRight: '20px'}}>
      New Folder &nbsp;<AddIcon style={{fill: "white"}} />
    </Button>
  );
}
