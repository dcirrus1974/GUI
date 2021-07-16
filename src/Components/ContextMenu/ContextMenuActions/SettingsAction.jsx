import React from 'react';
import Button from '@material-ui/core/Button';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import { useDispatch } from 'react-redux';
import { setVisibleDialogEditSettings } from '../../../actions/actions';

export default function SettingsAction() {
  const dispatch = useDispatch();

  return (
    <Button 
      variant="contained" 
      size="large" 
      onClick={() => dispatch(setVisibleDialogEditSettings(true)) }
      style={{textTransform: 'none', backgroundColor: '#2196f3', color: 'white', marginRight: '20px'}}>
      Edit Settings &nbsp;<BorderColorOutlinedIcon style={{fill: "white"}} />
    </Button>
  );
}
