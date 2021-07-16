import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button,
        Grid,
        TextField,
        Dialog,
        Slider, 
      } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { setVisibleDialogSearchOption } from '../../../actions/actions';

const useStyles = makeStyles((theme: Theme) => ({
  dialog: {
    display: 'content',
    position: 'absolute',
    left: '15%',
    top: '25px'
  },
  root: {
    padding: theme.spacing(2, 3, 0, 3),
    flexGrow: 1,
    minHeight: '480px',
    backgroundColor: theme.palette.background.paper,
  },
  buttonOne: {
    textTransform: 'none', 
    backgroundColor: '#2196f3', 
    color: 'white', 
    fontWeight: 'bold',
    fontSize: '12px',
    height: '25px',
    borderRadius: '25px',
    margin: theme.spacing(0, 2, 0, 0),
  },
  buttonTwo: {
    textTransform: 'none', 
    border: '1px solid #2196f3', 
    color: '#2196f3', 
    backgroundColor: 'white',
    fontWeight: 'bold',
    fontSize: '12px',
    height: '25px',
    borderRadius: '25px',
    margin: theme.spacing(0, 2, 0, 0),
  },
  buttonSend: {
    textTransform: 'none', 
    backgroundColor: '#2196f3', 
    color: 'white', 
    fontWeight: 'bold',
    float: 'right',
    margin: theme.spacing(5, 0, 3, 0),
  },
  buttonCancel: {
    textTransform: 'none', 
    borderColor: '#2196f3', 
    color: '#2196f3', 
    fontWeight: 'bold',
    float: 'right',
    margin: theme.spacing(5, 2, 0, 0),
  },
}));

function FormDialog(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const open = useSelector(state => state.personalData.visibleDialogSearchOption);
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event: any, newValue: number | number[]) => {
      setValue(newValue);
    };

    return (
      <>
        <Dialog open={open} onClose={() => dispatch(setVisibleDialogSearchOption(false))} aria-labelledby="form-dialog-create-folder" fullWidth={true} maxWidth={'sm'} classes={{paper: classes.dialog}}>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={4} sm={4}>
                <div style={{color: 'grey', paddingLeft: '20%'}}>
                  <div style={{marginTop: '20px'}}>Search Type</div>
                  <div style={{marginTop: '45px'}}>Date Modified</div>
                  <div style={{marginTop: '50px'}}>Size</div>
                  <div style={{marginTop: '72px'}}>Sign</div>
                  <div style={{marginTop: '30px'}}>Other Options</div>
                </div>
              </Grid>
              <Grid item xs={8} sm={8}>
                <div style={{marginTop: '20px'}}>
                  <Button variant="contained" className={classes.buttonOne}>File Name</Button>
                  <Button variant="contained" className={classes.buttonTwo}>Tag</Button>
                  <Button variant="contained" className={classes.buttonTwo}>File Type</Button>
                </div>
                <TextField
                  id="startDate"
                  type="date"
                  variant="outlined"
                  size="small"
                  defaultValue="2020-12-25"
                  style={{width: "70%", marginTop: "33px"}}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
                  <div style={{color: 'grey'}}>min &nbsp;</div>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="100 Mb"
                    style={{width: '81px'}}
                  />
                  <div style={{color: 'grey'}}>&nbsp; - max &nbsp;</div>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="1 Gb"
                    style={{width: '81px'}}
                  />
                </div>
                <Slider
                  value={value}
                  onChange={handleChange}
                  // valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  style={{width: '70%', color: '#2196f3', marginTop: '10px'}}
                />
                <div style={{marginTop: '20px'}}>
                  <input type="radio" id="mark" name="sign" value="mark" />
                  <label htmlFor="mark">Mark For Signing</label>
                  <input type="radio" id="marked" name="sign" defaultChecked value="marked" style={{marginLeft: '24px'}} />
                  <label htmlFor="marked">Marked For Signing</label>
                </div>
                <div>
                  <div style={{marginTop: '30px'}}>
                    <input type="checkbox" id="favourite" name="favourite" defaultChecked value="checked" />
                    <label htmlFor="favourite" style={{marginRight: '50px'}}> Favourite</label>
                    <input type="checkbox" id="locked" name="locked" defaultChecked value="checked" />
                    <label htmlFor="locked"> Include Locked</label>
                  </div>
                  <div style={{marginTop: '10px'}}>
                    <input type="checkbox" id="version" name="version" defaultChecked value="checked" />
                    <label htmlFor="version"> Any Version</label>
                  </div>
                </div>
              </Grid>
            </Grid>
            <div>
              <Button variant="contained" className={classes.buttonSend}>
                Apply
              </Button>
              <Button variant="outlined" className={classes.buttonCancel} onClick={() => dispatch(setVisibleDialogSearchOption(false))}>
                Cancel
              </Button>
            </div>
          </div>
        </Dialog>
      </>
    );
}

export default FormDialog;
