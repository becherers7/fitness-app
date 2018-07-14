import React from 'react';

const metrics = (props) => {
	return (
		<div>
			<input onChange={( event )=> props.edit(props.key)} type="text" name={props.metric} placeholder={props.label} value={props.metric} />
		</div>
	);
}

export default metrics;