import React from 'react';

const weightMetric = (props) => {
	return (props.i.map((x, idx) => {
		return <div><td><div>{x.weight}</div></td></div>
	}))
}

export default weightMetric;