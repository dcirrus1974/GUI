import React from 'react';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useDispatch } from 'react-redux';
import { setVisibleDialogUploadFile } from '../../../actions/actions';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import FolderIcon from '@material-ui/icons/Folder';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function UploadFileAction() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = () => {
    dispatch(setVisibleDialogUploadFile(true));
    setAnchorEl(null);
  }

  return (
    <>
      <Button 
        variant="outlined" 
        size="large"
        onClick={(e) => setAnchorEl(e.currentTarget)} 
        style={{textTransform: 'none', borderColor: '#2196f3', color: '#2196f3', marginRight: '30px'}}>
        Upload &nbsp;<CloudUploadIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <StyledMenuItem onClick={handleClick}>
          <ListItemIcon style={{minWidth:'30px'}}>
            <InsertDriveFileIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Upload Files" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClick}>
          <ListItemIcon style={{minWidth:'30px'}}>
            <FolderIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Upload Folders" />
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
}
