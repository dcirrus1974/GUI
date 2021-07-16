import React from 'react';
import PropTypes from 'prop-types';
import './File.css';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import FileIcon from '@material-ui/icons/InsertDriveFile';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import img_1 from '../../assets/images/avatar.png';
import { useDispatch } from 'react-redux';
import { folderClickResults } from '../../actions/actions';

function File(props) {
    const dispatch = useDispatch();
    const [ isSelected, setIsSelected ] = React.useState(false);
    const { type, name, folderId, size, handleContextMenu } = props;
    const avatarStyle = {
        backgroundColor: isSelected ? '#caf0fd' : null
    };
    const realSize = typeof size !== 'undefined' && type !== 'S' ? '345' : null;
    return (
        <div className="File" style={avatarStyle} onClick={() => setIsSelected(!isSelected)} onDoubleClick={() => dispatch(folderClickResults(folderId))} onContextMenu={handleContextMenu} data-selected={isSelected}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        { type === 'S' ? <FolderIcon /> : <FileIcon />}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText className="primary:filename" primary={name} secondary={realSize} />
                <StarRateRoundedIcon style={{fill:"#ffaa00", width:"20px"}}/>
                <LockRoundedIcon style={{fill:"#ffaa00", width:"15px"}}/>
                <Avatar alt="Remy Sharp" src={img_1} style={{fill:"#ffaa00", width:"20px", height:"20px"}} />
            </ListItem>
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

