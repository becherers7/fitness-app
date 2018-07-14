import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Landing from './Landing';
import SignUp from './components/Register/SignUp/SignUp';
import SignIn from './components/Register/SignIn/SignIn';
import PasswordForgetPage from './PasswordForget';
import Dashboard from './Components/Dashboard';
import ViewAll from './Components/ViewAll';
import * as routes from '../constants/routes';
import { firebase } from '../firebase';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null, //if the user is null, no login.
    };
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser //onAuthStateChanged: Adds an observer for changes to the user's sign-in state.
        ? this.setState(() => ({ authUser })) //if user is signed in, set the state to that user.
        : this.setState(() => ({ authUser: null })); //if no user, set state back to null.
    });
  }
  render() {
    //In Router, call Navigation component, pass in the state of user as the parameter/props.
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} /> 

          <hr/>
//Render the components for the specific route paths.
      <Route
        exact path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact path={routes.SIGN_UP}
        component={() => <SignUpPage />}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={() => <SignInPage />}
      />
      <Route
        exact path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
      <Route
        exact path={routes.DASHBOARD}
        component={() => <Dashboard />}
      />
      <Route
        exact path={routes.VIEWALL}
        component={() => <ViewAll />}
      />
    </div>
  </Router>
  )
  }
}

export default App;