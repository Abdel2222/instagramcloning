import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/Loginpage/LoginPage';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



