import React from "react";

function Signup(){

    return (
        <div> 
           <form className="card container mt-5"   >
          <h4 className="card-header">New Palm Member</h4>
          <label htmlFor="name">Full Name: </label>
          <input type="text" name="full_name"  />
          <label htmlFor="name">User Name: </label>
          <input type="text" name="user_name"  />
          <label htmlFor="email">Email: </label>
          <input type="text" name="email"  />
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" />
          <input type="submit" value="Join Palm Gym" />
         </form>
        </div>
    )
}

export default Signup