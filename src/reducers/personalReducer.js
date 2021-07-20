import {  PERSONAL_DATA,
          FOLDERCLICK_DATA,
          SET_LOADING,
          SET_VISIBLE_DIALOG_CREATE_FOLDER,
          SET_VISIBLE_DIALOG_UPLOAD_FILE,
          SET_VISIBLE_DIALOG_EDIT_SETTINGS,
          SET_VISIBLE_DIALOG_CREATE_NEW_USER,
          SET_VISIBLE_DIALOG_RENAME,
          SET_VISIBLE_DIALOG_DEPOSIT_REQUEST,
          SET_VISIBLE_DIALOG_SEARCH_OPTION,
          SET_VISIBLE_DIALOG_TAG_FILES,
          SET_VISIBLE_DIALOG_SHARE_FILES,
          SET_VISIBLE_DIALOG_DELETE_FILES_OR_FOLDERS,
          SET_VISIBLE_DIALOG_EXPORT_LOGS,
          SET_VISIBLE_DIALOG_COPY,
          SET_ACTION_OPEN_CLOSE,
          SET_VISIBLE_DIALOG_MOVE,
          SET_VISIBLE_DIALOG_HISTORY,
          SET_IS_TABLE,
          SET_FILE_CLICK_EVENTS,
          SET_FILE_PATH,
          DEL_CHILD_PATH,
} from '../actions/actions';

const initState = {
  allData: [],
  subData: [],
  selectedFiles: [],
  loading: false,
  visibleDialogCreateFolder: false,
  visibleDialogUploadFile: false,
  visibleDialogEditSettings: false,
  visibleDialogCreateNewUser: false,
  visibleDialogRename: false,
  visibleDialogDepositRequest: false,
  visibleDialogSearchOption: false,
  visibleDialogTagFiles: false,
  visibleDialogShareFiles: false,
  visibleDialogDeleteFilesOrFolders: false,
  visibleDialogExportLogs: false,
  visibleDialogCopy: false,
  actionOpenClose: false,
  visibleDialogMove: false,
  visibleDialogHistory: false,
  isTable: true,
  isSelected: false,
  filePath:[],
}

const personalReducer = (state = initState, action) => {
  switch (action.type) {
    case PERSONAL_DATA:
      return {
        ...state,
        allData: action.payload,
        loading: false,
      }

    case FOLDERCLICK_DATA:
      return {
        ...state,
        subData: action.payload,
        allData: 'error',
      }

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }

    case SET_VISIBLE_DIALOG_CREATE_FOLDER:
      return {
        ...state,
        visibleDialogCreateFolder: !!action.payload,
      }

    case SET_VISIBLE_DIALOG_UPLOAD_FILE:
      return {
        ...state,
        visibleDialogUploadFile: !!action.payload,
      }

    case SET_VISIBLE_DIALOG_EDIT_SETTINGS:
      return {
        ...state,
        visibleDialogEditSettings: !!action.payload,
      }

    case SET_VISIBLE_DIALOG_CREATE_NEW_USER:
      return {
        ...state,
        visibleDialogCreateNewUser: !!action.payload,
      }

    case SET_VISIBLE_DIALOG_RENAME:
      return {
        ...state,
        visibleDialogRename: !!action.payload,
      }

    case SET_VISIBLE_DIALOG_DEPOSIT_REQUEST:
      return {
        ...state,
        visibleDialogDepositRequest: !!action.payload,
      }

    case SET_VISIBLE_DIALOG_SEARCH_OPTION:
      return {
        ...state,
        visibleDialogSearchOption: !!action.payload,
      }

    case SET_VISIBLE_DIALOG_TAG_FILES:
      return {
        ...state,
        visibleDialogTagFiles: !!action.payload,
      }

    case SET_VISIBLE_DIALOG_SHARE_FILES:
      return {
        ...state,
        visibleDialogShareFiles: !!action.payload,
      }

    case SET_VISIBLE_DIALOG_DELETE_FILES_OR_FOLDERS:
      return {
        ...state,
        visibleDialogDeleteFilesOrFolders: !!action.payload
      }

    case SET_VISIBLE_DIALOG_EXPORT_LOGS:
      return {
        ...state,
        visibleDialogExportLogs: !!action.payload,
      }

    case SET_VISIBLE_DIALOG_COPY:
      return {
        ...state,
        visibleDialogCopy: !!action.payload,
      }

    case SET_ACTION_OPEN_CLOSE:
      return {
        ...state,
        actionOpenClose: !!action.payload,
      }

    case SET_VISIBLE_DIALOG_MOVE:
      return {
        ...state,
        visibleDialogMove: !!action.payload,
      }

    case SET_VISIBLE_DIALOG_HISTORY:
      return {
        ...state,
        visibleDialogHistory: !!action.payload,
      }
      
    case SET_IS_TABLE:
      return {
        ...state,
        isTable:action.payload,
      }

    case SET_FILE_CLICK_EVENTS:
      if(state.selectedFiles.includes(action.payload)){
        state.selectedFiles.splice(state.selectedFiles.indexOf(action.payload), 1);
      } else {
        state.selectedFiles.push(action.payload);
      }
      if(state.selectedFiles.length > 0)
        state.isSelected = true;
      else
        state.isSelected = false;
      return {
        ...state,
        isSelected: state.isSelected,
      }
    
    case SET_FILE_PATH:
      state.filePath.push(action.payload);
      return {
        ...state,
      }
    
    case DEL_CHILD_PATH:
      const new_path=[];
      for(var i=0; i<state.filePath.length; i++){
        new_path.push(state.filePath[i]);
        if(action.payload===state.filePath[i].props.id)
          break;
      }
      if(action.payload==="root")
        new_path.splice(0,new_path.length);
      return {
        ...state,
        filePath: new_path,
      }

    default:
      return state
  }
}

export default personalReducer;