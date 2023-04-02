
import React, {useState,useEffect} from 'react';
import { Route,Routes} from 'react-router-dom';
import './App.css';
// import Navbar from './componets/Navbar';
// import Header from './components/Header'
import Home from './components/Home';
import Signup from './components/Signup';
import LogIn from './components/LogIn';
import About from './components/About'
import Workout from './components/Workout';
import Dashboard from './components/Dashboard';
import PasswordChange from './components/PasswordChange';

import LogOut from './components/LogOut';

function App() {

    
     const [currentusername, setCurrentname] = useState('')
     const [currentuserId, setUserId] = useState('')
     const [workouts,setWorkouts] = useState([])
     
     useEffect(() => {
      fetch('https://palm-gym-api.onrender.com/workouts')
        .then((response) => response.json())
        .then((data) => setWorkouts(data))
    }, []);
       
      
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
      <Route
         path ="/"
         element={<Home />}
        />
        <Route
          path='/signup'
          element={<Signup />}
        />
            <Route
        path ='/login'
        element={<LogIn setCurrentname={setCurrentname} setUserId={setUserId} />}
        />
        <Route path="/about"  element={<About />}/>
        <Route path="/workout"  element={<Workout currentusername={currentusername} />}/>

        <Route path="/pwchange" element={<PasswordChange />}/>
        <Route path="/logout" element ={<LogOut />}/>
        <Route path="/Dashboard" element ={<Dashboard currentusername={currentusername} currentuserId={currentuserId} workouts={workouts}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
