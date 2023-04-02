import React,{useState} from "react";

function Dashboard({currentusername,currentuserId,workouts}){

     const [user_id,setUserId] = useState()
     const [workout_id,setWorkoutId] = useState()
     const [duration, setDuration]  = useState()
     const [date, setDate] = useState()


    
    const displayworkouts = workouts.map((item) => {
        return(
            <ul className="row">
            <li className="col">{item.id}  {item.name}</li> 
         </ul>
        )
       
    })

    
    return(
        <div>
           <div>WELCOME</div> 
         {currentusername}
         <p>“The body achieves what the mind believes.” – Napoleon Hill </p>
         <h3>Workouts List</h3>

         <div className="d-flex container ">
              {displayworkouts}
           </div>  
         <div className="container row ">
            <form className="card container col mt-3">
            <h4 className="card-header">New Workout</h4>
            <label htmlFor="name" placeholder="Workout Number">Workout Number: </label>
            <input type="text" name="workout_number" />
            <label htmlFor="name">Duration (In minutes): </label>
            <input type="text" name="duration"  />
            <label htmlFor="date">Date (yyyymmdd): </label>
            <input type="text" name="date"  />
            <input type="submit" value="Add workout" />
            </form>
         </div>
        
         
        </div>
    )
}

export default Dashboard