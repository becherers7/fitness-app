import React from 'react';

// <button className="glyphicon glyphicon-remove" onClick={props.deleteEx} />
// 			<button className="glyphicon glyphicon-pencil" />
const exercise = (props) => {
	console.log(props.exercises, props.sets, props.reps, props.weight);
	return (
		<div>
			<p>{props.exercises} {props.sets} + {props.reps} with {props.weight} + lbs</p>
		</div>
	)
}

export default exercise;