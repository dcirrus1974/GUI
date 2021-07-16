import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import img_device from '../../../assets/images/add_device.png'

export default function AddAutoIPDeviceAction() {
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
      width:800,
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
      backgroundColor:'#3366ff',
      '&:hover':{
        color:'white',
        backgroundColor:'#3366ff',
      }
    },
  }));
  const classes=useStyles(); 
  return (
    <div>
      <Button 
        variant="contained" 
        size="large" 
        onClick={handleClickOpen}
        style={{textTransform: 'none', backgroundColor: '#2196f3', color: 'white', marginRight: '20px'}}>
        Add Auto IP Device &nbsp;<AddIcon style={{fill: "white"}} />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"          
        maxWidth={100}       
      >
        <div className={classes.title_row}>
          <Typography variant="h5" style={{color:'#212121', fontWeight:600}}>Auto IP Device</Typography>
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>   
        </div>
        <DialogContent style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <DialogContentText id="alert-dialog-description" style={{textAlign:'center'}} className={classes.text}>
          Auto Approve Device From The Following IP Address List
          </DialogContentText>
          <img src={img_device} alt="device" width="350"/>
          <div>
            <input type="text" style={{width:'60px', height:'30px'}}/>&nbsp;:&nbsp;
            <input type="text" style={{width:'60px', height:'30px'}}/>&nbsp;:&nbsp;
            <input type="text" style={{width:'60px', height:'30px'}}/>&nbsp;:&nbsp;
            <input type="text" style={{width:'60px', height:'30px'}}/>
          </div>
        </DialogContent>
        <DialogActions className={classes.btn_grp} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <Button onClick={handleClose} className={classes.btn_yes}>
            Add Device
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}