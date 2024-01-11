import React from 'react';
import { Link } from 'react-router-dom';
import './UsersList.css';

const UsersList = () => {
  const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    // Add more users as needed
  ];

  return (
    <div className="users-list">
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/profile/${user.id}`}>{user.name}</Link>
            <Link to={`/edit-user/${user.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/create-user">Create User</Link>
    </div>
  );
};

export default UsersList;
