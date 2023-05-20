import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import LoginSuccess from './LoginSuccess';
import LoginFail from './LoginFail';

const App = () => {
  const [SignedIn, setSignedIn] = useState(false);
  const [SignedInError, setSignedInError] = useState(false);

  const catchLogin = (username, password) => {

    if (username === 'cfg' && password === '2023') {
      setSignedIn(true);
      setSignedInError(false);
    } else {
      setSignedIn(false);
      setSignedInError(true);
    }
  };

  const catchLogout = () => {
    setSignedIn(false);
    setSignedInError(false);
  };

  return (
    <Router>
      <h1>Login Page</h1>
      <Routes>
        <Route
          path='/'
          element={
            SignedIn ? (
              <LoginSuccess catchLogout={catchLogout} />
            ) : (
              <Login catchLogin={catchLogin} />
            )
          }
        />
        <Route path='/fail' element={<LoginFail />} />
      </Routes>
      {SignedInError && <LoginFail />}
    </Router>
  );
};

export default App;
