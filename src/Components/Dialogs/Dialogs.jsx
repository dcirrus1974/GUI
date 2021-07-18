import React from 'react';
import DialogHistory from './History/History.jsx';
import DialogMove from './Move/Move.jsx';
import DialogCopy from './Copy/Copy.jsx';
import DialogCreateFolder from './CreateFolder/CreateFolder.jsx';
import DialogRename from './Rename/Rename.jsx';
import DialogDeposit from './Deposit/Deposit.jsx';
import DialogSearch from './SearchOption/SearchOption.jsx';
import DialogUploadFile from './UploadFile/UploadFile.jsx';
import DialogEditSettings from './EditSettings/EditSettings.jsx';
import DialogAdminNewUser from './AdminNewUser/AdminNewUser.jsx';
import TagFiles from './TagFiles/TagFiles.jsx';
import ShareFiles from './ShareFiles/ShareFiles.jsx';
import DeleteFilesOrFolders from './DeleteFilesOrFolders/DeleteFilesOrFolders.jsx';
import ExportLogs from './ExportLogs/ExportLogs.jsx';

function Dialogs() {
    return (
        <div className="Dialogs">
            <DialogHistory />
            <DialogMove />
            <DialogCopy />
            <DialogCreateFolder />
            <DialogRename />
            <DialogSearch />
            <DialogUploadFile />
            <DialogEditSettings />
            <DialogAdminNewUser />
            <DialogDeposit />
            <TagFiles />
            <ShareFiles />
            <DeleteFilesOrFolders />
            <ExportLogs />
        </div>
    );
}

export default Dialogs;
