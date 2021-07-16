import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import ShareIcon from '@material-ui/icons/Share';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'calc(100% - 24px)',
    height: '73px',
    display: 'flex',
    alignItems: 'center',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    fontSize: '30px',
    fontWeight: '500',
    paddingLeft: '30px'
  },
  icon: {
    color: 'grey',
    cursor: 'pointer',
    marginLeft: '20px',
  },
  star: {
    color: '#f5b500',
    cursor: 'pointer',
  },
  list: {
    color: 'grey',
    cursor: 'pointer',
    borderLeft: '1px solid #e0e0e0',
    marginLeft: '20px',
    paddingLeft: '20px',
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
      <StarRoundedIcon className={classes.star} />
      <ShareIcon className={classes.icon} />
      <FilterNoneIcon className={classes.icon} />
      <DeleteForeverIcon className={classes.icon} />
      <MoreVertIcon className={classes.list} />
    </div>
  );
}