import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Avatar, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import img_avartar from '../../assets/images/avatar.png';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DoughnutChart from './DoughnutChart.jsx';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  btn_pass:{
    backgroundColor:'white',
    border:'1px solid blue',
    color:'blue',
  },
  btn_out:{
    backgroundColor:'red',
    color:'white',
    '&:focus':{
    },
    '&:hover':{
      backgroundColor:'red',
      color:'white',
    },
    '&:active':{

    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 4, 4),
    maxWidth:'90vw',
    minWidth:'80vw',
    overflow: 'scroll',
    maxHeight:'90vh',
  },
  title:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom:20,
  },
  body_part:{
      display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  },
  large:{
    marginTop:100,
    width:theme.spacing(10),
    height:theme.spacing(10),
  },
  left_part:{    
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:theme.spacing(3),
    border:'1px solid #e0e0e0',
    borderRadius:'10px',  
    height:'80vh'  
  },
  right_part:{

  },
  personal:{},
  storage:{
    marginTop:40,
  },
  left_btn:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:theme.spacing(2),
      gap:theme.spacing(2),
    },
  switch:{
    display:'flex',
    justifyContent:'flex-start',
  },
  canvas:{
  }
}));

export default function UserProfile() {
  

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);    
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <IconButton
          edge="end"
          aria-label="account of current user"          
          aria-haspopup="true"
          color="primary"
          onClick={handleOpen}
        >
          <AccountCircle />                  
       </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
              <div className={classes.title}>
                <Typography variant="h5">User Profile</Typography>
                <IconButton aria-label="close"  onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
              </div>
              <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <div className={classes.left_part}>
                        <Avatar className={classes.large}><img src={img_avartar} alt="user"/></Avatar>
                        <Typography variant="h6">Yogesh Waran</Typography>
                        <Typography variant="body2">yogeshwarankct@gmail.com</Typography>
                        <Typography variant="body2">+91 9876543210</Typography>
                        <div className={classes.left_btn}>
                            <Button className={classes.btn_pass}>Change Password</Button>
                            <Button className={classes.btn_out}>Sign Out</Button>
                        </div>
                    </div>                      
                  </Grid>
                  <Grid item xs={6}>
                    <div className={classes.right_part}>
                        <div className={classes.personal}>
                            <div className={classes.switch}><Switch/><Typography variant="h6" color="secondary">SWITCH ACCOUNT FEATURE</Typography></div>
                            <Typography variant="h6" color="primary">Personal Details</Typography>
                            <Grid container spacing={3} style={{marginTop:10}}>
                                <Grid item xs={6}>
                                    <Typography variant="body2"  style={{color:"#818181"}}>User Type</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1" color="default">Admin</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2"  style={{color:"#818181"}}>Sync Type</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1" color="default">Personal Folder Sync</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2"  style={{color:"#818181"}}>Company</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1" color="default">A23 Pvt Ltd</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <div style={{marginTop: '10px'}}>
                                    <input type="checkbox" id="factor" name="factor" defaultChecked value="checked" />
                                    <label htmlFor="factor"> Enable 2 factor authentication</label>
                                  </div>
                                </Grid>
                                <Grid item xs={4}>
                                  <div style={{marginTop: '10px'}}>
                                    <input type="checkbox" id="factor" name="factor" defaultChecked value="checked" />
                                    <label htmlFor="factor"> SMS</label>
                                  </div>
                                </Grid>
                                <Grid item xs={4}>
                                  <div style={{marginTop: '10px'}}>
                                    <input type="checkbox" id="factor" name="factor" defaultChecked value="checked" />
                                    <label htmlFor="factor">Email</label>
                                  </div>
                                </Grid>
                                <Grid item xs={4}>
                                  <div style={{marginTop: '10px'}}>
                                    <input type="checkbox" id="factor" name="factor" defaultChecked value="checked" />
                                    <label htmlFor="factor">Whatsapp</label>
                                  </div>
                                </Grid>
                            </Grid>                                                        
                        </div>
                        <div className={classes.storage}>
                            <Typography variant="h6" color="primary">Storage Details</Typography>
                            <Grid container>
                              <Grid item xs={3}></Grid>
                              <Grid item xs={6}>
                                <DoughnutChart/>
                              </Grid>
                              <Grid item xs={3}></Grid>                              
                            </Grid>                            
                        </div>
                    </div>  
                  </Grid>           
              </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
