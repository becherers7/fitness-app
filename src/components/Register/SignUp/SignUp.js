import React, { Component } from 'react';
import Register from './Register'
import firebase from '../../../firebase/firebase.js';
import * as routes from '../../../constants/routes';
import { Route,} from 'react-router-dom';
import SignIn from '../SignIn/SignIn';

class SignUp extends Component {
	state = {
		Email: "",
		Password: "",
		ConfirmPassword: ""
	}

	changeHandler = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log(this.state);
	}

	validateHandler = event => {
		event.preventDefault();
		if (this.state.Password === this.state.ConfirmPassword) {
			const email = this.state.Email;
			const password = this.state.Password;
			firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				if (errorCode === 'auth/weak-password') {
		          alert('The password is too weak.');
		        } else {
		          alert(errorMessage);
		        }
		        console.log(error);
			});
		    <Route
            exact path={routes.SIGN_IN}
            component={() => <SignIn />} 
          />
		} 
	}

	render () {
		
		const h3Style = {
			marginTop: '8%',
			marginBottom: '3%',
			textAlign: 'center',
			fontSize: '50px',
			fontWeight: '700',
			color: '#4169E1'
		};
	
	return (
	  	<div className="container">
		    <h1 style={h3Style}>Sign Up</h1>
		    <Register 
		    	validateHandler={this.validateHandler}
		    	changeHandler={this.changeHandler} />
	  	</div>
	  )
	}
}


export default SignUp;