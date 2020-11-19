import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import login from '../templates/login/login';
import cadastro from '../templates/login/cadastro';
import home from '../templates/home/home';

import logout from '../templates/login/logout';
// import cadastro from '../templates/cadastro/cadastro';


class Routes extends Component {
  render() {
    return (
      // EXAMPLE
      // <Router>
      //   <Route exact path="/">
      //     <Redirect to="/login" />
      //   </Route>

      //   <Route exact path="/cadastro" component={cadastro} />
      //   <Route exact path="/login" component={login} />

      // </Router>
      <Router>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route exact path="/login" component={login} />
        <Route exact path="/logout" component={logout} />
        <Route exact path="/cadastro" component={cadastro} />
        <Route exact path="/home" component={home} />

      </Router>
    );
  }
}

export default Routes;
