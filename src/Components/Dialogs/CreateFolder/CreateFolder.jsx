import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { setVisibleDialogCreateFolder } from '../../../actions/actions';

function FormDialog(props) {
    const dispatch = useDispatch();
    const open = useSelector(state => state.personalData.visibleDialogCreateFolder);
    const { handleSave, value } = props;

    return (
      <>
        <Dialog open={open} onClose={() => dispatch(setVisibleDialogCreateFolder(false))} aria-labelledby="form-dialog-create-folder" fullWidth={true} maxWidth={'xs'} style={{display: 'content'}}>
          <form style={{padding: '10px 0'}}>
            <DialogTitle id="form-dialog-create-folder" style={{color:"#0674d9"}}>Create New Folder</DialogTitle>
            <DialogContent>
              <div style={{fontSize: '12px', fontWeight: 'bold'}}>Folder Name <span style={{color:'red'}}>*</span></div>
              <TextField variant="outlined" autoFocus fullWidth margin="dense" type="text" value={value} />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => dispatch(setVisibleDialogCreateFolder(false))} style={{color:'grey', textTransform: 'none', marginRight: '10px'}} type="button">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit" onClick={handleSave} style={{textTransform: 'none', marginRight:'20px'}}>
                Create Folder
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </>
    );
}

export default FormDialog;
