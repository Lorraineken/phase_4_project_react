import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LogOut=()=> {
   
    const navigate = useNavigate()
    useEffect(()=>{
        const config ={
            method: 'DELETE'
        }
        fetch('https://palm-gym-api.onrender.com/logout', config)
        handleLogout()
    })

    const handleLogout=()=>{
        
        setTimeout(()=>{
            navigate("/")
        },500)
    }
  return (
    <div>
        <span>Logging Out</span>
    </div>
  )
}

export default LogOut