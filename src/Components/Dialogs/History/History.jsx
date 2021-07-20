import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import { useSelector, useDispatch } from 'react-redux';
import { setVisibleDialogHistory } from '../../../actions/actions';
import HistoryTable from './HistoryTable';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2, 3, 0, 3),
    flexGrow: 1,
    minHeight: '481px',
    backgroundColor: theme.palette.background.paper,
  },
   mainHeader: {
    padding: theme.spacing(4, 3, 0, 3),
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
}));

function FormDialog(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const open = useSelector(state => state.personalData.visibleDialogHistory);

    return (
      <>
        <Dialog open={open} onClose={() => dispatch(setVisibleDialogHistory(false))} aria-labelledby="form-dialog-create-folder" fullWidth={true} maxWidth={'md'} style={{display: 'content'}}>
          <div className={classes.mainHeader}>
            <div className={classes.title}>Version History: <span style={{color:'#2196f3'}}>File 001</span></div>
            <CloseIcon onClick={() => dispatch(setVisibleDialogHistory(false))} style={{color: 'grey', cursor: 'pointer'}} />
          </div>
          <div className={classes.root}> 
            <HistoryTable/>
          </div>
        </Dialog>
      </>
    );
}

export default FormDialog;
