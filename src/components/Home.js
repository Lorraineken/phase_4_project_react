import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../images/backgroundnew.jpg";
import "./Home.css";
import Header from "./Header";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <div style={{ textAlign: "center" }}>
          <h1>
            Palm
            <br />
            Fitness
            <br />
            Hub<span>.</span>
          </h1>
          <h2 id="pain" >No Pain no Gain</h2>
          <button
            type="button"
            class="btn btn-light"
            onClick={() => navigate("/signup")}
          >
            Join us today
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
