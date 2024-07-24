import React from 'react';

const UserCard = ({ name, username, email, imageId }) => {
  return (
    <div className="user-card">
      <img src={`https://picsum.photos/seed/${imageId}/300/300`} alt={name} />
      <h2>{name}</h2>
      <p className="username">@{username}</p>
      <p className="email">{email}</p>
    </div>
  );
};

export default UserCard