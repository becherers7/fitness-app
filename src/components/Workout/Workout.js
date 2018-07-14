import React from 'react';
import './Workout.css';

const metrics = [
	{ label: "Sets", type: "sets"},
	{ label: "Reps", type: "reps"},
	{ label: "Weight", type: "weight"}
];

const workout = (props) => {

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