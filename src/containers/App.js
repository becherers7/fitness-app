import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Navigation from '../components/Navigation/Navigation';
import LandingPage from '../components/LandingPage/LandingPage';
import SignUp from '../components/Register/SignUp/SignUp';
import SignIn from '../components/Register/SignIn/SignIn';
import PasswordForgetPage from '../components/Register/PasswordForget';
import Dashboard from '../components/Dashboard/Dashboard';
import ViewAll from '../components/Workout/Views/ViewAll';
import * as routes from '../constants/routes';
import firebase from '../firebase/firebase';


class App extends Component {

    state = {
      authUser: null,
    };
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged(authUser => {
      authUser 
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null })); 
    });
  }
  //In Router, call Navigation component, pass in the state of user as the parameter/props.
   logoutHandler = () => {
    // console.log("test");
    firebase.auth().signOut()
      .then(() => {
        // console.log("Hello");
        this.setState({
          authUser: null
        });
        console.log(this.state.authUser);
      });
    }

  render() {
    
    return (
      <Router>
        <div>
          <Navigation 
            authUser={this.state.authUser}
            logout={this.logoutHandler} /> 

          <hr/>
    {this.state.authUser ?
      <Switch>
        <Route
          exact path={routes.LANDING}
          component={() => <LandingPage />}
        />
        <Route
          exact path={routes.DASHBOARD}
          component={() => <Dashboard />}
        />
        <Route
          exact path={routes.VIEWALL}
          component={() => <ViewAll />}
        />
      </Switch>
      : <Switch>
          <Route
            exact path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route
            exact path={routes.SIGN_UP}
            component={() => <SignUp />}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <SignIn />} 
          />
          <Route
            exact path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />
        </Switch>
    }
    </div>
  </Router>
  )
  }
}

export default App;