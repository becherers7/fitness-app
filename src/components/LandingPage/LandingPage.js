import React from 'react';


const h3Style = {
			marginTop: '8%',
			marginBottom: '3%',
			textAlign: 'center',
			fontSize: '50px',
			fontWeight: '700',
			color: '#4169E1'
	};
const paragraphStyle = {
	fontSize: '22px',
}

const LandingPage = () =>
  <div className="container">
    <h1 style={h3Style}>Landing Page</h1>
  
	<div style={paragraphStyle}>
	  <p>This app was made with React and Firebase. Eventually I'll move the stack to Node.js and MongoDB and 
	  incorporate chat functionality between users.</p>
	  <p>In this app you can create your own exercises, then create a workout off the exercises you create through inputting sets, reps, and weight.
	  You can view the workouts you create and then download them.</p>
	  <p>I'm looking ideally for a position as a software engineer or front end developer position.You can reach me at 618-977-1192, 
	  my email is becherers7@gmail.com. Thank you for checking out my project!</p>
    </div>
  </div>


export default LandingPage;