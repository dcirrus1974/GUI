import Axios from 'axios';

export const PERSONAL_DATA = 'PERSONAL REDUCER PERSONAL DATA';
export const FOLDERCLICK_DATA = 'FOLDER REDUCER CLICK DATA';
export const SET_LOADING = 'SET REDUCER LOADING';
export const SET_VISIBLE_DIALOG_CREATE_FOLDER = 'SET VISIBLE DIALOG CREATE FOLDER';
export const SET_VISIBLE_DIALOG_UPLOAD_FILE = 'SET VISIBLE DIALOG UPLOAD FILE';
export const SET_VISIBLE_DIALOG_EDIT_SETTINGS = 'SET VISIBLE DIALOG EDIT SETTINGS';
export const SET_VISIBLE_DIALOG_CREATE_NEW_USER = 'SET VISIBLE DIALOG CREATE NEW USER';
export const SET_VISIBLE_DIALOG_RENAME = 'SET VISIBLE DIALOG RENAME';
export const SET_VISIBLE_DIALOG_DEPOSIT_REQUEST = 'SET VISIBLE DIALOG DEPOSIT REQUEST';
export const SET_VISIBLE_DIALOG_SEARCH_OPTION = 'SET VISIBLE DIALOG SEARCH OPTION';
export const SET_VISIBLE_DIALOG_TAG_FILES = 'SET VISIBLE DIALOG TAG FILES';
export const SET_VISIBLE_DIALOG_SHARE_FILES = 'SET VISIBLE DIALOG SHARE FILES';
export const SET_VISIBLE_DIALOG_DELETE_FILES_OR_FOLDERS = 'SET VISIBLE DIALOG DELETE FILES OR FOLDERS'
export const SET_VISIBLE_DIALOG_EXPORT_LOGS = 'SET VISIBLE DIALOG EXPORT LOGS';
export const SET_VISIBLE_DIALOG_COPY = 'SET VISIBLE DIALOG COPY';
export const SET_ACTION_OPEN_CLOSE = 'SET ACTION OPEN CLOSE';
export const SET_VISIBLE_DIALOG_MOVE = 'SET VISIBLE DIALOG MOVE';
export const SET_VISIBLE_DIALOG_HISTORY = 'SET VISIBLE DIALOG HISTORY';
export const SET_IS_TABLE = 'SET IS TABLE';
export const SET_FILE_CLICK_EVENTS = 'SET FILE CLICK EVENTS';
export const SET_FILE_PATH = 'SET FILE PATH LIST';
export const DEL_CHILD_PATH  = 'DEL CHILD PATH';

export const getPersonalData = () => async dispatch => {
  dispatch(setLoading(true));
  const personalData = await Axios.request({
    url: 'https://dcirrus.co.in/api.acms/v1/app/unindexfolderlistg/0/zerolevel/0/S/fetchAllAdmFolderListResponse',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
    withCredentials: true,
  });

  dispatch(setLoading(false));
  if(!personalData.data.error)
		dispatch({
			type: PERSONAL_DATA,
			payload: personalData.data,
		});
  else
		dispatch({
			type: PERSONAL_DATA,
			payload: 'error',
		});
}

export const folderClickResults = (folderId) => async dispatch => {
  const Id = folderId.replace("file",'').replace("folder",'');
  const folderDoubleClick = await Axios.request({
    url: 'https://dcirrus.co.in/api.acms/v1/app/unindexdoclist/0/0/' + Id +'/DESC%60lastmodified/fetchAllAdmFolderChildListResponse',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
    withCredentials: true,
  });

  if(!folderDoubleClick.data.error)
    dispatch({
      type: FOLDERCLICK_DATA,
      payload: folderDoubleClick.data,
    });
  else
    dispatch({
      type: FOLDERCLICK_DATA,
      payload: 'error',
    });
}

export const setLoading = (value) => {
  return {
    type: SET_LOADING,
    payload: value,
  };
};

export const setVisibleDialogCreateFolder = (visible) => {
  return {
    type: SET_VISIBLE_DIALOG_CREATE_FOLDER,
    payload: !!visible,
  };
};

export const setVisibleDialogUploadFile = (visible) => {
  return {
    type: SET_VISIBLE_DIALOG_UPLOAD_FILE,
    payload: !!visible,
  };
};

export const setVisibleDialogEditSettings = (visible) => {
  return {
    type: SET_VISIBLE_DIALOG_EDIT_SETTINGS,
    payload: !!visible,
  }
}

export const setVisibleDialogCreateNewUser = (visible) => {
  return {
    type: SET_VISIBLE_DIALOG_CREATE_NEW_USER,
    payload: !!visible,
  }
}

export const setVisibleDialogRename = (visible) => {
  return {
    type: SET_VISIBLE_DIALOG_RENAME,
    payload: !!visible,
  }
}

export const setVisibleDialogDepositRequest = (visible) => {
  return {
    type: SET_VISIBLE_DIALOG_DEPOSIT_REQUEST,
    payload: !!visible,
  }
}

export const setVisibleDialogSearchOption = (visible) => {
  return {
    type: SET_VISIBLE_DIALOG_SEARCH_OPTION,
    payload: !!visible,
  }
}

export const setVisibleDialogTagFiles = (visible) => {
  return {
    type: SET_VISIBLE_DIALOG_TAG_FILES,
    payload: !!visible,
  }
}

export const setVisibleDialogShareFiles = (visible) => {
  return {
    type: SET_VISIBLE_DIALOG_SHARE_FILES,
    payload: !!visible,
  }
}

export const setVisibleDialogDeleteFilesOrFolders = (visible) => {
  return {
    type: SET_VISIBLE_DIALOG_DELETE_FILES_OR_FOLDERS,
    payload: !!visible,
  }
}

export const setVisibleDialogExportLogs = (visible) => {
  return {
    type: SET_VISIBLE_DIALOG_EXPORT_LOGS,
    payload: !!visible,
  }
}

export const setVisibleDialogCopy = (visible) => {
  return {
    type: SET_VISIBLE_DIALOG_COPY,
    payload: !!visible,
  }
}

export const setActionOpenClose = (visible) => {
  return {
    type: SET_ACTION_OPEN_CLOSE,
    payload: !!visible,
  }
}

export const setVisibleDialogMove = (visible) => {
  return {
    type: SET_VISIBLE_DIALOG_MOVE,
    payload: !!visible,
  }
}

export const setVisibleDialogHistory = (visible) => {
  return {
    type: SET_VISIBLE_DIALOG_HISTORY,
    payload: !!visible,
  }
}

export const setIsTable = (value) => {
  return {
    type: SET_IS_TABLE,
    payload: value,
  }
}

export const fileClickEvents = (value) => {
  return {
    type: SET_FILE_CLICK_EVENTS,
    payload: value,
  }
}

export const setFilePath = (value) => {
  return {
    type: SET_FILE_PATH,
    payload: value,
  }
}

export const delChildPath = (value) => {
  return {
    type: DEL_CHILD_PATH,
    payload: value,
  }
}
