import React, { Component } from 'react';
import { 
  Route, 
  Redirect 
} from 'react-router-dom';
import {
  connect
} from 'react-redux';

class PrivateRoute extends Component {
  render() {
    
    return (
      <Route
        path={"/private"}
        render={(props) => {
          debugger
          this.props.redirectToPrivateArea === true ? (
            this.props.children
          ).bind(this) : (
            <Redirect
              to={{
                pathname: this.props.public_path,
                state: { from: this.props.location }
              }}
            />
          )
        }
          
        }
      />
    );
  }
}
 
function mapStateToProps(state) {
  return {
    redirectToPrivateArea: state.storeSession.redirectToPrivateArea,
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute)