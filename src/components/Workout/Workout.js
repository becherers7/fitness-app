import React from 'react';
import './Workout.css';

const metrics = [
	{ label: "Sets", type: "sets"},
	{ label: "Reps", type: "reps"},
	{ label: "Weight", type: "weight"}
];

// &otimes; &CircleTimes;
// &#x02297;
// &#8855;
// &cross;
// &#x02717;
// &#10007;

// &Cross;
// &#x02A2F;
// &#10799;
const workout = (props) => {
	console.log(props.name);
	console.log(props.id);
	console.log(props.metrics);
	 let workoutID = Math.random().toString(36).substring(7);
	return (
		<div className="inputGroup">
			
			<input type="text" className="exerciseMetric" placeholder="SELECT EXERCISE" value={props.name} />

			{metrics.map(ex=> {
				if (ex.type === "sets") {
					return <input className="numberMetric sets" onChange={( event )=> props.edit(event, props.id, ex.type)} key={ex.label + props.id} type="number" name={ex.type} placeholder={ex.label} value={props.metrics.sets} />
				}
				if (ex.type === "reps") {
						return <input className="numberMetric reps" onChange={( event )=> props.edit(event, props.id, ex.type)} key={ex.label + props.id} type="number" name={ex.type} placeholder={ex.label} value={props.metrics.reps} />
				}
				if (ex.type === "weight") {
						return <input className="numberMetric weight" onChange={( event )=> props.edit(event, props.id, ex.type)} key={ex.label + props.id} type="number" name={ex.type} placeholder="lbs" value={props.metrics.weight} />
				}
			})}
		</div>
	);
}

export default workout;