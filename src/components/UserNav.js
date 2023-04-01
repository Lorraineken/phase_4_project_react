import React from 'react';
import { Link } from 'react-router-dom';


function UserNav() {
  return (
    
      <div className="navbar navbar-light">

        <Link className="navbar-brand" to="/">PalmGym</Link>
        
      
              <Link className="nav-link" to="/workout">Workout</Link>
            
            
              <Link className="nav-link" to="/myworkout">My Workout</Link>
            
         
          
              <Link className="nav-link" to="/logout">Logout</Link>
           
        
      </div>
    
  );
}

export default UserNav;
