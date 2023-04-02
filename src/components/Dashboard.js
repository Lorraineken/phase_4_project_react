import React,{useState} from "react";

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
            <ul key={`${item.name}-${item.id} -${item.index}`} className="row">
            <li className="col">{item.id}  {item.name}</li> 
         </ul>
        )
       
    })

    function handleSubmit(e){
        e.preventDefault()
        console.log(formdata)
       fetch("https://palm-gym-api.onrender.com/exercise_logs",{
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
        <div>
           <div>WELCOME</div> 
         {currentusername}
         <p>“The body achieves what the mind believes.” – Napoleon Hill </p>
         <h3>Workouts List</h3>

         <div className="d-flex container ">
              {displayworkouts}
           </div>  
         <div className="container row ">
            <form className="card container col mt-3" onSubmit={(e) => handleSubmit(e)}>
            <h4 className="card-header">New Workout</h4>
            <label htmlFor="name" placeholder="Workout Number">Workout Number: </label>
            <input type="number" name="workout_number" onChange={(e) => setWorkoutId(e.target.value)}/>
            <label htmlFor="name">Duration (In minutes): </label>
            <input type="number" name="duration" onChange={(e)=> setDuration(e.target.value)} />
            <label htmlFor="date">Date (yyyymmdd): </label>
            <input type="text" name="date" onChange={(e) => setDate(e.target.value)} />
            <input type="submit" value="Add workout" />
            </form>
         </div>
        
         
        </div>
    )
}

export default Dashboard