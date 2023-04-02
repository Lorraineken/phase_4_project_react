import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
function PasswordChange(){

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const formdata = {
        "password":password
    }

    function handleSubmit(e){
     e.preventDefault()
     fetch('https://palm-gym-api.onrender.com/users')
     .then((response) => response.json())
     .then((data) => {
        data.map((detail) =>{
            if (detail.user_name === username && detail.email === email)
            {
                fetch(`https://palm-gym-api.onrender.com/users/${detail.id}`,{
                    method:"PATCH",
                    headers: {
                      "Content-Type": "application/json",
                   },
                   body:JSON.stringify(formdata)
                })
            }
        })
     })
     navigate("/login")

    }

return (
    <div>
    <form className="card container mt-5" onSubmit={(e) =>handleSubmit(e)}>
    <label htmlFor="user_name">user_name: </label>
    <input type="text" name="user_name" onChange={(e) => setUsername(e.target.value)}/>
    <label htmlFor="email">email: </label>
    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
    <label htmlFor="new_password">new_password: </label>
    <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}/>
    <input type="submit" value="Reset Password" />
    </form>
    </div>
)
}

export default PasswordChange