import React from "react";
import { Link } from "react-router-dom";
function About() {
  const classes = [
    { id: 1, name: "Yoga", time: "9:00am - 10:00am" },
    { id: 2, name: "Pilates", time: "10:00am - 11:00am" },
    { id: 3, name: "Cardio", time: "11:00am - 12:00pm" },
    { id: 4, name: "Weightlifting", time: "1:00pm - 2:00pm" },
    { id: 5, name: "Zumba", time: "2:00pm - 3:00pm" },
  ];

  return (
    <>
      
        <strong className="fs-2">About Us</strong>
        <br />
        
          Welcome to our gym! We believe that fitness is a journey, not a
          destination. Our mission is to provide a welcoming and inclusive
          environment where people of all ages and fitness levels can come
          together to improve their health and well-being.
        
        <br />
        <hr/ >
        <>
          Our gym offers a variety of workouts, including cardio, strength
          training, and group fitness classes. We have state-of-the-art
          equipment and experienced trainers who are dedicated to helping you
          achieve your fitness goals.
        </>
        <hr/>
        <>
          At our gym, we believe in building a supportive community. We want our
          members to feel empowered and motivated to reach their full potential.
          Whether you're a beginner or a seasoned athlete, there's a place for
          you at our gym.
        </>
        <>
          Thank you for considering our gym for your fitness journey. We can't
          wait to help you get started!
        </>
      <hr />
      <strong className="fs-1">Classes</strong>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem.id}>
            <strong>{classItem.name}</strong>
            <br />
            {classItem.time}
          </li>
        ))}
      </ul>
      <Link to="/signup">
       <button className="btn btn-secondary"> Become a member</button>
      </Link>
    </>
    
  );
}
export default About;
