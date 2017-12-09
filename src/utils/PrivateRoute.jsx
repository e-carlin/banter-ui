import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isLoggedIn } from '../api/localStorage';

const PrivateRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
      isLoggedIn()
        ? React.createElement(component, props)
        : <Redirect to={{ pathname: '/login' }} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
