
import React from 'react';
import { Route,Routes} from 'react-router-dom';
import './App.css';
// import Navbar from './componets/Navbar';
import Header from './components/Header'
import Home from './components/Home';
import Signup from './components/Signup';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route
         path ="/"
         element={<Home />}
        />
        <Route
          path='/signup'
          element={<Signup />}
        />
      </Routes>
      
    </div>
  );
}

export default App;
