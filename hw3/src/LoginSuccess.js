import React from 'react';

const LoginSuccess = ({ catchLogout }) => (
  <div>
    <h1>Welcome! you have successfully logged in</h1>
    <button onClick={catchLogout}>Sign Out</button>
  </div>
);

export default LoginSuccess;
