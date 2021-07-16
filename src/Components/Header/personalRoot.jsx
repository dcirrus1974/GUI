import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreateFolderAction from '../ContextMenu/ContextMenuActions/CreateFolderAction.jsx';
import UploadFileAction from '../ContextMenu/ContextMenuActions/UploadFileAction.jsx';
import ViewAgendaRoundedIcon from '@material-ui/icons/ViewAgendaRounded';

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
  list: {
    color: 'grey',
    cursor: 'pointer',
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
      <CreateFolderAction />
      <UploadFileAction />
      <ViewAgendaRoundedIcon className={classes.list} />
    </div>
  );
}