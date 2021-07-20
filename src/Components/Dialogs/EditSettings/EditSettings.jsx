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
import { setVisibleDialogEditSettings } from '../../../actions/actions';

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
    fontSize: '15px',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  header: {
    color: '#2196f3',
    fontWeight: 'bold',
  },
  description: {
    display: 'flex',
  },
  button: {
    textTransform: 'none', 
    backgroundColor: '#2196f3', 
    color: 'white', 
    fontWeight: 'bold',
    float: 'right',
    margin: theme.spacing(2, 0, 0, 0),
  },
  radio: {
    marginTop: '10px',
  },
}));

function FormDialog(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const open = useSelector(state => state.personalData.visibleDialogEditSettings);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };  

  return (
    <>
      <Dialog open={open} onClose={() => dispatch(setVisibleDialogEditSettings(false))} aria-labelledby="form-dialog-create-folder" fullWidth={true} maxWidth={'md'} style={{display: 'content'}}>
        <div className={classes.mainHeader}>
          <div className={classes.title}>New / Update User</div>
          <CloseIcon onClick={() => dispatch(setVisibleDialogEditSettings(false))} style={{color: 'grey', cursor: 'pointer'}} />
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
              <Tab label="Company Details" {...a11yProps(0)} style={{textTransform: 'none'}} />
              <Tab label="Theme Settings" {...a11yProps(1)} style={{textTransform: 'none'}} />
              <Tab label="Other Settings" {...a11yProps(2)} style={{textTransform: 'none'}} />
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0}>
            <Grid container spacing={5}>
              <Grid item xs={6} sm={6}>
                <div className={classes.header}>Company Details</div>
                <div className={classes.label}>
                  <div>Company Name <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined" 
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div>
                <div className={classes.label}>
                  <div>Document Storage Region <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined" 
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div> 
              </Grid>
              <Grid item xs={6} sm={6}>
                <div className={classes.header}>Contact Details</div>
                <div className={classes.label}>
                  <div>Contact Name <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined" 
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div>
                <div className={classes.label}>
                  <div>Email <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined" 
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div>
                <div className={classes.label}>
                  <div>Phone <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined" 
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div>
                <div className={classes.label}>
                  <div>Pincode <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined" 
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div>
                <div className={classes.label}>
                  <div>Address <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined" 
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div>
              </Grid>
            </Grid>
            <div style={{height:'45px'}}>
            <Button variant="contained" className={classes.button}>
              Save
            </Button>
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Grid container spacing={2}>
              <Grid item xs={3} sm={3} />
              <Grid item xs={6} sm={6}>
                <div className={classes.label}>Watermark</div>
                <div className={classes.radio}>
                  <input type="radio" id="enable" name="watermark" value="HTML" />
                  <label htmlFor="enable">Enable</label>
                  <input type="radio" id="disable" name="watermark" defaultChecked value="CSS" style={{marginLeft: '48px'}} />
                  <label htmlFor="disable">Disable</label>
                </div>
                <div style={{marginTop: '15px'}}>
                  <input type="checkbox" id="factor" name="factor" defaultChecked value="checked" />
                  <label htmlFor="factor"> Enable 2 factor authentication</label>
                </div>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Grid container spacing={2}>
              <Grid item xs={3} sm={3} />
              <Grid item xs={6} sm={6}>
                <div>
                  <input type="checkbox" id="show" name="show" defaultChecked value="checked" />
                  <label htmlFor="show"> Show Project Index Number</label>
                </div>
                <div style={{marginTop: '10px'}}>
                  <input type="checkbox" id="factor" name="factor" defaultChecked value="checked" />
                  <label htmlFor="factor"> Enable 2 factor authentication</label>
                </div>
                <div className={classes.labelOne}>
                  <div>Time Zone <span style={{color: 'red'}}>*</span></div>
                  <TextField 
                    variant="outlined" 
                    size="small" 
                    style={{width: "100%", marginTop: "5px"}} />
                </div>
                <div className={classes.radio}>
                  <div className={classes.label}>Upload Notification <span style={{color: 'red'}}>*</span></div>
                  <input type="radio" id="hour" name="upload_notification" value="hour" />
                  <label htmlFor="hour">Every 2 hours</label>
                  <input type="radio" id="daily" name="upload_notification" defaultChecked value="daily" style={{marginLeft: '48px'}} />
                  <label htmlFor="daily">Daily</label>
                  <input type="radio" id="never" name="upload_notification" value="never" style={{marginLeft: '48px'}} />
                  <label htmlFor="never">Never</label>
                </div>
                <div className={classes.labelOne}>
                  <div>Start Date <span style={{color: 'red'}}>*</span></div>
                  <TextField
                    id="startDate"
                    type="date"
                    variant="outlined"
                    size="small"
                    defaultValue="2020-12-25"
                    style={{width: "100%", marginTop: "5px"}}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div className={classes.label}>
                  <div>End Date <span style={{color: 'red'}}>*</span></div>
                  <TextField
                    id="startDate"
                    type="date"
                    variant="outlined"
                    size="small"
                    defaultValue="2020-12-25"
                    style={{width: "100%", marginTop: "5px"}}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
              </Grid>
            </Grid>
            <Button variant="contained" className={classes.button}>
              Save
            </Button>
          </TabPanel>
        </div>        
      </Dialog>
    </>
  );
}

export default FormDialog;
