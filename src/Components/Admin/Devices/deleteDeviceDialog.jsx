import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Button from '@material-ui/core/Button';
import {makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

export default function DeleteDeviceDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const useStyles = makeStyles((theme) => ({
    title_row:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      padding:20,
    },
    text:{
      width:400,
      color:'black',
      fontWeight:500,
    },
    btn_grp:{
      margin:20,
      display:'flex',
      justifyContent:'flex-start',
      gap:10,
    },   
    btn_yes:{
      color:'white',
      backgroundColor:'red',
      '&:hover':{
        color:'white',
        backgroundColor:'red',
      }
    },
    btn_no:{
      color:'red',
      border:'1px solid red',
    }   
  }));
  const classes=useStyles(); 
  return (
    <div>
      <div className="usercell" onClick={handleClickOpen}><DeleteOutlineOutlinedIcon color="secondary"/><span>Delete</span></div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"         
      >
        <div className={classes.title_row}>
          <Typography variant="h5" style={{color:'#ea4335', fontWeight:600}}>Delete Device</Typography>
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>   
        </div>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.text}>
          Are you sure you want to delete "Device"
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.btn_grp}>
          <Button onClick={handleClose} className={classes.btn_yes}>
            Yes,Delete
          </Button>
          <Button onClick={handleClose} className={classes.btn_no}>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}