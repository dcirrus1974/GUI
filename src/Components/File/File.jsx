import React from 'react';
import PropTypes from 'prop-types';
import './File.css';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import img_1 from '../../assets/images/avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { folderClickResults,
        fileClickEvents,
        setFilePath,
        delChildPath,
        } from '../../actions/actions';
import ico_docx from '../../assets/images/ico_docx.jpg';
import ico_file from '../../assets/images/ico_file.png';
import ico_pdf from '../../assets/images/ico_pdf.png';
import ico_txt from '../../assets/images/ico_txt.png';
import ico_xlsx from '../../assets/images/ico_xlsx.svg';
import { AvatarGroup } from '@material-ui/lab';
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: 3,
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#137cbd',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3',
      },
    },
  });
  
  // Inspired by blueprintjs
  function StyledCheckbox(props) {
    const classes = useStyles();
  
    return (
      <Checkbox
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        inputProps={{ 'aria-label': 'decorative checkbox' }}
        {...props}
      />
    );
  }
  


function File(props) {
    const {isDialog} = props;
    const dispatch = useDispatch();
    const [ isSelected, setIsSelected ] = React.useState(false);
    const { type, name, folderId, handleContextMenu, checkbox } = props;    
    const isTable = useSelector(state => state.personalData.isTable);
    const avatarStyle_file = {
        backgroundColor: isSelected ? '#caf0fd' : null,  
        width:isTable?'Calc(15%)':isDialog?'Calc(33%)':'Calc(100%)',
        border:isTable?'1px solid rgb(233, 226, 226)':'none', 
    };
    const avatarStyle_folder = {
        backgroundColor: isSelected ? '#caf0fd' : null,  
        width:isTable?'Calc(20%)':isDialog?'Calc(33%)':'Calc(100%)',
        border:isTable?'1px solid rgb(233, 226, 226)':'none', 
    };

    const handleClick = () => {
        dispatch(fileClickEvents(folderId));
        setIsSelected(!isSelected);
    }

    const func_href = () => {
        dispatch(delChildPath(folderId));
        dispatch(folderClickResults(folderId));
    }

    const handleDoubleClick = (folderId) => {        
        if(type==="S"){
            const path=<Link href="#" onClick={func_href} id={folderId} key={folderId}>
                {name}
            </Link>;
            dispatch(setFilePath(path));
        }            
        dispatch(folderClickResults(folderId));
    }
    
    const DefIcon=(type)=>{
        switch(type){
            case "S":
                return <FolderIcon style={{color:"#757575"}}/>;
            case "docx":
                return <img src={ico_docx} alt="file" style={{width:"25px"}}/>;
            case "pdf":
                return <img src={ico_pdf} alt="file" style={{width:"25px"}}/>;
            case "xlsx":
                return <img src={ico_xlsx} alt="file" style={{width:"25px"}}/>;
            case "txt":
                return <img src={ico_txt} alt="file" style={{width:"25px"}}/>;
            default:
                return <img src={ico_file} alt="file" style={{width:"20px"}}/>;
        }
    };
    const DefIconDouble=(type)=>{
        switch(type){
            case "S":
                return <FolderIcon style={{color:"#757575"}}/>;
            case "docx":
                return <img src={ico_docx} alt="file" style={{width:"50px"}}/>;
            case "pdf":
                return <img src={ico_pdf} alt="file" style={{width:"50px"}}/>;
            case "xlsx":
                return <img src={ico_xlsx} alt="file" style={{width:"50px"}}/>;
            case "txt":
                return <img src={ico_txt} alt="file" style={{width:"50px"}}/>;
            default:
                return <img src={ico_file} alt="file" style={{width:"50px"}}/>;
        }
    };
    return (
        !isTable || type==="S"?
            <div className="File" style={avatarStyle_folder} onClick={handleClick} onDoubleClick={() => handleDoubleClick(folderId)} onContextMenu={handleContextMenu} data-selected={isSelected}>            
            <ListItem>
                {DefIcon(type)}                
                <ListItemText className="filename" primary={name}/>
                <StarRateRoundedIcon style={{fill:"#ffaa00", width:"20px"}}/>
                <LockRoundedIcon style={{fill:"#ffaa00", width:"15px"}}/>

                <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                <div style={{marginLeft:'20px'}}>{isTable && checkbox?<StyledCheckbox checked={isSelected}/>:null}</div>
            </ListItem></div>:
            <div className="FileList" style={avatarStyle_file} onClick={handleClick} onDoubleClick={() => dispatch(folderClickResults(folderId))} onContextMenu={handleContextMenu} data-selected={isSelected}>            
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>               
                    <div>
                        <ListItemText className="filename" primary={name.split('.')[0]}/>
                    </div>
                    <div>
                        <StarRateRoundedIcon style={{fill:"#ffaa00", width:"20px"}}/>
                        <LockRoundedIcon style={{fill:"#ffaa00", width:"15px"}}/>
                    </div>
                    <div>
                        {DefIconDouble(type)} 
                    </div>
                    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                    <AvatarGroup>
                        <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                        <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                        <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                        <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                    </AvatarGroup>
                    <div style={{marginLeft:'20px'}}>{checkbox?<StyledCheckbox checked={isSelected}/>:null}</div>
                    </div>
                </div>            
            </div>
    );
}

File.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    editable: PropTypes.oneOfType([
        PropTypes.bool, PropTypes.number
    ])
};

export default File;

