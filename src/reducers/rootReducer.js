import { combineReducers } from 'redux';
import personalReducer from './personalReducer';

// Combine all the sub reducers
const rootReducer = combineReducers({
  personalData: personalReducer,
})

export default rootReducer