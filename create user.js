import React from 'react';
import './Form.css';

const CreateUser = () => {
  return (
    <div className="form-container">
      <h1>Create User</h1>
      <form>
        {/* Add form elements for user creation */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
