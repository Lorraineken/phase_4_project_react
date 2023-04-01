import React, { useState, useEffect } from 'react';
import './Myworkout.css';

function MyWorkout() {
  const [workoutData, setWorkoutData] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleExerciseClick = (id) => {
    fetch(`https://palm-gym-api.onrender.com/workouts/${id}/exercises`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch exercise data');
        }
        return response.json();
      })
      .then((data) => {
        setExerciseData(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

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
                <button onClick={() => handleExerciseClick(workout.id)}>My exercise</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {exerciseData.length > 0 && (
        <div>
          <h4>My exercise</h4>
          <ul>
            {exerciseData.map((exercise) => (
              <li key={exercise.id}>
                <p>Name: {exercise.name}</p>
                <p>Description: {exercise.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MyWorkout;
