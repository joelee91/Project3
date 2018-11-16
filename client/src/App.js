import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Posts from './components/Posts'
import UserProfile from './components/UserProfile'
import LogInPage from './components/LogInPage'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'

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
          <Route exact path="/login" component={LogInPage}/>
          <Route exact path="/homePage" component={HomePage}/>
          <Route exact path="/users/:userId" component={}
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
