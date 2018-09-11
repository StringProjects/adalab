import React from 'react';
import { 
  Route, 
  Redirect 
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log('this.props privateroute',this.props)
  console.log('rest',rest);
  return (
  <Route
    {...rest}
    render={(props) =>
      rest.redirectToPrivateArea === true ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
  )
};

export default PrivateRoute;