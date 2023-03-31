import React, {useState} from "react";

function Signup(){

    const[full_name,setFullName] = useState('')
    const[user_name,setUserName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const formdata = {
        "full_name":full_name,
        "user_name":user_name,
        "email":email,
        "password":password
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formdata)
    }

    return (
        <div> 
           <form className="card container mt-5" onSubmit={(e) => handleSubmit(e)}  >
          <h4 className="card-header">New Palm Member</h4>
          <label htmlFor="name">Full Name: </label>
          <input type="text" name="full_name" onChange={(e) => setFullName(e.target.value)} />
          <label htmlFor="name">User Name: </label>
          <input type="text" name="user_name" onChange={(e) => setUserName(e.target.value)} />
          <label htmlFor="email">Email: </label>
          <input type="text" name="email"  onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}/>
          <input type="submit" value="Join Palm Gym" />
         </form>
        </div>
    )
}

export default Signup