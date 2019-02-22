import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Switch, Route } from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Login from './containers/Logincontainer/Login';
import Home from './containers/Homecontainer/Home';
import LogOff from './containers/Logoffcontainer/LogOff';
const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history= {history}>
      <Switch>
      <Route exact path='/' component = {Login} />
      <Route exact path='/login' component = {Login} />
      <Route path='/homepage' component = {Home} />
      <Route path='/logoff' component = {LogOff} />
      </Switch>
     </Router>
    );
  }
}

export default App;