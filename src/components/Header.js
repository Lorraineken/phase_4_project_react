import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {  
  return (
    <div className="header">
      

      <div className="header__nav">
        
          <div className="header__option">
          <nav>
      <ul>
        <li>
          Home
        </li>
        <li>
          About Us
        </li>
        <li>
          Program
        </li>
        <li>
          contact
        </li>
        <NavLink to='/login'><button type="button" class="btn btn-secondary">Login</button></NavLink>
      </ul>
    </nav>
            
          </div>  
      </div>
    </div>
  );
}

export default Header;