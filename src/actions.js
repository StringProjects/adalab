import { 
  SAVE_TOKEN,
  SING_UP,
  SHOW_ERROR
} from './constants';

export function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token,
  };
}
export function userSingUp(justLog, errorClass, redirectToPrivateArea, groupList) {
  justLog = true;
  errorClass= "error-hidden";
  redirectToPrivateArea = true;
  return {
    type: SING_UP,
    justLog, errorClass, redirectToPrivateArea, groupList
  };
}

export function showError(errorClass) {
  errorClass = ""
  return {
    type: SHOW_ERROR,
    errorClass
  };
}

export function fetchSession(nickname, password, justLog, errorClass, redirectToPrivateArea, success) {
  console.log(nickname, password, justLog, errorClass, redirectToPrivateArea)
  return (dispatch) => {
    return   fetch('https://adalab.string-projects.com/api/v1/sessions', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        "nickname": nickname,
        "password": password,
      })
    }).then((response) => {
      if (response.ok) {
        return response.json()
          .then((data) => {
       
            dispatch(saveToken(data.user.auth_token));
            localStorage.setItem('token', data.user.auth_token);
            //localStorage.setItem('groupName', data.groups[0].name);
            debugger
            success();
            dispatch(userSingUp(justLog, errorClass, redirectToPrivateArea, data.groups))
          });
      } else {
        dispatch(showError(errorClass))
      }
  
    })
  }
}