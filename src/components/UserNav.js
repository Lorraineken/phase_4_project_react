import React from 'react';
import { Link } from 'react-router-dom';


function UserNav({currentusername}) {
  return (
    
      <div className="navbar navbar-light bg-">

        <Link className="navbar-brand" to="/">PalmGym</Link>
        
      
              <Link className="nav-link" to="/workout">Workout</Link>
            
            
              <Link className="nav-link" to="/dashboard">My Workout</Link>
            <span>{currentusername}</span>
         
          
            <Link id="logout-btn" className="btn btn-secondary" to="/logout">Logout</Link>
        
      </div>
      

  );
}

export default UserNav;
