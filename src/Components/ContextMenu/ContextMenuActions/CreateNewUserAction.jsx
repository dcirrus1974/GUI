import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import { setVisibleDialogCreateNewUser } from '../../../actions/actions';

export default function CreateNewUserAction() {
  const dispatch = useDispatch();

  return (
    <Button 
      variant="contained" 
      size="large" 
      onClick={() => dispatch(setVisibleDialogCreateNewUser(true)) }
      style={{textTransform: 'none', backgroundColor: '#2196f3', color: 'white', marginRight: '20px'}}>
      Create New User &nbsp;<AddIcon style={{fill: "white"}} />
    </Button>
  );
}
