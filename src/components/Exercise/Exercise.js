import React from 'react';
import './Exercise.css'

const exercise = (props) => {

	return (
		<div className="list">
				<div className="bullets">
				<span className="bullet-content" onClick={props.clicked} key={props.id}>{props.exercises}</span>
				<span onClick={props.deleteEx} className="glyphicon glyphicon-remove"></span>

				</div>
		</div>
	)
}

export default exercise;