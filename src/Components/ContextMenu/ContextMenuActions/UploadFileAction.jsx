import React from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useDispatch } from 'react-redux';
import { setVisibleDialogUploadFile } from '../../../actions/actions';

export default function UploadFileAction() {
  const dispatch = useDispatch();

  return (
    <Button 
      variant="outlined" 
      size="large"
      onClick={() => dispatch(setVisibleDialogUploadFile(true))} 
      style={{textTransform: 'none', borderColor: '#2196f3', color: '#2196f3', marginRight: '30px'}}>
      Upload &nbsp;<CloudUploadIcon />
    </Button>
  );
}
