import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import BottomNavigation from '@material-ui/core/BottomNavigation';



const useStyles = makeStyles({
  list: {
    width: 400,
  },
  fullList: {
    width: 'auto',
  },
  title:{
    display:'flex',
    flexDirection:'column',
  },
  title_row:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10,
  },
  pad_left:{
    paddingLeft:20,
  },
  bottom:{
    position:'related',
  }
});

export default function NotificationMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className={classes.title_row}>
          <div className={classes.title}><Typography style={{color:'blue'}} variant="h6">Notifications</Typography>
          <Typography variant="caption">Showing 99 notifications</Typography></div>
          <IconButton aria-label="close"  onClick={toggleDrawer(anchor, false)}>
            <CloseIcon />
          </IconButton>
        </ListItem>
        <Divider />
        {['Akhil@dcirrus.com', 'Akhil@dcirrus.com', 'Akhil@dcirrus.com', 'Akhil@dcirrus.com','Akhil@dcirrus.com','Akhil@dcirrus.com','Akhil@dcirrus.com','Akhil@dcirrus.com'].map((text, index) => (
        <div key={index}>        
          <ListItem button key={text} className={classes.title_row}>            
            <div className={classes.title}>
              <Typography variant="h6">{text}</Typography>
              <Typography variant="caption">12/20/2020</Typography>
            </div>
            <IconButton aria-label="close"  onClick={toggleDrawer(anchor, false)}>
              <CloseIcon />
            </IconButton>
          </ListItem>
          <Divider />
          <Typography variant="caption" className={classes.pad_left}>Request for File Deposite</Typography>
        </div>
        ))}         
      </List>
      <BottomNavigation className={classes.bottom}>
            <Button color="secondary">Clear All</Button>       
      </BottomNavigation>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>          
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>          
          </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
