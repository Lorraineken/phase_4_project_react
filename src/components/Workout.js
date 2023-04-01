import React, { useState, useEffect } from 'react';
import './Myworkout.css';

function Workout() {
  const [workoutData, setWorkoutData] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [workoutId, setWorkoutId] = useState ()
  

  useEffect(() => {
    fetch('https://palm-gym-api.onrender.com/workouts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch workout data');
        }
        return response.json();
      })
      .then((data) => {
        setWorkoutData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleExerciseClick = (workoutId) => {
    fetch(`https://palm-gym-api.onrender.com/workouts/${workoutId}`)
      .then((response)=>response.json())

      
      .then((data)=>{
        setExerciseData(data.exercises)
        
      
      })
     
  };


  const displayData = exerciseData.map((exercise)=>
  
    <ul>
      <li>{exercise.name}</li>
    </ul>
  
  )

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h4>Workouts</h4>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {workoutData.map((workout) => (
          <div id="card" className="col-3, p-1, mb-2" key={workout.id}>
            <div id="card-bg" className="card h-100 w-20">
              <div className="card-body">
                <h4 className="card-title">Name: {workout.name}</h4>
                <p className="card-text">Instructor: {workout.instructor}</p>
                <p className="card-text">Category: {workout.category}</p>
                <button onClick={() => 
                {setWorkoutId(workout.id)
                 handleExerciseClick(workoutId)
                }
               }>My exercise</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
        <div>
          <h4>My exercise</h4>
         {displayData}
        </div>
      
    </div>
  );
}

export default Workout;
