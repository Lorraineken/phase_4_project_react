import React from 'react';
import backgroundImage from '../images/backgroundnew.jpg';
import './Home.css'
const HomePage = () => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Palm<br/>Fitness<br/>Hub<span>.</span></h1>
        <h2>No Pain No Gain</h2>
        <button type="button" class="btn btn-light">Join us today</button>
      </div>
    </div>
  );
};

export default HomePage;