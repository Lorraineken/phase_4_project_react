
import React from 'react';
import { Route,Routes} from 'react-router-dom';
import './App.css';
// import Navbar from './componets/Navbar';
import Header from './components/Header'
import Home from './components/Home';
import Signup from './components/Signup';
import LogIn from './components/LogIn';
import About from './components/About'
import Workout from './components/Workout';
function App() {



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
        element={<LogIn />}
        />
        <Route path="/about"  element={<About />}/>
        <Route path="/workout"  element={<Workout />}/>
      </Routes>
      
    </div>
  );
}

export default App;
