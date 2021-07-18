import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {AppBar,
        Tabs,
        Tab,
        Typography,
        Box,
        Grid,
        TextField,
        Button,
      } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, useDispatch } from 'react-redux';
import { setVisibleDialogShareFiles } from '../../../actions/actions';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2, 3, 0, 3),
    flexGrow: 1,
    minHeight: '488px',
    backgroundColor: theme.palette.background.paper,
  },
  mainHeader: {
    padding: theme.spacing(3, 3, 0, 3),
    display: 'flex',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: "Poppins",
    fontWeight: '800',
    marginTop: '10px',
    fontSize: '15px',
  },
  labelOne: {
    fontFamily: "Poppins",
    fontWeight: '800',
    marginTop: '15px',
    fontSize: '15px',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  buttonOne: {
    textTransform: 'none', 
    backgroundColor: '#2196f3', 
    color: 'white', 
    fontWeight: 'bold',
    float: 'right',
    margin: theme.spacing(35, 0, 0, 0),
  },
  buttonTwo: {
    textTransform: 'none', 
    borderColor: '#2196f3', 
    color: '#2196f3', 
    fontWeight: 'bold',
    float: 'right',
    margin: theme.spacing(2, 2, 0, 0),
  },
  button: {
    textTransform: 'none', 
    backgroundColor: '#2196f3', 
    color: 'white',
    fontWeight: 'bold',
    fontSize: '12px',
    height: '25px',
    borderRadius: '25px',
    margin: theme.spacing(0, 2, 0, 0),
  },
  emailTitle: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#2196f3',
    display: 'flex',
    alignItems: 'center',
  },
  radio: {
    marginTop: '10px',
  },
  greyLi: {
    color: 'grey',
    fontSize: '12px',
    marginTop: '15px',
  },
  buttonShare: {
    textTransform: 'none', 
    backgroundColor: '#2196f3', 
    color: 'white', 
    fontWeight: 'bold',
    float: 'right',
    margin: theme.spacing(5, 0, 3, 0),
  },
  buttonCancel: {
    textTransform: 'none', 
    borderColor: '#2196f3', 
    color: '#2196f3', 
    fontWeight: 'bold',
    float: 'right',
    margin: theme.spacing(5, 2, 0, 0),
  },
  buttonCopyLink: {
    textTransform: 'none', 
    backgroundColor: '#ffaa00', 
    color: 'white', 
    fontWeight: 'bold',
    float: 'left',
    margin: theme.spacing(5, 0, 0, 0),
  },
}));

