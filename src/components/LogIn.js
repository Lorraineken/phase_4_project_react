import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const LogIn = ({handleUserLoginAndSignup}) =>{
    // const history = useHistory()
    // const [state, setState] = useState({})
    // const onChange = (e) =>{
    //     const {name, value } = e.target
    //     setState({...state,[name]: value})
    // }
    
    const[user_name,setUserName] = useState('')
    const[password,setPassword] = useState()
    const navigate = useNavigate()

    const formdata = {
      
        "user_name":user_name,
      
        "password":password
    }
    const onSubmit =(e) =>{
        e.preventDefault()
        const config = {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formdata)
        }
        fetch('https://palm-gym-api.onrender.com/login',config)
        .then(resp =>resp.json())
        .then(data =>{
            console.log(data)
            navigate("/workout")
        })
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <strong>LOGIN</strong>
                <br/ >
                <label>Username</label>
                <br />
                <input onChange={(e)=>setUserName(e.target.value)} name='user_name' type='text' />
                <br />
                <label>Password</label>
                <br />
                <input onChange={(e)=>setPassword(e.target.value)} name ='password' type ='password' />
                <br />
                <button type='submit' content= 'Log In'>LOGIN</button>
                <br />
                <strong >New User</strong>
                <br />
               <Link to='/signup'><button>Signup</button></Link>
               <Link to='/pwchange'>Forgot Password</Link>
            </form>
        </div>
    )
}
export default LogIn;