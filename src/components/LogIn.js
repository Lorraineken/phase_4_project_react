import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../images/loginbackground.jpg';
import './Login.css';

const LogIn = ({ handleUserLoginAndSignup }) => {
  const [user_name, setUserName] = useState('');
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const formdata = {
    user_name: user_name,
    password: password,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formdata),
    };
    fetch('https://palm-gym-api.onrender.com/login', config)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate('/workout');
      });
  };

  return (
    <div className="login login__background">
      <img
        className="login__logo"
        src="https://e7.pngegg.com/pngimages/240/627/png-clipart-gym-logo-mark-gym.png"
      />
      <div className="login__container">
        <form onSubmit={onSubmit}>
          <strong>LOGIN</strong>
          <br />
          <label>Username</label>
          <br />
          <input
            id="user_name"
            onChange={(e) => setUserName(e.target.value)}
            name="user_name"
            type="text"
          />
          <br />
          <label>Password</label>
          <br />
          <input
            id="user_name"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
          />
          <br />
          <button
            class="btn btn-warning"
            id="login-btn"
            type="submit"
            content="Log In"
          >
            LOGIN
          </button>
          <br />

          <div id="remeber_me">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            ></input>
            <label class="form-check-label" for="exampleCheck1">
              Remember me?
            </label>
          </div>
          <strong>New User ?</strong>
          <br />
          <Link to="/signup">
            <button class="btn btn-success">Signup</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
