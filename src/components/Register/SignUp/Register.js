import React from 'react'
import './Register.css'

const register = (props) => {
	return (
		<div className="top">
			<form onSubmit={props.validateHandler}>
			  <div className="formGroup">
			    <input onChange={props.changeHandler} type="email" className="RegisterInput" name="Email" placeholder="ENTER EMAIL" />
			    
			  </div>
			  <div>
			    <input onChange={props.changeHandler} type="password" className="RegisterInput" name="Password" placeholder="ENTER PASSWORD" />
			  </div>
			  <div>
			    <input onChange={props.changeHandler} type="password" className="RegisterInput" name="ConfirmPassword" placeholder="CONFIRM PASSWORD" />
			  </div>
			  <button type="submit" className="signUp">Sign Up</button>
			</form>
		</div>
	)
}

export default register