import React, { Component } from 'react';
import Exercise from '../Exercise/Exercise';
import AddExercise from '../Exercise/AddExercise';
import Hoc from '../HOC/Hoc';
import FirebaseSaveExercise from '../Exercise/FireBaseSaveButton/FirebaseSaveButton';
import FirebaseSaveWorkout from '../Exercise/FireBaseSaveButton/FirebaseSaveButtonWorkout';
import './Dashboard.css';
import Workout from '../Workout/Workout';
import firebase from '../../firebase/firebase.js';

class Dashboard extends Component {

  state = {
    userEmail: null,
    userId: null,
    newExercise: null,
    exercises: [],
    fullExercises: [],
    workouts: [],
    uploadWorkouts: [],
    metrics: []
  }
   componentDidMount () {
    firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ userEmail: user.email });
      this.setState({ userId: user.uid });
      console.log(this.state.userEmail);
      console.log(this.state.userId);
      const getExercises = [];
      const fullExercises = [];
      
      const exerciseRef = firebase.database().ref(this.state.userId + '/exercises');
      const holdExercises = [];
      
      exerciseRef.on("child_added", snapshot => {
          const newExercise = snapshot.val();
          console.log(newExercise);
          getExercises.push(newExercise.exercise);
          fullExercises.push(newExercise);
           this.setState({exercises: getExercises});
          this.setState({fullExercises: fullExercises});
          console.log(this.state.fullExercises);
        })
    } 
  });
  }
  signOutHandler = () => {
    firebase.auth().signOut().
      then(() => {
      // Sign-out successful.
        this.setState({userEmail: null});
        this.setState({userId: null});
    }).catch(function(error) {
      // An error happened.
    });
  }
  addMetricsHandler = (event, id) => {
    const exerciseIndex = this.state.exercises.findIndex(e=> {
      return e.id === id;
    });
    const workout = {
      ...this.state.exercises[exerciseIndex]
    }
    const workouts = [...this.state.workouts];
    workouts.push(workout);
    this.setState({workouts: workouts});
    console.log(this.state.workouts);
  }
  editMetricsHandler = (event, id, type) => {
    console.log(id);
    console.log(event.target);
    const workouts = this.state.workouts;
    
    console.log(event.target.name);
    const specifyExercise = workouts.find(i => i.id === id);//returns the value of the first element in an array that pass a test
    
    console.log(specifyExercise);
    const modifiedExercise = {...specifyExercise, [type]: event.target.value}//: is a key value inside the object
    //Make a copy of the array, where the element in the array is = to the parameter type and that value of the element is the event.target.value
    console.log(modifiedExercise);
    this.setState({ workouts: workouts.map(workout => workout.id !== id ? workout : modifiedExercise) });
    //workmodified exercise rreplcate if workout.id === id, the entire modified Exercise gets modified.
    console.log(this.state.workouts);
   
  }
  deleteExerciseHandler = (index) => {
      const exercise = this.state.fullExercises[index];
      console.log(exercise);

      const exerciseRef = firebase.database().ref(this.state.userId + '/exercises');
      exerciseRef.once('value', snapshot => {
        console.log(exerciseRef.child(snapshot.key));
        snapshot.forEach(childSnapshot => {
          let newKey = childSnapshot.key;
          console.log(newKey);
          const snap = childSnapshot.child("exercise").val();
          if (exercise.exercise === snap) {
            console.log(snap);
            for (let snap in newKey) {
              console.log(newKey);
              exerciseRef.child(newKey).remove();
            }
          }
          })
        })
      const exercises = [...this.state.exercises];
      exercises.splice(index, 1);
      this.setState({exercises: exercises});
      console.log(exerciseRef);
      console.log(this.state.exercises)
  }
  submitNewExerciseHandler = () => {
    const userRefExercise = firebase.database().ref(this.state.userId + '/exercises');
    
    let newExercise = {
     exercise: this.state.newExercise,
     id: Math.random().toString(36).substring(7),
     sets: "", 
     reps: "", 
     weight: "" 
    }
    
    userRefExercise.push(newExercise);
    // console.log(exerciseRef);
  }
  submitNewWorkoutHandler = () => {
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();

      const time = month + "/" + day + "/" + year;
      const workoutRef = firebase.database().ref(this.state.userId + '/workouts');
      workoutRef.push(this.state.workouts.concat({time: time}));
      console.log(workoutRef);
  }
  newExerciseHandler = (event) => {

    let newExercise = event.target.value;

    this.setState({ newExercise: newExercise });
    console.log(this.state.newExercise);
  }

  selectExerciseHandler = (i, index) => {
    // console.log(i);
    const exercise = this.state.fullExercises[index];
    
    const previous = [...this.state.workouts];
    previous.push(exercise);
    // console.log(previous);
    this.setState({workouts: previous});
    // console.log(previous);
  }


  render() {
    let exercise = null;
    let workout = null;
    if (this.state.workouts) {
      workout = (
        <Hoc>
        {this.state.workouts.map((i, idx) => {
          return <Workout
            name={i.exercise}
            key={i.idx}
            id={i.id}
            clicked={this.submitWorkoutHandler}
            addMetrics={this.addMetricsHandler}
            metrics={this.state.workouts}
            edit={this.editMetricsHandler} />
        })}
        <FirebaseSaveWorkout clicked={()=>this.submitNewWorkoutHandler()} />
        </Hoc>
      )
    }
    if (this.state.exercises) {
        exercise = (
        <div className="container exerciseColor">
          {this.state.exercises.map((i, index) => {
            return <Exercise
            clicked={()=>this.selectExerciseHandler(i, index)}
            exercises={i}
            deleteEx={()=>this.deleteExerciseHandler(index)} />
          })}
        </div>
      )
    }
    return (
      <div className="container">
        {this.state.userId ? 
          <button onClick={this.signOutHandler}>Sign Out</button>
          :
          <button>SignIn</button>
        }

        <div className="container Split left">
          <h1 className="tagHeader">Tags</h1>
          {exercise}
          <div>
          <AddExercise
            newExercise={this.state.newExercise}
            changed={this.newExerciseHandler}/>
          <FirebaseSaveExercise clicked={()=>this.submitNewExerciseHandler()} />
          </div>
        </div>
        <div className="vl"></div>
        <div className="container Split right">
        <h1 className="tagHeader">Workout</h1>
        <p>Click on the tags you create on the left to start building a workout below.</p>
        <p>Hit the save button and navigate to view all to see your workouts!</p>
        <div className="rowTitle row">
          <div className="colTitle col-md-3">
            <p>Name</p>
          </div>
          <div className="colTitle metricTitle col-md-2">
            <p>Sets</p>
          </div>
          <div className="colTitle col-md-2">
            <p>Reps</p>
          </div>
          <div className="colTitle col-md-2">
            <p>Weight</p>
          </div>
        </div>
          {workout}
        </div>
      </div>
    );
  }
}

export default Dashboard;
