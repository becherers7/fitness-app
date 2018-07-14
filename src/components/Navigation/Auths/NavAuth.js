import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../constants/routes';
import SignOutButton from '../../Register/SignOut';

const NavigationAuth = (props) => {
	console.log("Navigation Auth");	
		return (
			<div>
				<ul>
				  <li><Link className="LinkStyle" to={routes.LANDING}>Landing</Link></li>
				  <li><Link className="LinkStyle" to={routes.DASHBOARD}>Dashboard</Link></li>
				  <li><Link className="LinkStyle" to={routes.VIEWALL}>View All</Link></li>
				  <li><SignOutButton logout={props.logout} /></li>
				</ul>
			</div>
		)
	}
export default NavigationAuth;