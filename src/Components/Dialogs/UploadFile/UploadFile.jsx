import React from 'react';
import { setVisibleDialogUploadFile } from '../../../actions/actions';
import {DropzoneDialog} from 'material-ui-dropzone'
import { useSelector, useDispatch } from 'react-redux';

function FormDialog() {
  const dispatch = useDispatch();
  const open = useSelector(state => state.personalData.visibleDialogUploadFile);
  const handleSave = (files) => {
    console.log(files);
  }
 
  return (
    <>
      <DropzoneDialog
        open={open}
        onSave={handleSave}
        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
        showPreviews={true}
        maxFileSize={5000000}
        onClose={() => dispatch(setVisibleDialogUploadFile(false))}
      />
    </>
  );
}

export default FormDialog;
