import React from 'react';
import { Link } from 'react-router-dom';
import AboutPng from '/home/asus/Desktop/react/QUIZ 13/src/images/About.jpg'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <img src={AboutPng} alt="Background" />
      <p>About</p>
      <Link to="/profile">
        <button>Profile</button>
      </Link>
    </div>
  );
};

export default About;