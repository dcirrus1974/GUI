import React from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import img_1 from '../../assets/images/avatar.png';
import { AvatarGroup } from '@material-ui/lab';
import Chip from '@material-ui/core/Chip';
import File from '../File/File.jsx'; 
import './FileTable.css';

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
  { id: 'name', numeric: false, disablePadding: true, label: 'Name'},
  { id: 'Size', numeric: true, disablePadding: false, label: 'Size' },
  { id: 'Share_to', numeric: true, disablePadding: false, label: 'Share to' },
  { id: 'Version', numeric: true, disablePadding: false, label: 'Version' },
  { id: 'Date', numeric: true, disablePadding: false, label: 'Date' },
  { id: 'Tag', numeric: true, disablePadding: false, label: 'Tag' },
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
            align={headCell.id==="name"?"left":"center"}
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

function CreateData(name, size, share, version, date,tag) {
    return { name, size, share, version, date,tag};
}


export default function EnhancedTable(props) {
  
    const file_part = <File type="docx" name="My File01" size="1MB"/>;
    const rows1=[
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
    ];
    
    const rows2=[
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
    ];
    
    const rows3=[
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
        CreateData(file_part,"1MB","Shared","10","10/8/2020","important"),
    ];
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
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

  const isSelected = (name) => selected.indexOf(name) !== -1;

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
              onRequestSort={handleRequestSort}
            />
            <TableBody>
            <div className="folder_title">Today</div>
              {stableSort(rows1, getComparator(order, orderBy))
                .map((row, index) => {
                  const isItemSelected = isSelected(index);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, (index))}                      
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >                      
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.size}</TableCell>
                      <TableCell align="center" className="avatar_">                          
                        <AvatarGroup max={4}>
                          <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                          <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                          <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                          <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                        </AvatarGroup>                          
                      </TableCell>
                      <TableCell align="center">{row.version}</TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">
                        <Chip label="Project2"/>
                        <Chip label="Important"/>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <div className="folder_title">Yesterday</div>
                {stableSort(rows2, getComparator(order, orderBy))
                .map((row, index) => {
                  const isItemSelected = isSelected(index);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, (index))}                      
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >                      
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.size}</TableCell>
                      <TableCell align="center" className="avatar_">                          
                        <AvatarGroup max={4}>
                          <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                          <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                          <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                          <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                        </AvatarGroup>                          
                      </TableCell>
                      <TableCell align="center">{row.version}</TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">
                        <Chip label="Project2"/>
                        <Chip label="Important"/>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <div className="folder_title">Last Month</div>
                {stableSort(rows3, getComparator(order, orderBy))
                .map((row, index) => {
                  const isItemSelected = isSelected(index);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, (index))}                      
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >                      
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.size}</TableCell>
                      <TableCell align="center" className="avatar_">                          
                        <AvatarGroup max={4}>
                          <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                          <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                          <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                          <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                        </AvatarGroup>                          
                      </TableCell>
                      <TableCell align="center">{row.version}</TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">
                        <Chip label="Project2"/>
                        <Chip label="Important"/>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>      
    </div>
  );
}