import React from 'react';
import './FirebaseSaveButton.css';


const firebaseSaveButton = (props) => {
	return (
		<div>
		<button className="FireButton" onClick={props.clicked}>Create Exercise</button>
		</div>
	);
}

export default firebaseSaveButton;