import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, useDispatch } from 'react-redux';
import { setVisibleDialogDeleteFilesOrFolders } from '../../../actions/actions';

function FormDialog(props) {
    const dispatch = useDispatch();
    const open = useSelector(state => state.personalData.visibleDialogDeleteFilesOrFolders);

    return (
        <>
        <Dialog open={open} onClose={() => dispatch(setVisibleDialogDeleteFilesOrFolders(false))} aria-labelledby="form-dialog-create-folder" fullWidth={true} maxWidth={'xs'} style={{display: 'content'}}>
            <form style={{padding: '10px 0'}}>
              <div style={{display:'flex', justifyContent:'space-between', paddingRight:'20px', alignItems: 'center'}}>
                <DialogTitle id="form-dialog-create-folder" style={{color:'#ea4335'}}>Delete Folder/File</DialogTitle>
                <CloseIcon onClick={() => dispatch(setVisibleDialogDeleteFilesOrFolders(false))} style={{color: 'grey', cursor: 'pointer'}} />
              </div>
              <div style={{fontSize: '15px', margin:'-10px 0 0 27px'}}>Are you sure you want to delete file/folder</div>
              <div style={{margin:'37px 0 10px 27px'}}>
                <Button variant="contained" style={{color:'white', textTransform: 'none', marginRight: '10px', backgroundColor:'#ea4335'}} type="button">
                  Yes, Delete
                </Button>
                <Button variant="outlined" onClick={() => dispatch(setVisibleDialogDeleteFilesOrFolders(false))} color="primary" type="submit" style={{textTransform: 'none', marginRight:'20px', color:'#ea4335', borderColor:'#ea4335'}}>
                  No
                </Button>
              </div>
            </form>
        </Dialog>
        </>
    );
}

export default FormDialog;
