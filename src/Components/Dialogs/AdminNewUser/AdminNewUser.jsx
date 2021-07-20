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
import { setVisibleDialogCreateNewUser } from '../../../actions/actions';

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
    minHeight: '481px',
    backgroundColor: theme.palette.background.paper,
  },
  mainHeader: {
    padding: theme.spacing(4, 3, 0, 3),
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
    marginTop: '10px',
    marginBottom: '10px',
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
    margin: theme.spacing(2, 0, 0, 0),
  },
  buttonTwo: {
    textTransform: 'none', 
    borderColor: '#2196f3', 
    color: '#2196f3', 
    fontWeight: 'bold',
    float: 'right',
    margin: theme.spacing(2, 2, 0, 0),
  },
  radio: {
    marginTop: '10px',
  },
}));

function FormDialog(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const open = useSelector(state => state.personalData.visibleDialogCreateNewUser);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };  

  return (
    <>
      <Dialog open={open} onClose={() => dispatch(setVisibleDialogCreateNewUser(false))} aria-labelledby="form-dialog-create-folder" fullWidth={true} maxWidth={'md'} style={{display: 'content'}}>
        <div className={classes.mainHeader}>
          <div className={classes.title}>New / Update User</div>
          <CloseIcon onClick={() => dispatch(setVisibleDialogCreateNewUser(false))} style={{color: 'grey', cursor: 'pointer'}} />
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
              <Tab label="General Details" {...a11yProps(0)} style={{textTransform: 'none'}} />
              <Tab label="Advanced Options" {...a11yProps(1)} style={{textTransform: 'none'}} />
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0}>
            <Grid container spacing={5}>
              <Grid item xs={6} sm={6}>
                <div className={classes.label}>
                  <div>First Name <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined" 
                    placeholder="Enter First Name"
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div>
                <div className={classes.label}>
                  <div>Middle Name <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined"
                    placeholder="Middle First Name"
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div>
                <div className={classes.label}>
                  <div>Last Name <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined"
                    placeholder="Enter Last Name" 
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div>
                <div className={classes.label}>
                  <div>Email ID <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined" 
                    placeholder="Akhil@dcirrus.com"
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div>
                <div className={classes.label}>
                  <div>Phone Number <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined" 
                    placeholder="Akhil@dcirrus.com"
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div>
                <div className={classes.label}>
                  <div>Comamany Name <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined" 
                    placeholder="Comamany Name"
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div>
              </Grid>

              <Grid item xs={6} sm={6}>
                <div className={classes.radio}>
                  <div className={classes.labelOne}>User Role</div>
                  <input type="radio" id="admin" name="user_role" defaultChecked value="admin" />
                  <label htmlFor="admin">Admin</label>
                  <input type="radio" id="User" name="user_role" value="User" style={{marginLeft: '48px'}} />
                  <label htmlFor="User">Regular User</label>
                </div>
                <div style={{marginTop: '30px'}}>
                  <div className={classes.labelOne}>Others</div>
                  <input type="checkbox" id="autoLogin" name="autoLogin" defaultChecked value="checked" />
                  <label htmlFor="autoLogin"> Allow Auto Login</label>
                  <div style={{marginTop: '10px'}}>
                    <input type="checkbox" id="factor" name="factor" defaultChecked value="checked" />
                    <label htmlFor="factor"> Enable 2 factor authentication</label>
                  </div>
                </div>
              </Grid>
            </Grid>
            <div style={{height: '45px'}}>
              <Button variant="contained" className={classes.buttonOne}>
                Next
              </Button>
              <Button variant="outlined" className={classes.buttonTwo}>
                Create User
              </Button>
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <div className={classes.label}>Permitted Apps</div>
                <div style={{marginTop: '10px'}}>
                  <input type="checkbox" id="drive" name="drive" defaultChecked value="checked" />
                  <label htmlFor="drive"> DCirrus Drive</label>
                </div>
                <div style={{marginTop: '10px'}}>
                  <input type="checkbox" id="admin" name="admin" defaultChecked value="checked" />
                  <label htmlFor="admin"> Admin</label>
                </div>
              </Grid>
              <Grid item xs={6} sm={6}>
                <div className={classes.label}>Device Access</div>
                <div style={{marginTop: '10px'}}>
                  <input type="checkbox" id="usb" name="usb" defaultChecked value="checked" />
                  <label htmlFor="usb"> USB</label>
                </div>
                <div style={{marginTop: '10px'}}>
                  <input type="checkbox" id="dvd" name="dvd" defaultChecked value="checked" />
                  <label htmlFor="dvd"> DVD</label>
                </div>
              </Grid>
            </Grid>
          </TabPanel>
        </div>        
      </Dialog>
    </>
  );
}

export default FormDialog;
