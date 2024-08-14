import React from 'react';
import { useParams } from 'react-router-dom';
import '../User.css'
const User = () => {
  const params = useParams();
  return (
    <div className="user-container">
      <h1>User Profile</h1>
      <p>I am {params.username}</p>
    </div>
  );
};

export default User;
