// const exercise = response.data.splice(0, 4);
      const copyExercises = [...this.state.exercises];
      console.log(copyExercises);
      this.setState({exercises: copyExercises.concat({id: response.data + 1, exercise: response.data})});//inserting ALL the data into 1 section of the array
      console.log(response.data);
      console.log(this.state.exercises[1]);

      class App extends Component {

  state = {
    exercises: [
    {id: '', exercise: ''}
    ],
    newExercise: null
  }
   componentDidMount () {
    
    axios.get('https://fit-app-8af6d.firebaseio.com/exercises.json')
    .then(response => {

       // const exercise = response.data.splice(0, 4);
      const copyExercises = [...this.state.exercises];
      copyExercises.concat({id: response.data + 1, exercise: response.data});
      console.log(copyExercises);
      this.setState({exercises: copyExercises});//OK, so let's get the data, turn it into an array through Object.keys() and add an ID to each
      console.log(response.data);
      console.log(this.state.exercises);
    });
  }
  newExerciseHandler = (event) => {

    let newExercise = event.target.value;

    this.setState({ newExercise: newExercise });
    console.log(this.state.newExercise);
  }

  selectExerciseHandler = (event) => {
    console.log(event.target.value);//value doesn't work, because value must be a number!
  }


  submitNewExerciseHandler = () => {
    let newExercise = {
     exercise: this.state.newExercise
    }
    axios.post('https://fit-app-8af6d.firebaseio.com/exercises.json', newExercise)
    .then(response => {
      console.log(response);
      document.location.reload();
    }).catch(error => console.log(error));
}



  render() {
    let exercise = null;
    if (this.state.exercises) {
        exercise = (
        <Hoc className="container">
          <Exercise
            clicked={this.selectExerciseHandler}
            exercises={this.state.exercises} />
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
          <Workout />
          <button>Add workout</button>
        </div>
      </div>
    );
  }
}

export default App;
