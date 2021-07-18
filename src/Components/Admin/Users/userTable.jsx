import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import {makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import img1 from '../../../assets/images/avatar.png';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import PersonAddDisabledOutlinedIcon from '@material-ui/icons/PersonAddDisabledOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

import './userTable.css';

/*Dialog Part */
function ResetPasswordDialog() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
        }, 
        btn_cancel:{
          color:'#757575',
        },
        btn_reset:{
          color:'white',
          backgroundColor:'#3366ff',
          '&:hover':{
            color:'white',
            backgroundColor:'#3366ff',
          }
        },     
        top_:{
          padding:20,
        }, 
        icon_star:{
          color:'red',
        },
        margin: {
          margin: theme.spacing(1),
        },
        withoutLabel: {
          marginTop: theme.spacing(3),
        },
        textField: {
          width: '50ch',
        },
        title_row:{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          padding:20,
        }
      }));
    const classes = useStyles();
  
    const handleClose = () => {
      setOpen(false);
    };
    const [password1, setPassword1] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);
    const [password2, setPassword2] = useState('');
    const [showPassword2, setShowPassword2] = useState(false);
  
    return (
      <div>
        <div className="usercell" onClick={handleClickOpen}><HttpsOutlinedIcon color="secondary"/><span>Reset Password</span></div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.top_}>
          <div className={classes.title_row}>
            <Typography variant="h5" style={{color:'#0274d9', fontWeight:600}}>Reset Password</Typography>
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>   
          </div>     
          <DialogContent>    
          <div style={{marginTop:10,marginBottom:10,fontWeight:600}}>New Password <span className={classes.icon_star}>*</span></div>        
          <FormControl size="small" variant="outlined" className={classes.textField}>
                  <OutlinedInput
                    type={showPassword1 ? 'text' : 'password'}
                    value={password1}
                    onChange={ (e) => setPassword1(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword1(!showPassword1)}
                          edge="end"
                        >
                          {showPassword1 ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={0}
                  />
          </FormControl>
          <div style={{marginTop:10,marginBottom:10,fontWeight:600}}>Confirm Password <span className={classes.icon_star}>*</span></div>
          <FormControl size="small" variant="outlined" className={classes.textField}>
                  <OutlinedInput
                    type={showPassword2 ? 'text' : 'password'}
                    value={password2}
                    onChange={ (e) => setPassword2(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword2(!showPassword2)}
                          edge="end"
                        >
                          {showPassword2 ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={0}
                  />
          </FormControl>          
          </DialogContent>
          <DialogActions style={{marginTop:20,marginRight:20}}>
            <Button onClick={handleClose} className={classes.btn_cancel}>
              Cancel
            </Button>
            <Button onClick={handleClose} className={classes.btn_reset}>
              Reset Password
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
////////////////////////////////////////////////////
function DeleteUserDialog() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const useStyles = makeStyles((theme) => ({
      title_row:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
      },
      text:{
        width:400,
        color:'black',
        fontWeight:500,
      },
      btn_grp:{
        margin:20,
        display:'flex',
        justifyContent:'flex-start',
        gap:10,
      },   
      btn_yes:{
        color:'white',
        backgroundColor:'red',
        '&:hover':{
          color:'white',
          backgroundColor:'red',
        }
      },
      btn_no:{
        color:'red',
        border:'1px solid red',
      }   
    }));
    const classes=useStyles(); 
    return (
      <div>
        <div className="usercell" onClick={handleClickOpen}><DeleteOutlineOutlinedIcon color="secondary"/><span>Delete</span></div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"         
        >
          <div className={classes.title_row}>
            <Typography variant="h5" style={{color:'#ea4335', fontWeight:600}}>Delete User</Typography>
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>   
          </div>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" className={classes.text}>
            Are you sure you want to delete "UserName"
            </DialogContentText>
          </DialogContent>
          <DialogActions className={classes.btn_grp}>
            <Button onClick={handleClose} className={classes.btn_yes}>
              Yes,Delete
            </Button>
            <Button onClick={handleClose} className={classes.btn_no}>
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  //////////////////////////////////////////////////////
  function BlockUserDialog() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const useStyles = makeStyles((theme) => ({
      title_row:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
      },
      text:{
        width:400,
        color:'black',
        fontWeight:500,
      },
      btn_grp:{
        margin:20,
        display:'flex',
        justifyContent:'flex-start',
        gap:10,
      },   
      btn_yes:{
        color:'black',
        backgroundColor:'#ffaa00',
        '&:hover':{
          color:'black',
          backgroundColor:'#ffaa00',
        }
      },
      btn_no:{
        color:'black',
        border:'1px solid #ffaa00',
      }   
    }));
    const classes=useStyles(); 
    return (
      <div>
          <div className="usercell" onClick={handleClickOpen}><PersonAddDisabledOutlinedIcon color="secondary"/><span>Block User</span></div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"         
        >
          <div className={classes.title_row}>
            <Typography variant="h5" style={{color:'#ffaa00', fontWeight:600}}>Block User</Typography>
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>   
          </div>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" className={classes.text}>
            Are you sure you want to Block "UserName"
            </DialogContentText>
          </DialogContent>
          <DialogActions className={classes.btn_grp}>
            <Button onClick={handleClose} className={classes.btn_yes}>
              Yes, Block
            </Button>
            <Button onClick={handleClose} className={classes.btn_no}>
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
/////////////////////////////////////////////////////////
/*Dialog Part End*/

const options = [
    <ResetPasswordDialog/>,
    <div className="usercell"><MailOutlinedIcon color="secondary"/><span>Resend Activation Mail</span></div>,    
    <BlockUserDialog/>,
    <DeleteUserDialog/>,
  ];
const ITEM_HEIGHT = 48;
function LongMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '30ch',
            },
          }}
        >
          {options.map((option,index) => (
            <MenuItem key={index} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
function createData(Username, LoginId , Personal, Dataroom, Actions) {
  return {Username, LoginId , Personal, Dataroom, Actions};
}
const editcell=
<div className="editcell"><IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true"><BorderColorOutlinedIcon color="primary"/></IconButton>
<LongMenu/>
</div>;
const rows = [
  createData('Akhil', 'Akhil@dcirrus.com', '0 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '1 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '2 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '3 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '4 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '5 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '6 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '7 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '8 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '9 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '10 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '11 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '12 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '13 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '14 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '15 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '16 Bytes', '0 Bytes', editcell),
  createData('Akhil', 'Akhil@dcirrus.com', '17 Bytes', '0 Bytes', editcell),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'Username', numeric: false, disablePadding: true, label: 'Username' },
  { id: 'LoginId', numeric: true, disablePadding: false, label: 'Login Id' },
  { id: 'Personal', numeric: true, disablePadding: false, label: 'Personal' },
  { id: 'Dataroom', numeric: true, disablePadding: false, label: 'Data room' },
  { id: 'Actions', numeric: true, disablePadding: false, label: 'Actions' },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell, index) => (
          <TableCell
            key={index}
            align='center'
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n,index) => index);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size='medium'
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.Username);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  const usercell=<div className="usercell"><Avatar src={img1}></Avatar><span>Akhil</span></div>
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, (index+ page * rowsPerPage))}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >
                      <TableCell align="center" component="th" id={labelId} scope="row" padding="none">
                      {usercell}
                      </TableCell>
                      <TableCell align="center">{row.LoginId}</TableCell>
                      <TableCell align="center">{row.Personal}</TableCell>
                      <TableCell align="center">{row.Dataroom}</TableCell>
                      <TableCell align="center">{row.Actions}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
