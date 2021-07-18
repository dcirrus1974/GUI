import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import { useSelector, useDispatch } from 'react-redux';
import { setVisibleDialogExportLogs } from '../../../actions/actions';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2, 3, 0, 3),
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
   mainHeader: {
    padding: theme.spacing(4, 3, 2, 3),
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #eeeeee',
  },
  title: {
    fontSize: '22px',
    color: '#2196f3',
    fontWeight: 'bold',
  },
  label: {
    fontFamily: "Poppins",
    fontWeight: '800',
    marginTop: '15px',
    fontSize: '15px',
  },
  buttonOne: {
    textTransform: 'none', 
    backgroundColor: '#2196f3', 
    color: 'white', 
    fontWeight: 'bold',
    float: 'right',
    margin: theme.spacing(5, 0, 3, 0),
  },
  buttonTwo: {
    textTransform: 'none', 
    color: 'grey', 
    fontWeight: 'bold',
    float: 'right',
    margin: theme.spacing(5, 2, 0, 0),
  },
}));

function FormDialog(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const open = useSelector(state => state.personalData.visibleDialogExportLogs);

    return (
      <>
        <Dialog open={open} onClose={() => dispatch(setVisibleDialogExportLogs(false))} aria-labelledby="form-dialog-create-folder" fullWidth={true} maxWidth={'xs'} style={{display: 'content'}}>
          <div className={classes.mainHeader}>
            <div className={classes.title}>Export Logs</div>
            <CloseIcon onClick={() => dispatch(setVisibleDialogExportLogs(false))} style={{color: 'grey', cursor: 'pointer'}} />
          </div>
          <div className={classes.root}> 
            <Button variant="contained" className={classes.buttonOne} style={{margin:'0'}}>
              Add Chart
            </Button>
            <div className={classes.label} style={{marginTop:'45px'}}>
              <div>Logs <span style={{color: 'red'}}>*</span></div>
              <TextField 
                variant="outlined"
                placeholder="Upload"
                size="small" 
                style={{width: "100%", marginTop: "5px"}} />
            </div>
            <div className={classes.label}>
              <div>Start Time <span style={{color: 'red'}}>*</span></div>
              <TextField 
                variant="outlined"
                type="date"
                size="small" 
                defaultValue="2020-12-25"
                style={{width: "69%", marginTop: "5px"}} />
              <TextField 
                variant="outlined"
                type="time"
                defaultValue="00:00"
                size="small" 
                style={{width: "27%", margin: "5px 0 0 4%"}} />
            </div>
            <div className={classes.label}>
              <div>End Time <span style={{color: 'red'}}>*</span></div>
              <TextField 
                variant="outlined"
                type="date"
                size="small" 
                defaultValue="2020-12-25"
                style={{width: "69%", marginTop: "5px"}} />
              <TextField 
                variant="outlined"
                type="time"
                defaultValue="00:00"
                size="small" 
                style={{width: "27%", margin: "5px 0 0 4%"}} />
            </div>
            <div>
              <Button variant="contained" className={classes.buttonOne}>
                Export Logs
              </Button>
              <Button variant="outlined" className={classes.buttonTwo}>
                Cancel
              </Button>
            </div>
          </div>
        </Dialog>
      </>
    );
}

export default FormDialog;
