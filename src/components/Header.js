import React from "react";
import "./Header.css";


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
        <button type="button" class="btn btn-secondary">Sign-in</button>
      </ul>
    </nav>
            
          </div>  
      </div>
    </div>
  );
}

export default Header;