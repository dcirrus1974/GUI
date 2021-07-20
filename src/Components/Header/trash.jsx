import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BsFillGridFill } from "react-icons/bs";
import EmptyTrashAction from '../ContextMenu/ContextMenuActions/EmptyTrashAction.jsx';
import RestoreFilesAction from '../ContextMenu/ContextMenuActions/RestoreFilesAction.jsx';
import DeleteSelectedAction from '../ContextMenu/ContextMenuActions/DeleteSelectedAction.jsx';
import { useSelector, useDispatch } from 'react-redux';
import {setIsTable} from '../../actions/actions';
import IconButton from '@material-ui/core/IconButton';
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
    paddingLeft: '30px',
    color: '#ea4335',
  },
  bsfill: {
    color: 'grey',
    cursor: 'pointer',
    width: '20px',
    height: '20px',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const isSelected = useSelector(state => state.personalData.isSelected);
  const dispatch =useDispatch();
  const isTable = useSelector(state => state.personalData.isTable);

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        {props.title}
      </div>
      <div className={classes.grow} />
      {
        isSelected?
          <>
            <RestoreFilesAction />
            <DeleteSelectedAction />
          </>:
          <EmptyTrashAction />
      }
      <IconButton onClick={() => dispatch(setIsTable(!isTable))}>              
          {isTable?
          <ViewAgendaRoundedIcon className={classes.list} />:
          <BsFillGridFill className={classes.bsfill} />
          }
      </IconButton>
    </div>
  );
}