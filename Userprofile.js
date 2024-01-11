import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  // Replace with actual user data
  const user = { id: 1, name: 'User 1' };

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      {/* Display other user profile information */}
      <Link to={`/edit-profile/${user.id}`}>Edit Profile</Link>
    </div>
  );
};

export default UserProfile;
