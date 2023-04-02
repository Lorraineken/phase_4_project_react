import React from 'react';
import { Link } from 'react-router-dom';
import './UserNav.css';

function UserNav({currentusername}) {
  return (

    <div className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">PalmGym<span>.</span></Link>
      <Link className="nav-link" to="/workout">Workout</Link>
      <Link className="nav-link" to="/dashboard">My Workout</Link>
      <Link id="logout-btn" className="btn btn-secondary" to="/logout">Logout</Link>
    </div>

    
      <div className="navbar navbar-light bg-">

        <Link className="navbar-brand" to="/">PalmGym</Link>
        
      
              <Link className="nav-link" to="/workout">Workout</Link>
            
            
              <Link className="nav-link" to="/dashboard">My Workout</Link>
            <span>{currentusername}</span>
         
          
              <Link className="nav-link" to="/logout">Logout</Link>
           
        
      </div>
    

  );
}

export default UserNav;
