import {
  SAVE_TOKEN,
} from '../constants';

const initialState = {
  token: "",
}

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return Object.assign({}, state, {
        token: state.token.concat("")
      });
    default:
      return state;
  }
}