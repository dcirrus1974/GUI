import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {AppBar,
        Tabs,
        Tab,
        Typography,
        Box,
        Button,
      } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import FileList from '../../FileList/FileList';
import { useSelector, useDispatch } from 'react-redux';
import { setVisibleDialogCopy } from '../../../actions/actions';

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
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: 'white',
    height: '50px',
    marginLeft: '-48px',
    width: '960px',
    position: 'fixed',
    bottom: '32px',
    paddingTop: theme.spacing(1),
  },
  buttonOne: {
    textTransform: 'none', 
    backgroundColor: '#2196f3', 
    color: 'white', 
    fontWeight: 'bold',
    float: 'right',
    margin: theme.spacing(0, 3, 0, 0),
    borderRadius: '3px',
  },
  buttonTwo: {
    textTransform: 'none', 
    color: 'grey', 
    fontWeight: 'bold',
    float: 'right',
    margin: theme.spacing(0, 2, 0, 0),
  },
  footerLeft: {
    float: 'left',
    marginLeft: theme.spacing(3),
  }
}));

function FormDialog(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const open = useSelector(state => state.personalData.visibleDialogCopy);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };  

  return (
    <>
      <Dialog open={open} onClose={() => dispatch(setVisibleDialogCopy(false))} aria-labelledby="form-dialog-create-folder" fullWidth={true} maxWidth={'md'} style={{display: 'content'}}>
        <div className={classes.mainHeader}>
          <div className={classes.title}>Copy: <span style={{color: '#2196f3'}}>Folder / File</span></div>
          <CloseIcon onClick={() => dispatch(setVisibleDialogCopy(false))} style={{color: 'grey', cursor: 'pointer'}} />
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
              <Tab label="Personal Files" {...a11yProps(0)} style={{textTransform: 'none'}} />
              <Tab label="Data Room" {...a11yProps(1)} style={{textTransform: 'none'}} />
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0} style={{positon: 'relative'}}>
            <FileList isDialog="true"/>
            <div className={classes.footer}>
              <div className={classes.footerLeft}>
                <div style={{color: 'grey', fontSize: '11px'}}>Selected Path:</div>
                <div>Personal Folder / My Folder 01 / Folder 5 / <span style={{color: '#2196f3'}}>Folder3</span></div>
              </div>
              <Button variant="contained" className={classes.buttonOne}>
                Copy Here
              </Button>
              <Button variant="outlined" className={classes.buttonTwo}>
                Back
              </Button>
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <FileList isDialog="true"/>
            <div className={classes.footer}>
              <div className={classes.footerLeft}>
                <div style={{color: 'grey', fontSize: '11px'}}>Selected Path:</div>
                <div>Personal Folder / My Folder 01 / Folder 5 / <span style={{color: '#2196f3'}}>Folder3</span></div>
              </div>
              <Button variant="contained" className={classes.buttonOne}>
                Copy Here
              </Button>
              <Button variant="outlined" className={classes.buttonTwo}>
                Back
              </Button>
            </div>
          </TabPanel>
        </div>        
      </Dialog>
    </>
  );
}

export default FormDialog;
