import React from 'react';

const Error = ({ message, status }) => {
  return (
    <div className="error-page">
      <h1>Error {status}</h1>
      <p>{message}</p>
    </div>
  );
};

export default Error;
