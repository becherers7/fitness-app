import React from 'react';
import * as jsPDF from 'jspdf'
let pdf = new jsPDF();

const spacing = {
			marginBottom: '5%'
		}

const exerciseMetric = (props) => {
	console.log(props.index);
	return (props.i.map((x, idx) => {
		return <a style={spacing} onClick={()=>props.createPDF(props.index)}>{x.time}</a>
    }))
	
}

export default exerciseMetric;