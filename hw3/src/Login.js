import React, { useState } from 'react';

const Login= ({ catchLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    catchLogin(username, password);
  };

  return (
    <form onSubmit={Submit}>
      <input
        type='text'
        placeholder='Enter username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='password'
        placeholder='Enter password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>Sign In</button>
    </form>
  );
};

export default Login;
