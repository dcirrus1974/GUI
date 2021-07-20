import React from 'react';
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
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

import './userTable.css';
const PurpleSwitch = withStyles((theme) => ({
    switchBase: {
      color: "white",      
      '&$checked': {
        color: "white",        
      },
      '&$checked + $track': {
        backgroundColor: "blue",
      },
      '& + $track': {
        backgroundColor: '#ffacac',
        opacity: 1,
        border: 'none',
      },
    },
    checked: {},
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
      },
    thumb: {
        width: 20,
        height: 20,
        boxShadow: 'none',
      },
  }))(Switch);
function Switches() {
    // const [state, setState] = React.useState({
    //   checkedA: true,
    //   checkedB: true,
    // });
  
    // const handleChange = (event) => {
    //   setState({ ...state, [event.target.name]: event.target.checked });
    // };
  
    return (      
        <PurpleSwitch/>
    );
};
function createData(UserDetails,View, DownloadOriginal,Share,Upload,Delete,Copy, Download) {
  return {UserDetails,View, DownloadOriginal,Share,Upload,Delete,Copy, Download};
};
const rows = [
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  createData('Yogeshwaran',<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>,<Switches/>),
  
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
  { id: 'UserDetails', numeric: true, disablePadding: false, label: 'User Details' },
  { id: 'View', numeric: true, disablePadding: false, label: 'View' },
  { id: 'DownloadOriginal', numeric: true, disablePadding: false, label: 'Download Original' },
  { id: 'Share', numeric: true, disablePadding: false, label: 'Share' },
  { id: 'Upload', numeric: true, disablePadding: false, label: 'Upload' },
  { id: 'Delete', numeric: true, disablePadding: false, label: 'Delete' },
  { id: 'Copy', numeric: true, disablePadding: false, label: 'Copy' },
  { id: 'Download', numeric: true, disablePadding: false, label: 'Download' },
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

export default function EnhancedTableAccess() {
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
      const newSelecteds = rows.map((n) => n.UserDetails);
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
                  const isItemSelected = isSelected(index+page * rowsPerPage);
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, (index+page * rowsPerPage))}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >
                      <TableCell align="center">{row.UserDetails}</TableCell>                        
                      <TableCell align="center">{row.View}</TableCell>
                      <TableCell align="center">{row.DownloadOriginal}</TableCell>
                      <TableCell align="center">{row.Share}</TableCell>
                      <TableCell align="center">{row.Upload}</TableCell>
                      <TableCell align="center">{row.Delete}</TableCell>
                      <TableCell align="center">{row.Copy}</TableCell>
                      <TableCell align="center">{row.Download}</TableCell>
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
