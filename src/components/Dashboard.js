import React from "react";

function Dashboard({currentusername,currentuserId}){
    
    

    return(
        <div>
           <div>WELCOME</div> 
         {currentusername}
         <p>“The body achieves what the mind believes.” – Napoleon Hill </p>
         <div className="container row">
            <div>

            </div>
            <form className="card container col mt-3">
            <h4 className="card-header">New Workout</h4>
            <label htmlFor="name" placeholder="Workout Name">Workout Name: </label>
            <input type="text" name="full_name" />
            <label htmlFor="name">Duration: </label>
            <input type="text" name="user_name"  />
            <label htmlFor="date">Date: </label>
            <input type="date-min" name="date"  />
            <input type="submit" value="Add workout" />
            </form>
         </div>
         
        </div>
    )
}

export default Dashboard