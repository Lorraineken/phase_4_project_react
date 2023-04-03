import React,{useState} from "react";
import axios from 'axios'
import './Dashboard.css'
function Dashboard({currentusername,currentuserId,workouts}){

     const [workout_id,setWorkoutId] = useState()
     const [duration, setDuration]  = useState()
     const [date, setDate] = useState()

     let w_id =parseInt(workout_id)
     let durationInt=parseInt(duration)
     let dateInt =parseInt(date)

     const formdata ={
        "user_id":currentuserId,
        "workout_id":w_id,
        "duration":durationInt,
        "date":dateInt
     }
      
    const displayworkouts = workouts.map((item) => {
        return(
            <div id="list">
      <ul className="list-group list-group-horizontal" key={`${item.name}-${item.id} -${item.index}`}>
        <li className="list-group-item">{item.id} {item.name}</li>
      </ul>
    </div>
        
        )
       
    })

    function handleSubmit(e){
        e.preventDefault()
        console.log(formdata)
       axios.get("https://palm-gym-api.onrender.com/exercise_logs",{
        method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
            body:JSON.stringify(formdata)
        })
        .then((response) => {
            if (response.ok){
                response.json().then((data) => {
                    alert("Workout Added Successfully")
                    console.log(data)

                });
            }else{
                response.json().then((errorMessage) => 
                {
                    console.log(errorMessage.errors)
                    alert('Invalid input..Try again')
                    
                } )
            }
       })

    }

    
    return(
        <div id="gen_workout">
           <div><h2 id="h2">WELCOME</h2></div> 
         {currentusername}
         <p>“The body achieves what the mind believes.” – Napoleon Hill </p>
         <h3>Workouts List</h3>

         <div id="workout-form" className="d-flex container ">
              {displayworkouts}
           </div>  
         <div id="work_out" className="container row ">
            <form className="card container col mt-3" onSubmit={(e) => handleSubmit(e)}>
            <h4 className="card-header">New Workout</h4>
            <label htmlFor="name" placeholder="Workout Number">Workout Number: </label>
            <input id="inputs" type="number" name="workout_number" onChange={(e) => setWorkoutId(e.target.value)}/>
            <label htmlFor="name">Duration (In minutes): </label>
            <input id="inputs" type="number" name="duration" onChange={(e)=> setDuration(e.target.value)} />
            <label htmlFor="date">Date (yyyymmdd): </label>
            <input id="inputs" type="text" name="date" onChange={(e) => setDate(e.target.value)} />
            <input id="workout-btn" type="submit" value="Add workout" />
            </form>
            <img id="signup-img"
        className="login__logo"
        src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
         </div>
         
         
        </div>
    )
}

export default Dashboard