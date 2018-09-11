import React, { Component } from 'react';
import WeHeader from '../Components/WeHeader';
import WeButtonOption from '../Components/WeButtonOption';
import Groups from './Groups';
import Group from './Group';
import Thread from './Thread';
import {Switch, Route} from 'react-router-dom';

class AppPrivate extends Component {

  constructor(props){
    super(props);
    this.state={
      groupList: [],
      groupPost: [],
    }
    this.goToGroup = this.goToGroup.bind(this);
    this.getToken = this.getToken.bind(this);
    this.fetchGroupList = this.fetchGroupList.bind(this);
    this.goToThreadFetch = this.goToThreadFetch.bind(this);
    this.goToThread = this.goToThread.bind(this);
  }

  getToken() {
    return localStorage.getItem('token')
  }

  fetchGroupList() {
    fetch('http://adalab.string-projects.com/api/v1/sessions', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'

      },
      body: JSON.stringify({
        "nickname": "adalab1",
        "password": "C12345678"
      })
      
    }).then((response) => {
        return response.json()})
      .then((data) => {
        console.log("DATA",data);
        this.setState({groupList: data.groups})
      });
  } 
        
   //Principio llamada API de Group
   goToGroup(){
    fetch('http://adalab.string-projects.com/api/v1/posts', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'AUTH-TOKEN': this.getToken()
      }
    }).then((response) => {
        return response.json()
    }).then((data)=>{
        this.setState({groupPost:data})
        console.log("POSTS", data)
    })
  }
  
  //Principio llamada API Thread
  goToThreadFetch(){
    fetch('http://adalab.string-projects.com/api/v1/posts', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'AUTH-TOKEN': this.getToken()
      }
    }).then((response) => {
        return response.json()
    }).then((data)=>{
        this.setState({groupPost:data})
        console.log("POSTS", data)
    })
  }
    
  goToThread(event){
    console.log("event", event.target)
  
  }

  render() {
    const {
      routePrivate,
      routePublic,
      routeGroup,
      match,
      
    } = this.props;
    console.log('props en app private', this.props)
    return (
      <div className="wrapper-group">
       
        <WeHeader />
        
        <WeButtonOption
          routePrivate={routePrivate}
          routePublic={routePublic}
          routeGroup={routeGroup}
          match={match}
        />
        
            <Groups
              
              routePrivate={routePrivate}
              routePublic={routePublic}
              routeGroup={routeGroup}
              groupList={this.state.groupList}
              goToGroup={this.goToGroup}
              handleFetchGroups={this.handleFetchGroups}
              fetchGroupList={this.fetchGroupList}
            />
        
       
       <Switch>
         <Route path='/group'>
            <Group
              match={this.props.match}
              routeGroup={routeGroup}
              routePrivate={routePrivate}
              routePublic={routePublic}
              groupPostArray={this.state.groupPost}
              goToThread={this.goToThread}
              groupList= {this.state.groupList}
            />
        </Route>
      
        <Route path='/thread'>
          <Thread/>
        </Route>
        </Switch>
      </div>
    );
  }
}

export default AppPrivate;