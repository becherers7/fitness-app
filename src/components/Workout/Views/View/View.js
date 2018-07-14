import React from 'react';

const exercise = (props) => {
	console.log(props.exercises, props.sets, props.reps, props.weight);
	return (
		<div>
			<p>{props.exercises} {props.sets} + {props.reps} with {props.weight} + lbs</p>
		</div>
	)
}

export default exercise;