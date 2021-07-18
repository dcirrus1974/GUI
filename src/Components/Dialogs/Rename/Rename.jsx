import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, useDispatch } from 'react-redux';
import { setVisibleDialogRename } from '../../../actions/actions';

function FormDialog(props) {
    const dispatch = useDispatch();
    const open = useSelector(state => state.personalData.visibleDialogRename);
    const { handleSave, value } = props;

    return (
        <>
        <Dialog open={open} onClose={() => dispatch(setVisibleDialogRename(false))} aria-labelledby="form-dialog-create-folder" fullWidth={true} maxWidth={'xs'} style={{display: 'content'}}>
            <form style={{padding: '10px 0'}}>
              <div style={{display:'flex', justifyContent:'space-between', paddingRight:'30px', alignItems: 'center'}}>
                <DialogTitle id="form-dialog-create-folder" style={{color:"#0674d9"}}>Rename</DialogTitle>
                <CloseIcon onClick={() => dispatch(setVisibleDialogRename(false))} style={{color: 'grey', cursor: 'pointer'}} />
              </div>
              <DialogContent>
                <div style={{fontSize: '12px', fontWeight: 'bold'}}>Rename File / Folder <span style={{color:'red'}}>*</span></div>
                <TextField variant="outlined" autoFocus fullWidth margin="dense" type="text" value={value} />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => dispatch(setVisibleDialogRename(false))} style={{color:'grey', textTransform: 'none', marginRight: '10px'}} type="button">
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit" onClick={handleSave} style={{textTransform: 'none', marginRight:'20px'}}>
                  Rename
                </Button>
              </DialogActions>
            </form>
        </Dialog>
        </>
    );
}

export default FormDialog;
