import React from 'react';
import './FirebaseSaveButton.css';


const firebaseSaveWorkout = (props) => {
	return (
		<div>
		<button className="FireButton" onClick={props.clicked}>Create Workout</button>
		</div>
	);
}

export default firebaseSaveWorkout;