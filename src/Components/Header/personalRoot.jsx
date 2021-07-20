import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreateFolderAction from '../ContextMenu/ContextMenuActions/CreateFolderAction.jsx';
import UploadFileAction from '../ContextMenu/ContextMenuActions/UploadFileAction.jsx';
import ViewAgendaRoundedIcon from '@material-ui/icons/ViewAgendaRounded';
import { BsFillGridFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import {setIsTable} from '../../actions/actions';
import IconButton from '@material-ui/core/IconButton';
import FilePath from '../File/FilePath/FilePath';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import ShareIcon from '@material-ui/icons/Share';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { setVisibleDialogShareFiles,
        setVisibleDialogDeleteFilesOrFolders,
        setVisibleDialogCopy,
        setVisibleDialogMove,
        setVisibleDialogRename,
        setVisibleDialogDepositRequest,
        setVisibleDialogTagFiles,
        setVisibleDialogExportLogs,
        setVisibleDialogHistory,
      } from '../../actions/actions';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FlipToBackIcon from '@material-ui/icons/FlipToBack';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import HistoryIcon from '@material-ui/icons/History';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'calc(100% - 24px)',
    height: '73px',
    display: 'flex',
    alignItems: 'center',
  },
  grow: {
    flexGrow: 1,
  },
  icon: {
    color: 'grey',
    cursor: 'pointer',
    marginLeft: '20px',
  },
  star: {
    color: '#f5b500',
    cursor: 'pointer',
  },
  title: {
    fontSize: '30px',
    fontWeight: '500',
    paddingLeft: '30px'
  },
  list: {
    color: 'grey',
    cursor: 'pointer',
    borderLeft: '1px solid #e0e0e0',
    marginLeft: '20px',
    paddingLeft: '20px',
  },
  bsfill: {
    color: 'grey',
    cursor: 'pointer',
    width: '20px',
    height: '20px',
  },
}));

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

export default function Header(props) {
  const classes = useStyles();
  const dispatch =useDispatch();
  const isTable = useSelector(state => state.personalData.isTable);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClickMove = () => {
    dispatch(setVisibleDialogMove(true));
    setAnchorEl(null);
  }
  const handleClickRename = () => {
    dispatch(setVisibleDialogRename(true));
    setAnchorEl(null);
  }
  const handleClickDepositRequest = () => {
    dispatch(setVisibleDialogDepositRequest(true));
    setAnchorEl(null);
  }
  const handleClickTagFiles = () => {
    dispatch(setVisibleDialogTagFiles(true));
    setAnchorEl(null);
  }
  const handleClickExportLogs = () => {
    dispatch(setVisibleDialogExportLogs(true));
    setAnchorEl(null);
  }
  const handleClickHistory = () => {
    dispatch(setVisibleDialogHistory(true));
    setAnchorEl(null);
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>
          {props.title}
        </div>
        <div className={classes.grow} />
        <CreateFolderAction />
        <UploadFileAction />      
        <IconButton onClick={() => dispatch(setIsTable(!isTable))}>              
          {isTable?
          <ViewAgendaRoundedIcon className={classes.bsfill} />:
          <BsFillGridFill className={classes.bsfill} />
          }
        </IconButton>
      </div>
      {!isTable?
        <div className={classes.root}>
          <FilePath root={props.title}/>
          <div className={classes.grow} />
            <StarRoundedIcon className={classes.star} />
            <ShareIcon className={classes.icon} onClick={() => dispatch(setVisibleDialogShareFiles(true))} />
            <FilterNoneIcon className={classes.icon} onClick={() => dispatch(setVisibleDialogCopy(true))} />
            <DeleteForeverIcon className={classes.icon} onClick={() => {dispatch(setVisibleDialogDeleteFilesOrFolders(true))}} />
            <MoreVertIcon className={classes.list} onClick={(e) => setAnchorEl(e.currentTarget)} />
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <StyledMenuItem onClick={handleClickMove}>
                <ListItemIcon style={{minWidth:'30px'}}>
                  <FlipToBackIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Move" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClickRename}>
                <ListItemIcon style={{minWidth:'30px'}}>
                  <AutorenewIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Rename" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClickDepositRequest}>
                <ListItemIcon style={{minWidth:'30px'}}>
                  <PresentToAllIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Deposit Request" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClickTagFiles}>
                <ListItemIcon style={{minWidth:'30px'}}>
                  <LoyaltyIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Tag Files" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClickExportLogs}>
                <ListItemIcon style={{minWidth:'30px'}}>
                  <ImportExportIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Export Logs" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClickHistory}>
                <ListItemIcon style={{minWidth:'30px'}}>
                  <HistoryIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Version History" />
              </StyledMenuItem>
            </StyledMenu>
        </div>:null}
    </>
  );
}