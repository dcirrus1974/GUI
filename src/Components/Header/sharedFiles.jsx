import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


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
            style={{marginLeft:'30px'}}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}>
            <Tab label="Shared Files & Folders"/>
            <Tab label="File Deposit Requests"/>
      </Tabs>
      <div className={classes.grow} />
    </div>
  );
}