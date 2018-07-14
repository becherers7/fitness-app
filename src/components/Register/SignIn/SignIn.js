import React, {Component} from 'react';
import Login from './Login'
import firebase from '../../../firebase/firebase.js';
import './login.css';

class SignIn extends Component {
	state = {
		Email: '',
		Password: ''
	}
	changeHandler = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log(this.state);
	}
	loginHandler = event => {
		event.preventDefault();
		const email = this.state.Email;
		const password = this.state.Password;
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			  if (errorCode === 'auth/wrong-password') {
	            alert('Wrong password.');
	          } else {
	            alert(errorMessage);
	          }
	          console.log(error);
		});
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
			    <h1 style={h3Style}>Sign In</h1>
				<Login
					loginHandler={this.loginHandler}
					changeHandler={this.changeHandler} />
			</div>
		);
	}
}
	


export default SignIn;