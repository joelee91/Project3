import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import UserProfile from './components/UserProfile'
import LogInPage from './components/LogInPage'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`

`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Global />
          <NavBar />
          <Switch>
            <Route path="/login" component={LogInPage} />
            <Route path="/users/:userId" component={UserProfile} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
