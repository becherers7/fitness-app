import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../constants/routes';


	const NavigationNonAuth = () => {
		return (
			<div>
				<ul>
				    <li><Link className="LinkStyle" to={routes.LANDING}>Landing</Link></li>
				    <li><Link className="LinkStyle" to={routes.SIGN_IN}>Sign In</Link></li>
				    <li><Link className="LinkStyle" to={routes.SIGN_UP}>Sign Up</Link></li>
				</ul>
			</div>
		)
	}

export default NavigationNonAuth;