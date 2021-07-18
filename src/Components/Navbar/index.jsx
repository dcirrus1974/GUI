import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import {InputBase,
        IconButton,
        Badge,
      } from '@material-ui/core';
import { IoOptionsOutline } from "react-icons/io5";
import { makeStyles, alpha } from '@material-ui/core/styles';
import NotificationMenu from './NotificationMenu';
import img_logo from '../../assets/images/dcirruslogo_medium.png';
import { setVisibleDialogSearchOption } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import UserProfile from './UserProfile';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'calc(100%)',
    display: 'flex',
    height: '73px',
    borderBottom: '1px solid #e2e2e2',
    justifyContent:'space-between',
    alignItems:'center',
    position:'fixed',
    zIndex:10,
    backgroundColor:'white',
  },
  growOne: {
    flexGrow:1,
  },
  growTwo: {
    flexGrow: 2,
  },
  logo: {
    padding: '12px 0 0 12px',
  },
  profile: {
    display: 'flex',
    marginRight: theme.spacing(3),
    alignItems:'center',
  },
  search: {
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(10),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const dispatch =useDispatch();

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img src={img_logo} style={{height:'45px'}} alt="oh_image" />
      </div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <div className={classes.growOne} />
      <IconButton aria-label="io5" style={{color: "grey"}} onClick={() => dispatch(setVisibleDialogSearchOption(true))}>              
        <IoOptionsOutline />                  
      </IconButton>
      <div className={classes.growTwo} />
      <div className={classes.profile}>                               
        <NotificationMenu/>
        <IconButton aria-label="show 4 new mails" style={{color: "grey"}}>
          <Badge badgeContent={4} color="secondary">
            <AppsIcon />
          </Badge>
        </IconButton>
        <UserProfile/>
      </div>
    </div>
  );
}
