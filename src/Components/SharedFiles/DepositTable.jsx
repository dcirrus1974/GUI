import React from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import img_1 from '../../assets/images/avatar.png';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import './FileTable.css';
  const menu_style={
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    gap:'10px',
  };

  const options = [
    <div style={menu_style}><BorderColorOutlinedIcon color="secondary"/><span>Edit</span></div>,
    <div style={menu_style}><DeleteOutlineOutlinedIcon color="secondary"/><span>Delete</span></div>,
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
              width: '20ch',
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
  //////////////////////////

function createData(SharedTo,Subject, SharedOn,Status,Actions) {
    return {SharedTo,Subject, SharedOn,Status,Actions};
  };

const SharedToA=
<div style={{display:'flex',justifyContent:'flex-start'}}>
    <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
    <Typography variant="body1" >Akhil@dcirrus.com</Typography>
</div>;

const ActionCell=
<div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
    <ErrorOutlineOutlinedIcon color="primary"/><LongMenu/>
</div>;
const rows = [
    createData(SharedToA,"Project 01 Share", "20/10/2020", "Pending",ActionCell),
    createData(SharedToA,"Project 01 Share", "20/10/2020", "Deposited",ActionCell),
    createData(SharedToA,"Project 01 Share", "20/10/2020", "Pending",ActionCell),
    createData(SharedToA,"Project 01 Share", "20/10/2020", "Deposited",ActionCell),
    createData(SharedToA,"Project 01 Share", "20/10/2020", "Pending",ActionCell),
    createData(SharedToA,"Project 01 Share", "20/10/2020", "Deposited",ActionCell),
    createData(SharedToA,"Project 01 Share", "20/10/2020", "Pending",ActionCell),
    createData(SharedToA,"Project 01 Share", "20/10/2020", "Deposited",ActionCell),
    createData(SharedToA,"Project 01 Share", "20/10/2020", "Pending",ActionCell),
    createData(SharedToA,"Project 01 Share", "20/10/2020", "Deposited",ActionCell),
    createData(SharedToA,"Project 01 Share", "20/10/2020", "Pending",ActionCell),
    createData(SharedToA,"Project 01 Share", "20/10/2020", "Deposited",ActionCell),
    createData(SharedToA,"Project 01 Share", "20/10/2020", "Pending",ActionCell),
    createData(SharedToA,"Project 01 Share", "20/10/2020", "Deposited",ActionCell),
    createData(SharedToA,"Project 01 Share", "20/10/2020", "Pending",ActionCell),
    createData(SharedToA,"Project 01 Share", "20/10/2020", "Deposited",ActionCell),
    
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
  { id: 'SharedTo', numeric: false, disablePadding: true, label: 'Shared To'},
  { id: 'Subject', numeric: true, disablePadding: false, label: 'Subject' },
  { id: 'SharedOn', numeric: true, disablePadding: false, label: 'Shared On' },
  { id: 'Status', numeric: true, disablePadding: false, label: 'Status' },
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
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.id==="SharedTo"?"left":"center"}
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

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar>      
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          FileTable
      </Typography>     
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
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

export default function DepositTable(props) {
  
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
      const newSelecteds = {rows}.map((n) => n.name);
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
                  const isItemSelected = isSelected(index+page * rowsPerPage);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, (index+page * rowsPerPage))}                      
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >                      
                      <TableCell component="th" id={labelId} scope="row" padding="20px">
                        {row.SharedTo}
                      </TableCell>
                      <TableCell align="center">{row.Subject}</TableCell>                      
                      <TableCell align="center">{row.SharedOn}</TableCell>
                      <TableCell align="center">{row.Status}</TableCell>
                      <TableCell align="center">
                        {row.Actions}
                      </TableCell>
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