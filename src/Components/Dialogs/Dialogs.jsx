import React from 'react';
// import DialogContent from './Content/Content.jsx';
// import DialogEdit from './Edit/Edit.jsx';
// import DialogMove from './Move/Move.jsx';
// import DialogCopy from './Copy/Copy.jsx';
import DialogCreateFolder from './CreateFolder/CreateFolder.jsx';
import DialogRename from './Rename/Rename.jsx';
import DialogDeposit from './Deposit/Deposit.jsx';
import DialogSearch from './SearchOption/SearchOption.jsx';
import DialogUploadFile from './UploadFile/UploadFile.jsx';
import DialogEditSettings from './EditSettings/EditSettings.jsx';
import DialogAdminNewUser from './AdminNewUser/AdminNewUser.jsx';
import TagFiles from './TagFiles/TagFiles.jsx';
import ShareFiles from './ShareFiles/ShareFiles.jsx';

function Dialogs() {
    return (
        <div className="Dialogs">
            {/*<DialogContent />
            <DialogEdit />*/}
            {/*<DialogMove />
            <DialogCopy />*/}
            <DialogCreateFolder />
            <DialogRename />
            <DialogSearch />
            <DialogUploadFile />
            <DialogEditSettings />
            <DialogAdminNewUser />
            <DialogDeposit />
            <TagFiles />
            <ShareFiles />
        </div>
    );
}

export default Dialogs;
