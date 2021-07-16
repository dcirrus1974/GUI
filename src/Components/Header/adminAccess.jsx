import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'calc(100% - 24px)',
    height: '73px',
    display: 'flex',
    alignItems: 'center',
    gap:10
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
  btn_1:{
      color:"#0274d9",
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
  btn_2:{
      border:'1px solid',
      borderColor:"#0274d9",
      color:"#0274d9",
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
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        {props.title}
      </div>
      <div className={classes.grow} />
      <Button className={classes.btn_1}>Reset All</Button>
      <Button className={classes.btn_2}>Apply to All Subfolder</Button>
      <Button className={classes.btn_2}>Apply to Selected folder</Button>
    </div>
  );
}