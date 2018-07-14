import React from 'react'
import '../SignUp/Register.css'
import './login.css';

const login = (props) => {
	return (
		<div>
			<form onSubmit={props.loginHandler}>
			  <div>

			    <input className="loginGroup" onChange={props.changeHandler} type="email" name="Email"  placeholder="ENTER EMAIL" />
			  </div>
			  <div>
			    <input className="loginGroup" onChange={props.changeHandler} type="password" name="Password" placeholder="ENTER PASSWORD" />
			  </div>
			  <button type="submit" className="signIn">Sign In</button>
			</form>
		</div>
	)
}

export default login