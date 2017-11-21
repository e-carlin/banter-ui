import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import Welcome from './components/Welcome';
import PlaidLink from './containers/PlaidLink';

const App = () => { // eslint-disable-line
  return (
      <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exaxt path="/link-account" component={PlaidLink } />
              <Route component={NotFound} />
            </Switch>
          </div>
      </Router>
  );
};

export default App;