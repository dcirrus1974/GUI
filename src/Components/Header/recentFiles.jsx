import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ViewAgendaRoundedIcon from '@material-ui/icons/ViewAgendaRounded';
import { BsFillGridFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import {setIsTable} from '../../actions/actions';
import IconButton from '@material-ui/core/IconButton';

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
  icon: {
    color: 'grey',
    cursor: 'pointer',
    marginLeft: '20px',
  },
  star: {
    color: '#f5b500',
    cursor: 'pointer',
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
  bsfill: {
    color: 'grey',
    cursor: 'pointer',
    width: '20px',
    height: '20px',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const dispatch =useDispatch();
  const isTable = useSelector(state => state.personalData.isTable);


  return (
    <div>
      <div className={classes.root}>
        <div className={classes.title}>
          {props.title}
        </div>
        <div className={classes.grow} />
        <IconButton onClick={() => dispatch(setIsTable(!isTable))}>              
          {isTable?
          <ViewAgendaRoundedIcon className={classes.list} />:
          <BsFillGridFill className={classes.bsfill} />
          }
        </IconButton>
      </div>
    </div>
  );
}