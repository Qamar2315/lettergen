import React from 'react';

const Error = ({ message, status }) => {
  const styles = {
    errorPage: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f8d7da',
      color: '#721c24',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px',
    },
    header: {
      fontSize: '3em',
      marginBottom: '20px',
    },
    message: {
      fontSize: '1.5em',
      maxWidth: '600px',
    }
  };

  return (
    <div style={styles.errorPage}>
      <h1 style={styles.header}>Error {status}</h1>
      <p style={styles.message}>{message}</p>
    </div>
  );
};

export default Error;
