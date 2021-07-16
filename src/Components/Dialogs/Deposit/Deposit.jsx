import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import { useSelector, useDispatch } from 'react-redux';
import { setVisibleDialogDepositRequest } from '../../../actions/actions';

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
  label: {
    fontFamily: "Poppins",
    fontWeight: '800',
    marginTop: '35px',
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
    borderColor: '#2196f3', 
    color: '#2196f3', 
    fontWeight: 'bold',
    float: 'right',
    margin: theme.spacing(5, 2, 0, 0),
  },
  buttonThree: {
    textTransform: 'none', 
    backgroundColor: '#ffaa00', 
    color: 'white', 
    fontWeight: 'bold',
    float: 'left',
    margin: theme.spacing(5, 0, 0, 0),
  },
}));

function FormDialog(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const open = useSelector(state => state.personalData.visibleDialogDepositRequest);

    return (
      <>
        <Dialog open={open} onClose={() => dispatch(setVisibleDialogDepositRequest(false))} aria-labelledby="form-dialog-create-folder" fullWidth={true} maxWidth={'sm'} style={{display: 'content'}}>
          <div className={classes.mainHeader}>
            <div className={classes.title}>File Deposit Request: <span style={{color:'#2196f3'}}>Folder 01</span></div>
            <CloseIcon onClick={() => dispatch(setVisibleDialogDepositRequest(false))} style={{color: 'grey', cursor: 'pointer'}} />
          </div>
          <div className={classes.root}> 
            <div className={classes.label}>
              <div>Email ID /Password <span style={{color: 'red'}}>*</span></div>
              <TextField 
                variant="outlined"
                placeholder="Akhil@dcirrus.com"
                size="small" 
                style={{width: "100%", marginTop: "5px"}} />
            </div>
            <div className={classes.label}>
              <div>Subject <span style={{color: 'red'}}>*</span></div>
              <TextField 
                variant="outlined"
                placeholder="Project Share"
                size="small" 
                style={{width: "100%", marginTop: "5px"}} />
            </div>
            <div className={classes.label}>
              <div>Description <span style={{color: 'red'}}>*</span></div>
              <TextField 
                variant="outlined"
                multiline
                rows="5"
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially unchanged."
                size="small" 
                style={{width: "100%", marginTop: "5px"}} />
            </div>
            <div>
              <Button variant="contained" className={classes.buttonOne}>
                Send Request
              </Button>
              <Button variant="outlined" className={classes.buttonTwo}>
                Cancel
              </Button>
              <Button variant="contained" className={classes.buttonThree}>
                Copy Link
              </Button>
            </div>
          </div>
        </Dialog>
      </>
    );
}

export default FormDialog;
