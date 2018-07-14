import React, { Component } from 'react';
import axios from 'axios';
import Exercise from '../components/Exercise/Exercise';
import AddExercise from '../components/Exercise/AddExercise';
import Hoc from '../components/HOC/Hoc';
import FirebaseSaveButton from '../components/Exercise/FireBaseSaveButton/FirebaseSaveButton';
import './App.css';
import Workout from '../components/Workout/Workout';
import firebase from '../firebase.js';
import SubmitMetrics from '../components/Workout/Metrics/SubmitMetrics';

class App extends Component {

  state = {
    newExercise: null,
    exercises: [],
    fullExercises: [],
    workouts: [],
    uploadWorkouts: [],
    metrics: []
  }
   componentDidMount () {
    const getExercises = [...this.state.exercises];
    const fullExercises = [...this.state.fullExercises];
    const exerciseRef = firebase.database().ref('exercises');
    console.log(exerciseRef); 
    exerciseRef.on('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        let exerciseData = childSnapshot.val();
        getExercises.push(exerciseData.exercise);
        fullExercises.push(exerciseData);
        console.log(getExercises);
        // const eData = JSON.stringify(getExercises);
        this.setState({exercises: getExercises});
        this.setState({fullExercises: fullExercises});
        console.log(this.state.fullExercises);
      });

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
  editMetricsHandler = (event, id) => {
    console.log(id);
    const workouts = [...this.state.workouts];
    // console.log(workouts);
    console.log(event.target.name);
    // return  "reps" + i.id === id;
    const specifyExercise = workouts.findIndex( i => {
      if ("reps" + i.id === id) {
        console.log(i.id);
        console.log(id);
        return i.id;
      }
      if ("sets" + i.id === id) {
        console.log(i.id);
        console.log(id);
        return i.id;
      }
      if ("weight" + i.id === id) {
        console.log(i.id);
        console.log(id);
        return i.id;
      }

    });
    const rightHere = {
      ...this.state.workouts[specifyExercise]
      };

   // console.log(rightHere);
   if ("reps" + rightHere.id === id); {
      rightHere.reps = event.target.value;
      
   }
   console.log(rightHere);
   if ("sets" + rightHere.id === id); {
      rightHere.sets = event.target.value;
      
   }

   console.log(rightHere);
   
   if ("weight" + rightHere.id === id); {
      rightHere.weight = event.target.value;
  
   }
   
  console.log(rightHere);
  workouts[specifyExercise] = rightHere;
  console.log(workouts[specifyExercise]); 
   
  }
  deleteExerciseHandler = (exerciseID) => {
      const exerciseRef = firebase.database().ref(`/exercises/${exerciseID}`);
      console.log(exerciseRef);
      exerciseRef.remove()
      const exercises = [...this.state.exercises];
      exercises.splice(exerciseID, 1);

      this.setState({exercises: exercises});
  }
  submitNewExerciseHandler = () => {

    const exerciseRef = firebase.database().ref('exercises');
    
    let newExercise = {
     exercise: this.state.newExercise,
     id: Math.random().toString(36).substring(7),
     sets: "", 
     reps: "", 
     weight: "" 
    }
    
    exerciseRef.push(newExercise);
    console.log(exerciseRef);
}
submitNewWorkoutHandler = () => {

    const workoutRef = firebase.database().ref('workouts');
    workoutRef.push(this.state.workouts);
    console.log(workoutRef);
}
  newExerciseHandler = (event) => {

    let newExercise = event.target.value;

    this.setState({ newExercise: newExercise });
    console.log(this.state.newExercise);
  }

  selectExerciseHandler = (i) => {
    // console.log(this.state.exercises);
    // console.log(i);
    const exerciseIndex = this.state.exercises.findIndex(e=> {
      // console.log(e);
      return e === i;
    });
    // console.log(exerciseIndex);
    // const fullExercises = [...this.state.fullExercises];
    const exercise = {
       ...this.state.fullExercises[exerciseIndex]
    };
    // console.log(exercise);
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
        <Hoc className="container">
        {this.state.workouts.map((i, idx) => {
          return <Workout
            name={i.exercise}
            key={i.id}
            id={i.id}
            clicked={this.submitWorkoutHandler}
            addMetrics={this.addMetricsHandler}
            metrics={this.state.workouts}
            edit={this.editMetricsHandler} />
        })}
        <FirebaseSaveButton clicked={()=>this.submitNewWorkoutHandler()} />
        //form for dropdown goes here.
        </Hoc>
      )
    }
    if (this.state.exercises) {
        exercise = (
        <Hoc className="container">
          {this.state.exercises.map(i => {
            return <Exercise
            clicked={()=>this.selectExerciseHandler(i)}
            exercises={i}
            deleteEx={()=>this.deleteExerciseHandler(i.id)} />
          })}
          <AddExercise
            newExercise={this.state.newExercise}
            changed={this.newExerciseHandler}/>
          <FirebaseSaveButton clicked={()=>this.submitNewExerciseHandler()} />
        </Hoc>
      )
    }
    return (
      <div className="container">
        <div className="App-header">
          <h1>Create a workout</h1>
        </div>
        <div className="container Split left">
          <h3>Create new exercise</h3>
          <h6>Click on an exercise to add to your workout</h6>
          {exercise}
        </div>
        <div className="vl"></div>
        <div className="container Split right">
        <h3>Create new workout</h3>
        <h6>Create a workout that gets stored in a database.</h6>
          {workout}
        </div>
      </div>
    );
  }
}

export default App;
