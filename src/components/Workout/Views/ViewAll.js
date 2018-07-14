import React, { Component } from 'react';	
import View from './View/View';
import firebase from '../../../firebase/firebase.js';
import PdfButton from './pdfButton'
import Exercise from './View/Metric/Exercise';
import Sets from './View/Metric/Sets';
import Reps from './View/Metric/Reps';
import Weight from './View/Metric/Weight';
import TimeStamp from './View/Metric/TimeStamp';
import * as jsPDF from 'jspdf'
import 'jspdf-autotable';

class SignUp extends Component {
	state = {
			userEmail: null,
	    	userId: null,
	    	uploadWorkouts: []
	}
	componentDidMount () {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
	      this.setState({ userEmail: user.email });
	      this.setState({ userId: user.uid });
			const uploadWorkouts = [...this.state.uploadWorkouts];
		    const workoutRef = firebase.database().ref(this.state.userId + '/workouts');
		    	workoutRef.on('value', snapshot => {
		      		snapshot.forEach(childSnapshot => {
		        		let workoutData = childSnapshot.val();
		        		uploadWorkouts.push(workoutData);
		        		console.log(workoutData);
				        this.setState({uploadWorkouts: uploadWorkouts});
				        console.log(this.state.uploadWorkouts);
				    });
		    	})
			}
		})
	}
	createPDFHandler = (id) => {
		var doc = new jsPDF('p', 'pt');
		var elem = document.getElementById(id);
		var res = doc.autoTableHtmlToJson(elem);
		doc.autoTable(res.columns, res.data);
		doc.save("table.pdf");
	}

	renderPDFButton = () => {
		{this.state.uploadWorkouts.map(i => {
      		const timeArray = [];
			console.log(i.time);
			
      	})}
	}


	render () {
		
		const h3Style = {
		textAlign: 'center',
		marginTop: '5%',
		fontWeight: 'bold'
		};
		const tHeaderStyle = {
			background: '#4169E1',
			color: 'white',
			fontSize: '22px'
		}

	let work = null;
	if (this.state.uploadWorkouts) {
    	work = (
    	<div>
    	{this.state.uploadWorkouts.map((i, idx) => {
    		return (
    			<div>
	    		<table id={idx} className="table table-striped">
			    			<colgroup>
			    				<col width="20%"></col>
				                <col width="20%"></col>
				                <col width="20%"></col>
				                <col width="20%"></col>
			    			</colgroup>
			    			<thead>         
			                <tr style={tHeaderStyle}>
			                    <th>Exercise</th>
			                    <th>Sets</th>
			                    <th>Reps</th>
			                    <th>Weight</th>
			                </tr>
			            </thead>
			            <tbody>
			                <tr>
			                    <td><Exercise i={i} /></td>
			                	<td><Sets i={i} /></td>			                
			                	<td><Reps i={i} /></td>
			                	<td><Weight i={i} /></td>
			                </tr>
		                </tbody>
			    </table>
			    <TimeStamp
			    	createPDF={this.createPDFHandler}
			    	i={i}
			    	index={idx} />
			    </div>
			    )
      	})}
      	</div>
    	)
    }
	
	return (
	  	<div className="container">
		    <h2 style={h3Style}>Saved Workouts</h2>
		    <h4>Download a pdf of the workout by clicking on its date.</h4>
		    {work}
	  	</div>
	  )
	}
}


export default SignUp;