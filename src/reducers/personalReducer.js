import {  PERSONAL_DATA,
          FOLDERCLICK_DATA,
          SET_LOADING,
          SET_VISIBLE_DIALOG_CREATE_FOLDER,
          SET_VISIBLE_DIALOG_UPLOAD_FILE,
          SET_VISIBLE_DILOG_EDIT_SETTINGS,
          SET_VISIBLE_DIALOG_CREATE_NEW_USER,
          SET_VISIBLE_DIALOG_RENAME,
          SET_VISIBLE_DIALOG_DEPOSIT_REQUEST,
          SET_VISIBLE_DIALOG_SEARCH_OPTION,
          SET_VISIBLE_DIALOG_TAG_FILES,
          SET_VISIBLE_DIALOG_SHARE_FILES,
} from '../actions/actions';

const initState = {
  allData: [],
  subData: [],
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

    case SET_VISIBLE_DILOG_EDIT_SETTINGS:
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

    default:
      return state
  }
}

export default personalReducer;