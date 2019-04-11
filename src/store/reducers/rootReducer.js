import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
 // project: projectReducer,
  firebase: firebaseReducer
});

export default rootReducer

// the key name will be the data property on the state object