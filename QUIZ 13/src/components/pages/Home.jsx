import React from 'react';
import { Link } from 'react-router-dom';
import HomeImage from '/home/asus/Desktop/react/QUIZ 13/src/images/home.png';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <img src={HomeImage} alt="Background" />
        <h2>Home</h2>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
  );
};

export default Home;