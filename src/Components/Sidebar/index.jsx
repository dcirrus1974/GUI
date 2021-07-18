import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer,
        List,
        ListItem,
        ListItemText,
        ListItemIcon,
      } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import FolderIcon from '@material-ui/icons/Folder';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ShareIcon from '@material-ui/icons/Share';
import StarIcon from '@material-ui/icons/Star';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import Collapse from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { setActionOpenClose } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

function ListItemLink(props) {
  return <ListItem button component={NavLink} {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '240px',
    minHeight: 'calc(100vh - 74px)',
    borderRight: '1px solid #e2e2e2',
  },
  drawer: {
    width: '240px',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '240px',
    marginTop: '80px',
  },
  nested: {
    paddingLeft: theme.spacing(9),
  },
  active: {
    '& div': {
      color: "#2196f3",
    }
  },
  trash:{
    '& div': {
      color: "red",
    }
  },
}));

const renderSwitch=(index)=>{
    switch (index) {
      case 0:
        return <FolderIcon />;
      case 1:
        return <SupervisorAccountIcon />;
      case 2:
        return <AccessTimeIcon />;
      case 3:
        return <ShareIcon />;
      case 4:
        return <StarIcon />;
      case 5:
        return <RestoreFromTrashIcon />;
      case 6:
        return <PersonIcon />;
      case 7:
        return <SettingsIcon />;
      default:
       return <FolderIcon />;                           
    }
  };

const renderHref=(index)=>{
  switch (index) {
      case 0:
          return "/personal";
      case 1:
          return "/room";
      case 2:
          return "/recent";
      case 3:
          return "/shared";
      case 4:
          return "/favourite";
      case 5:
          return "/trash";
      case 6:
          return "/admin";
      case 7:
          return "/settings";
      default:
          return "/personal";
  }
};

export default function Sidebar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector(state => state.personalData.actionOpenClose);
  const isOpen = true;

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          {['Personal Files', 'Data Room', 'Recent Files', 'Shared Files', 'Favourite', 'Trash', 'Admin', 'Settings'].map((text, index) => (
              text==='Admin'?
              <div key={index}>
                <ListItem button onClick={() => dispatch(setActionOpenClose(!open))}>
                  <ListItemIcon>
                      {renderSwitch(index)}
                  </ListItemIcon> 
                  <ListItemText primary={text} />
                  {open ? <ExpandMore />:<ChevronRightIcon />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemLink to="/admin/users" className={classes.nested} activeClassName={classes.active}>                    
                      <ListItemText primary="Users" />
                    </ListItemLink>
                    <ListItemLink to="/admin/devices" className={classes.nested} activeClassName={classes.active}>
                      <ListItemText primary="Devices" />
                    </ListItemLink>
                    <ListItemLink to="/admin/access" className={classes.nested} activeClassName={classes.active}>
                      <ListItemText primary="Access Permissions" />
                    </ListItemLink>
                  </List>
                </Collapse>
              </div>
              :<ListItemLink key={index} to={renderHref(index)} activeClassName={text==="Trash"?classes.trash:classes.active} onClick={() => dispatch(setActionOpenClose(false))}>
                <ListItemIcon>
                    {renderSwitch(index)}
                </ListItemIcon> 
                <ListItemText primary={text} />
              </ListItemLink>
          ))}
        </List>
      </Drawer>
    </div>
  );
}