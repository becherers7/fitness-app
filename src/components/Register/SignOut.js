import React from 'react';
import firebase from '../../firebase/firebase';

const SignOutButton = (props) => {
	return (
		<button style={{background: 'none', border: 'none', marginLeft: '8px'}} onClick={props.logout}>
		    Sign Out
		</button>
	)
}

export default SignOutButton;