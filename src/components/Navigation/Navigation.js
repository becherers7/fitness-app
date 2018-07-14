import React from 'react';
import './Navigation.css';
import NavigationNonAuth from './Auths/NavNonAuth';
import NavAuth from './Auths/NavAuth';
//Navigation renders the appropriate routes based on having a user.
//NaviagtionAuth, contains the links for routes of authenticated user.
//NavigationNonAuth, links for routes if you're not signed in.

// const test = () => {
// 	console.log("trying");
// }

	const Navigation = (props) => {

	    return (
	    	<div className="NavBar">
			    { props.authUser
			        ? <NavAuth logout={props.logout} />
			        : <NavigationNonAuth />
			    }
			</div>
		) 
	}

	
  
export default Navigation;