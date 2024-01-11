import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UsersList from './UsersList';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users" exact component={UsersList} />
        <Route path="/create-user" exact component={CreateUser} />
        <Route path="/edit-user/:id" exact component={EditUser} />
        <Route path="/profile/:id" exact component={UserProfile} />
        <Route path="/edit-profile/:id" exact component={EditProfile} />
      </Switch>
    </Router>
  );
}

export default App;
