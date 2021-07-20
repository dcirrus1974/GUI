import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

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
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  body: {
    marginLeft: '15%',
  },
  header: {
    color: '#2196f3',
    fontWeight: 'bold',
    marginTop: '30px',
  },
  description: {
    display: 'flex',
  },
  top: {
    marginTop: '10px',
  },
  topchild: {
    marginTop: '20px',
  },
  topspecial: {
    marginTop: '38px',
  },
  circle: {
    backgroundColor: '#e23f3f',
    padding: '1px 10px',
    borderRadius: '50%',
    marginRight: '10px',
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
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
      <TabPanel value={value} index={0} className={classes.body}>
        <div style={{fontSize: '15px'}}>
          <div className={classes.header}>Company Details</div>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3} style={{color: 'grey'}}>
              <div className={classes.top}>Project Name</div>
              <div className={classes.top}>Document Storage Region</div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <div className={classes.top}>DCirrus</div>
              <div className={classes.top}>Us East</div>
            </Grid>
          </Grid>
          <div className={classes.header}>Contact Details</div>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3} style={{color: 'grey'}}>
              <div className={classes.top}>First Name</div>
              <div className={classes.top}>Email</div>
              <div className={classes.top}>Address</div>
              <div className={classes.top}>State</div>
              <div className={classes.top}>Pincode</div>
              <div className={classes.top}>Country</div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <div className={classes.top}>DCirrus</div>
              <div className={classes.top}>Akhi@dcirrus.co</div>
              <div className={classes.top}>place, street, city</div>
              <div className={classes.top}>State</div>
              <div className={classes.top}>78985230</div>
              <div className={classes.top}>US</div>
            </Grid>
          </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.body}>
        <Grid container spacing={2} style={{marginTop: '15px'}}>
          <Grid item xs={6} sm={3} style={{color: 'grey'}}>
            <div className={classes.topchild}>Watermark</div>
            <div className={classes.topchild}>Watermark content</div>
            <div className={classes.topchild}>Watermark Color</div>
            <div className={classes.topchild}>Watermark Position</div>
            <div className={classes.topchild}>Watermark Across</div>
          </Grid>
          <Grid item xs={6} sm={6}>
            <div className={classes.topchild}>Enabled for View and Download</div>
            <div className={classes.topchild}>USERNAME 81854</div>
            <div className={classes.topchild}><span className={classes.circle}></span>Red</div>
            <div className={classes.topchild}>Left, Top</div>
            <div className={classes.topchild}>Single Line</div>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.body}>
        <Grid container spacing={2} style={{marginTop: '15px'}}>
          <Grid item xs={6} sm={3} style={{color: 'grey'}}>
            <div className={classes.topchild}>Title</div>
            <div className={classes.topchild}>Upload Notification</div>
            <div className={classes.topchild}>Time Zone</div>
            <div className={classes.topspecial}>Project Index Number</div>
            <div className={classes.topspecial}>Start Date</div>
            <div className={classes.topchild}>End Date</div>
          </Grid>
          <Grid item xs={6} sm={6}>
            <div className={classes.topchild}>NDA</div>
            <div className={classes.topchild}>Daily (at 8am)</div>
            <div className={classes.topchild}>Washington, DC,USA (GMT-4)</div>
            <div className={classes.topspecial}>Showing</div>
            <div className={classes.topspecial}>12/30/2020</div>
            <div className={classes.topchild}>12/30/2020</div>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}
