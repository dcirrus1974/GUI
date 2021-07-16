import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {makeStyles } from '@material-ui/core/styles';
import PersonAddDisabledOutlinedIcon from '@material-ui/icons/PersonAddDisabledOutlined';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

export default function BlockDeviceDialog() {
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
      color:'black',
      backgroundColor:'#ffaa00',
      '&:hover':{
        color:'black',
        backgroundColor:'#ffaa00',
      }
    },
    btn_no:{
      color:'black',
      border:'1px solid #ffaa00',
    }   
  }));
  const classes=useStyles(); 
  return (
    <div>
      <div className="usercell" onClick={handleClickOpen}><PersonAddDisabledOutlinedIcon color="secondary"/><span>Block Device</span></div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"         
      >
        <div className={classes.title_row}>
          <Typography variant="h5" style={{color:'#ffaa00', fontWeight:600}}>Block Device</Typography>
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>   
        </div>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.text}>
          Are you sure you want to Block "Device"
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.btn_grp}>
          <Button onClick={handleClose} className={classes.btn_yes}>
            Yes, Block
          </Button>
          <Button onClick={handleClose} className={classes.btn_no}>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}