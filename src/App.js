import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import PrivateRoute from './utils/PrivateRoute';

import NotFound from './components/NotFound';
import Welcome from './components/Welcome';
import PlaidLink from './containers/PlaidLink';
import Register from './containers/Register';
import Login from './containers/Login'

const store = configureStore();

const App = () => { // eslint-disable-line
  return (
    <Provider store={store}>
        <Router>
            <div className="App">
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/user/login" component={Login} />
                <PrivateRoute  exact path="/link-account" component={PlaidLink } />
                <Route path="/register" component={ Register }/>
                <Route component={NotFound} />
              </Switch>
            </div>
        </Router>
      </Provider>
  );
};

export default App;


// <Route  path="/register" render={(props) => (
//                   <Register {...props} redirect={false} />
//                   )} />