import React from 'react';
import Button from '@material-ui/core/Button';

export default function EmptyTrashAction() {

  return (
    <Button 
      variant="outlined" 
      size="large"
      style={{textTransform: 'none', borderColor: '#ea4335', color: '#ea4335', marginRight: '30px'}}>
      Empty Trash
    </Button>
  );
}
