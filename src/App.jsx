import React, { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="app">
      <div className="card-container">
        {users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            imageId={user.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
