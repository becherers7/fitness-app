import React from 'react';
import './AddExercise.css';

const addExercise = (props) => {
	return (
		<div>
			<input className="AddExercise" placeholder="Add a new exercise!" type="text" onChange={props.changed} value={props.newExercise} />
		</div>
	);
}

export default addExercise;