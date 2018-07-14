import React from 'react';

const repsMetric = (props) => {
	return (props.i.map((x, idx) => {
		return <div><td><div>{x.reps}</div></td></div>
	}))
	
}

export default repsMetric;