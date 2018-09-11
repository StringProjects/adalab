import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log('rest',rest);
  return (
  <Route
    {...rest}
    render={props =>
      rest.redirectToPrivateArea ? (
        <Component {...props} />
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
)};

export default PrivateRoute;