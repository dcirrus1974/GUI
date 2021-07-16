import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SettingsAction from '../ContextMenu/ContextMenuActions/SettingsAction.jsx';

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
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        {props.title}
      </div>
      <div className={classes.grow} />
      <SettingsAction />
    </div>
  );
}