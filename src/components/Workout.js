import React, { useState, useEffect } from 'react';
import './Myworkout.css';

import { Link } from 'react-router-dom';

import UserNav from './UserNav';


function Workout() {
  const [workoutData, setWorkoutData] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);
  const [showExerciseForm, setShowExerciseForm] = useState(false);

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
        setShowExerciseForm(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleCloseExerciseForm = () => {
    setShowExerciseForm(false);
    setSelectedWorkoutId(null);
    setExerciseData([]);
  };

  const handleAddToFavourites = (workout) => {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    if (!favourites.find((favourite) => favourite.id === workout.id)) {
      favourites.push(workout);
      localStorage.setItem('favourites', JSON.stringify(favourites));
      alert('Added to Favourites!');
    } else {
      alert('Workout already added to Favourites!');
    }
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
                <button id="exercise_btn" onClick={() => handleExerciseClick(workout.id)}>
                  My exercise
                </button>
                <button id="workout_btn" onClick={() => handleAddToFavourites(workout)}>
                  Add workout
                </button>
                {selectedWorkoutId === workout.id && showExerciseForm && (
                  <div className="exercise-form">
                    <div className="exercise-form-header">
                      <h4>My exercise</h4>
                      <button onClick={handleCloseExerciseForm}>X</button>
                    </div>
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
