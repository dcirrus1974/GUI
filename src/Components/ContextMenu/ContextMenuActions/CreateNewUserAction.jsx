import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import { setVisibleDialogCreateNewUser } from '../../../actions/actions';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ImportExportIcon from '@material-ui/icons/ImportExport';

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

export default function CreateNewUserAction() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = () => {
    dispatch(setVisibleDialogCreateNewUser(true));
    setAnchorEl(null);
  }
  const handleClickLast = () => {
    setAnchorEl(null);
  }

  return (
    <>
      <Button 
        variant="contained" 
        size="large" 
        onClick={(e) => setAnchorEl(e.currentTarget)}
        style={{textTransform: 'none', backgroundColor: '#2196f3', color: 'white', marginRight: '20px'}}>
        Create New User &nbsp;<AddIcon style={{fill: "white"}} />
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
            <PersonAddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Create New User" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClick}>
          <ListItemIcon style={{minWidth:'30px'}}>
            <GroupAddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Create Multiole Users" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClickLast}>
          <ListItemIcon style={{minWidth:'30px'}}>
            <ImportExportIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Export User List" />
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
}
