import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddAutoIPDeviceAction from '../ContextMenu/ContextMenuActions/AddAutoIPDeviceAction.jsx';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 'calc(100% - 24px)',
    height: '73px',
    display: 'flex',
    alignItems: 'center',
    gap:'10px',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    fontSize: '30px',
    fontWeight: '500',
    paddingLeft: '30px'
  },
  list: {
    color: 'grey',
    cursor: 'pointer',
  },
  btn_filter:{
      border:'1px solid',
      borderColor: '#757683',
      borderRadius:30,
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
        color:'white'
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0069d9',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        backgroundColor: '#0069d9',
        color:'white'
      },
  },
  filter_text:{
      color:'#757683'
  }
}));

export default function Header(props) {
  const setId=props.setId;
  const Id=props.Id;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setId(!newValue);
  };
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        {props.title}
      </div>
      <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}>
            <Tab label="All Devices"/>
            <Tab label="Auto IP Devices"/>
      </Tabs>
      <div className={classes.grow} />
      {Id?(
      <><Typography variant="h6" gutterBottom className={classes.filter_text}>
       Filter:
      </Typography>
      <Button className={classes.btn_filter}>Approved Devices</Button>
      <Button className={classes.btn_filter}>Pending Devices</Button>
      <Button className={classes.btn_filter}>Blocked Devices</Button></>):
      (<AddAutoIPDeviceAction/>)
      }
    </div>
  );
}