function FormDialog(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const open = useSelector(state => state.personalData.visibleDialogShareFiles);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };  

  return (
    <>
      <Dialog open={open} onClose={() => dispatch(setVisibleDialogShareFiles(false))} aria-labelledby="form-dialog-create-folder" fullWidth={true} maxWidth={'md'} style={{display: 'content'}}>
        <div className={classes.mainHeader}>
          <div className={classes.title}>Share: <span style={{color: '#2196f3'}}>Folder / File</span></div>
          <CloseIcon onClick={() => dispatch(setVisibleDialogShareFiles(false))} style={{color: 'grey', cursor: 'pointer'}} />
        </div>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Receivers" {...a11yProps(0)} style={{textTransform: 'none'}} />
              <Tab label="Share Config" {...a11yProps(1)} style={{textTransform: 'none'}} />
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0}>
            <Grid container spacing={5}>
              <Grid item xs={6} sm={6}>
                <div className={classes.label}>
                  <div>Email ID / Password <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined" 
                    placeholder="Akhil@dcirrus.com"
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div>
                <div className={classes.radio}>
                  <div className={classes.labelOne}>Password <span style={{color: 'red'}}>*</span></div>
                  <input type="radio" id="no" name="password" value="no" />
                  <label htmlFor="no">No Password</label>
                  <input type="radio" id="mobile" name="password" defaultChecked value="mobile" style={{marginLeft: '9px'}} />
                  <label htmlFor="mobile">Mobile Password</label>
                  <input type="radio" id="email" name="password" value="email" style={{marginLeft: '9px'}} />
                  <label htmlFor="email">Email Password</label>
                </div>
                <div className={classes.label}>
                  <div>Mobile Number <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined" 
                    placeholder="+91"
                    size="small" 
                    style={{width: "20%", marginTop: "5px"}} />
                  <TextField 
                    variant="outlined" 
                    placeholder="78966633333"
                    size="small" 
                    style={{width: "75%", margin: "5px 0 0 5%"}} />
                </div>
                <div className={classes.radio}>
                  <div className={classes.labelOne}>Send Via <span style={{color: 'red'}}>*</span></div>
                  <input type="radio" id="sms" name="sendVia" value="sms" />
                  <label htmlFor="sms">SMS</label>
                  <input type="radio" id="whatsApp" name="sendVia" defaultChecked value="whatsApp" style={{marginLeft: '20px'}} />
                  <label htmlFor="whatsApp">Whats App</label>
                </div>
                <Button variant="outlined" className={classes.buttonTwo}>
                  Add Receiver
                </Button>
                <div style={{marginTop:'70px'}}>Add Receiver for advanced file sharing</div>
              </Grid>

              <Grid item xs={6} sm={6}>
                <div style={{display: 'flex', marginTop:'15px'}}>
                  <Button variant="contained" className={classes.button}>Akhil@dcirrus.com &nbsp;<CloseIcon style={{width: '15px', marginTop:'2px'}} /></Button>
                  <div className={classes.emailTitle}>Rahul@dcirrus.com &nbsp;<CloseIcon style={{width: '15px', marginTop:'2px', color: 'grey'}} /></div>
                </div>
                <div className={classes.emailTitle} style={{margin:'10px 0 0 20px'}}>Rahul@dcirrus.com &nbsp;<CloseIcon style={{width: '15px', marginTop:'2px', color: 'grey'}} /></div>
                <div style={{height: '45px'}}>
                  <Button variant="contained" className={classes.buttonOne}>
                    Next
                  </Button>
                </div>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Grid container spacing={5}>
              <Grid item xs={6} sm={6}>
                <div className={classes.label}>
                  <div>Subject <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined" 
                    placeholder="Akhil@dcirrus.com"
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div>
                <div className={classes.label} style={{marginTop:'20px'}}>
                  <div>Description <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined"
                    multiline
                    rows="5"
                    placeholder="Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and 
                                scrambled it to make a type specimen book. "
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div>
              </Grid>
              <Grid item xs={6} sm={6}>
                <div style={{marginTop: '10px'}}>
                  <input type="checkbox" id="unlimitedSharing" name="unlimitedSharing" defaultChecked value="checked" />
                  <label htmlFor="unlimitedSharing"> Unlimited Sharing</label>
                </div>
                <div className={classes.greyLi}>Expire in (days)</div>
                <div className={classes.greyLi} style={{paddingLeft: '12px'}}>10 Years</div>
                <div style={{marginTop:'50px'}}>
                  <div className={classes.label}>Access Permissions</div>
                  <div style={{marginTop: '8px'}}>
                    <input type="checkbox" id="view" name="view" defaultChecked value="checked" />
                    <label htmlFor="view"> View</label>
                    <input type="checkbox" id="download" name="download" defaultChecked value="checked" style={{marginLeft:'25px'}} />
                    <label htmlFor="download"> Download</label>
                    <input type="checkbox" id="collaborate" name="collaborate" defaultChecked value="checked" style={{marginLeft:'25px'}} />
                    <label htmlFor="collaborate"> Collaborate</label>
                  </div>
                </div>
                <div style={{marginTop:'20px'}}>
                  <div className={classes.label}>Others</div>
                  <div style={{marginTop: '8px'}}>
                    <input type="checkbox" id="addWatermark" name="addWatermark" defaultChecked value="checked" />
                    <label htmlFor="addWatermark"> Add Watermark</label>
                    <input type="checkbox" id="addSignature" name="addSignature" defaultChecked value="checked" style={{marginLeft:'25px'}} />
                    <label htmlFor="addSignature"> Add Signature</label>
                  </div>
                </div>
              </Grid>
            </Grid>
            <div style={{marginTop:'30px'}}>
              <Button variant="contained" className={classes.buttonShare}>
                Share
              </Button>
              <Button variant="outlined" className={classes.buttonCancel}>
                Cancel
              </Button>
              <Button variant="contained" className={classes.buttonCopyLink}>
                Copy Link
              </Button>
            </div>
          </TabPanel>
        </div>        
      </Dialog>
    </>
  );
}

export default FormDialog;
