import React from 'react';

const exerciseMetric = (props) => {
	return (props.i.map((x, idx) => {
		return <div><td><div>{x.exercise}</div></td></div>
    }))
	
}

export default exerciseMetric;