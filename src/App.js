import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Login from './Components/Login';
import Planets from './Components/Planets';
import NoMatch from './Components/404';

import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/planets/list" component={Planets} />
        <Redirect from="/" to="/login" />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
