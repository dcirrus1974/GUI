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
import { folderClickResults } from '../../actions/actions';
import ico_docx from '../../assets/images/ico_docx.jpg';
import ico_file from '../../assets/images/ico_file.png';
import ico_pdf from '../../assets/images/ico_pdf.png';
import ico_txt from '../../assets/images/ico_txt.png';
import ico_xlsx from '../../assets/images/ico_xlsx.svg';
import { AvatarGroup } from '@material-ui/lab';



function File(props) {
    const dispatch = useDispatch();
    const [ isSelected, setIsSelected ] = React.useState(false);
    const { type, name, folderId, size, handleContextMenu } = props;    
    const realSize = typeof size !== 'undefined' && type !== 'S' ? '345' : null;
    const isTable = useSelector(state => state.personalData.isTable);
    const avatarStyle_file = {
        backgroundColor: isSelected ? '#caf0fd' : null,  
        width:isTable?'Calc(15%)':'Calc(100%)',
        border:isTable?'1px solid rgb(233, 226, 226)':'none', 
    };
    const avatarStyle_folder = {
        backgroundColor: isSelected ? '#caf0fd' : null,  
        width:isTable?'Calc(20%)':'Calc(100%)',
        border:isTable?'1px solid rgb(233, 226, 226)':'none', 
    };

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
            <div className="File" style={avatarStyle_folder} onClick={() => setIsSelected(!isSelected)} onDoubleClick={() => dispatch(folderClickResults(folderId))} onContextMenu={handleContextMenu} data-selected={isSelected}>            
            <ListItem>
                {DefIcon(type)}                
                <ListItemText className="filename" primary={name}/>
                <StarRateRoundedIcon style={{fill:"#ffaa00", width:"20px"}}/>
                <LockRoundedIcon style={{fill:"#ffaa00", width:"15px"}}/>

                <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
            </ListItem></div>:
            <div className="FileList" style={avatarStyle_file} onClick={() => setIsSelected(!isSelected)} onDoubleClick={() => dispatch(folderClickResults(folderId))} onContextMenu={handleContextMenu} data-selected={isSelected}>            
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
                    <div>
                    <AvatarGroup>
                        <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                        <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                        <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                        <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
                    </AvatarGroup>
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

