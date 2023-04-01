import React, { useState, useEffect } from 'react';
import './Myworkout.css';
import UserNav from './UserNav';

function Workout() {
  const [workoutData, setWorkoutData] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);

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
      .then((response) => response.json())
      .then((data) => {
        setExerciseData(data.exercises);
        setSelectedWorkoutId(workoutId);
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
      <UserNav/>
      <h4>Workouts</h4>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {workoutData.map((workout) => (
          <div id="card" className="col-3, p-1, mb-2" key={workout.id}>
            <div id="card-bg" className="card h-100 w-20">
              <div className="card-body">
                <h4 className="card-title">Name: {workout.name}</h4>
                <p className="card-text">Instructor: {workout.instructor}</p>
                <p className="card-text">Category: {workout.category}</p>
                <button
                  onClick={() => handleExerciseClick(workout.id)}
                >
                  My exercise
                </button>
                {selectedWorkoutId === workout.id && (
                  <div>
                    <h4>My exercise</h4>
                    {exerciseData.map((exercise) => (
                      <ul key={exercise.id}>
                       <strong><li>{exercise.name}</li></strong> 
                        <li>{exercise.description}</li>
                      </ul>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workout;
