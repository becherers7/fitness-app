import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from '../components/Home'
import SignIn from '../components/Register/SignIn/SignIn'
import SignUp from '../components/Register/SignUp/SignUp'
import SignOut from '../components/Register/SignOut'
import Dashboard from '../components/Dashboard/Dashboard'
import ViewAll from '../components/Workout/Views/ViewAll'
import './routes.css';

const LinkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '20px',
  fontWeight: '700 !important',
  marginLeft: '9px',
  a:hover: {
    color: "red"
  }
  // lineHeight: '1em',
  // padding: '8px 7px 9px',
  // borderRadius: '5px',
  // opacity: '.8'
}


const BasicExample = () => (
  <Router>
    <div>
      <nav>
        <ul className="linking">
          <li><Link style={LinkStyle} to="/">SignUp</Link></li>
          <li><Link style={LinkStyle} to="/signin">Sign In</Link></li>
        </ul>
      </nav>

      <hr/>

      <Route exact path="/" component={SignUp}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/signout" component={SignOut}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/viewall" component={ViewAll}/>
    </div>
  </Router>
)
export default BasicExample