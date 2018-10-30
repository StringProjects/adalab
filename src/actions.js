import { 
  SAVE_TOKEN
} from './constants';

export function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token,
  };
}

export function fetchSession(nickname, password) {
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
            dispatch(saveToken(data.user.auth_token))
            localStorage.setItem('token', data.user.auth_token)
            // this.savedToken(data.user.auth_token)
            // this.savedGroupName(data.groups[0].name)
            // this.changeStates();
            // this.setState({ 
            //   errorClass: "error-hidden", 
            //   groupList: data.groups 
            // });
          });
      } else {
        this.setState({ 
          errorClass: "" 
        });
      }
  
    })
  }
}