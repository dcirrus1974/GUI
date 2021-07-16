import React from 'react';
import {Button,
        InputAdornment,
        TextField,
        Dialog,
        DialogContent,
        DialogTitle,
      } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch } from 'react-redux';
import { setVisibleDialogTagFiles } from '../../../actions/actions';

function FormDialog(props) {
    const dispatch = useDispatch();
    const open = useSelector(state => state.personalData.visibleDialogTagFiles);
    const { value } = props;

    return (
      <>
        <Dialog open={open} onClose={() => dispatch(setVisibleDialogTagFiles(false))} aria-labelledby="form-dialog-create-folder" fullWidth={true} maxWidth={'xs'} style={{display: 'content'}}>
          <form style={{padding: '10px 0'}}>
            <div style={{display:'flex', justifyContent:'space-between', paddingRight:'30px', alignItems: 'center'}}>
              <DialogTitle id="form-dialog-create-folder">Tag: <span style={{color: '#2196f3'}}>File 001</span></DialogTitle>
              <CloseIcon onClick={() => dispatch(setVisibleDialogTagFiles(false))} style={{color: 'grey', cursor: 'pointer'}} />
            </div>
            <DialogContent>
              <div style={{fontSize: '12px', fontWeight: 'bold'}}>New Tag <span style={{color:'red'}}>*</span></div>
              <TextField 
                variant="outlined"
                placeholder="Type New tag and Click Enter to add"
                autoFocus fullWidth margin="dense" 
                type="text" value={value}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button variant="contained" size="small" style={{backgroundColor: '#2196f3', color: 'white', maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}>
                        <AddIcon />
                      </Button>
                    </InputAdornment>
                  ),
                }} 
              />
              <div style={{marginTop:'20px'}}>
                <div style={{fontSize: '12px', fontWeight: 'bold'}}>Added Tags</div>
              </div>
              <div style={{marginTop:'18px', fontSize: '13px', display: 'flex', alignItems: 'center'}}>
                <div style={{color:'#2196f3', marginLeft: '10px'}}>Tag 01 </div><CloseIcon style={{width: '15px', color:'grey', margin:'0 25px 0 5px'}} />
                <div style={{color:'#2196f3'}}>Tag 02 </div><CloseIcon style={{width: '15px', color:'grey', margin:'0 25px 0 5px'}} />
                <div style={{color:'#2196f3'}}>Tag 02 </div><CloseIcon style={{width: '15px', color:'grey', margin:'0 25px 0 5px'}} />
                <div style={{color:'#2196f3'}}>Tag 02 </div><CloseIcon style={{width: '15px', color:'grey', margin:'0 25px 0 5px'}} />
              </div>
            </DialogContent>
          </form>
        </Dialog>
      </>
    );
}

export default FormDialog;
