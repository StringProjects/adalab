import {
  SAVE_TOKEN,
  SING_UP,
  SHOW_ERROR
} from '../constants';

const initialState = {
  token: "",
  justLog: false,
  errorClass: "error-hidden",
  redirectToPrivateArea: false,
  groupList: [],

}

export default function contentReducer(state = initialState, action) {
  console.log('store', state)
  console.log('action', action)
  switch (action.type) {
    case SAVE_TOKEN:
      return Object.assign({}, state, {
        token: state.token.concat(action.token)
      });
    case SING_UP:
      return Object.assign({}, state, {
        justLog: action.justLog,
        errorClass: action.errorClass,
        redirectToPrivateArea: action.redirectToPrivateArea,
        groupList: state.groupList.concat([action.groupList])
      });
    case SHOW_ERROR:
      return Object.assign({}, state, {
        errorClass: action.errorClass,
      });
    default:
      return state;
  }
}