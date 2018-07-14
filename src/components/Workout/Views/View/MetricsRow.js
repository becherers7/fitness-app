import React from 'react'
import Exercise from './Metric/Exercise'
import Sets from './Metric/Sets'
import Reps from './Metric/Reps'
import Weight from './Metric/Weight'
import PdfButton from '../pdfButton'
import * as jsPDF from 'jspdf'
let pdf = new jsPDF();


function printPDF () {
	//createElement of table and row.
	// maybe
	var exercise = document.getElementsByClassName('exercise')[1].innerText;
	// exercise.innerHTML = "exercise";
	// var sets = document.getElementById('sets').value;
	// var reps = document.getElementById('reps').value;
	// var weight = document.getElementById('weight').value;
	// array.push(exercise)
	console.log(exercise);
	// var hold = exercise; //+ " " + sets + " " + reps + " " + weight;
	pdf.text(10, 10, exercise);

	pdf.save();
}

const metricsRow = (props) => {
	let time = props.time;
	return (props.i.map((x, idx) => {
		<div>
		<Exercise exercise={x.exercise}/>
		<Sets sets={x.sets}/>
		<Reps reps={x.reps}/>
		<Weight weight={x.weight}/>
		</div>
	}))
}

export default metricsRow;