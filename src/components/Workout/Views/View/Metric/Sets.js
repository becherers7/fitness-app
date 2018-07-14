import React from 'react';

const setsMetric = (props) => {
	return (props.i.map((x, idx) => {
		return <div><td><div>{x.sets}</div></td></div>
	}))
}

export default setsMetric;