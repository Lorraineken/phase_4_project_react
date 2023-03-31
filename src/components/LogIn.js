import { useState } from 'react'
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
const LogIn = ({handleUserLoginAndSignup}) =>{
    // const history = useHistory()
    const [state, setState] = useState({})
    const onChange = (e) =>{
        const {name, value } = e.target
        setState({...state,[name]: value})
    }
    const onSubmit =(e) =>{
        e.preventDefault()
        const config = {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch('/login',config)
        .then(resp =>resp.json())
        .then(data => handleUserLoginAndSignup(data))
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <strong>LOGIN</strong>
                <br/ >
                <label>Username</label>
                <br />
                <input onChange={onChange} name='user_name' type='text' />
                <br />
                <label>Password</label>
                <br />
                <input onChange={onChange} name ='password' type ='password' />
                <br />
                <button type='submit' content= 'Log In'>LOGIN</button>
                <br />
                <strong >New User</strong>
                <br />
               <Link to='/signup'><button>Signup</button></Link>
            </form>
        </div>
    )
}
export default LogIn;