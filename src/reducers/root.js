import { combineReducers } from 'redux';

import storeSession from './storeSession';

//genera el store general
const rootReducer = combineReducers({
  storeSession,
})

export default rootReducer
