import React from 'react';
import Button from '@material-ui/core/Button';

export default function RestoreFilesAction() {

  return (
    <Button 
      variant="contained" 
      size="large" 
      style={{textTransform: 'none', backgroundColor: '#2196f3', color: 'white', marginRight: '20px'}}>
      Restore Files
    </Button>
  );
}
