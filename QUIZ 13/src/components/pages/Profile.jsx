import React from 'react';
import { useParams } from 'react-router-dom';
import ProfilePng from '/home/asus/Desktop/react/QUIZ 13/src/images/123.png'

const Profile = () => {

  return (
    <div>
      <h1>Profile</h1>
      <img src={ProfilePng} alt="Background" />
    </div>
  );
};

export default Profile;