import React, { Component } from 'react';

import Login from './WePublic/Login';
import AppPublic from './WePublic/AppPublic';
import AppPrivate from './WePrivate/AppPrivate';

class App extends Component {
  constructor(){
    super()
  }

  componentDidMount(){
    fetch('http://adalab.string-projects.com/api/v1/sessions',{
      method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
             body: JSON.stringify({
                "nickname": 'adalab1',
                "password": 'C12345678',
            })
    })
    .then((response) => response.json({
      
    }))
    .then((jsonskills) => {
        console.log(jsonskills);
    });

  }
  render() {
    return (
      <div className="container-fluid">
      <Login/>
         <AppPrivate/> 
        
        {/* <AppPublic/> */}
      </div>
    );
  }
}

export default App;
