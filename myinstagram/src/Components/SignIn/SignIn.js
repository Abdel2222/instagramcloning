import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from '../../images/logoinsta.png';
import phoneImage from '../../images/gsminsta.jpeg';
import './SignIn.css';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Ajoutez ici votre logique de connexion
  };

  const handleLoginClick = () => {
    // Redirection vers la page LoginPage
    navigate('/login');
  };

  return (
    <Box className="signInPage">
      <Grid container spacing={2} className="signInContainer">
        <Grid item xs={12} md={6} className="leftPanel">
          <img src={logo} alt="Instagram Logo" className="logo" />
          <Box component="form" onSubmit={handleSubmit} className="signInForm">
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Username, phone number or email"
              value={username}
              onChange={handleUsernameChange}
              className="textField"
            />
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="textField"
            />
            <Button
              onClick={handleLoginClick}
              fullWidth
              variant="contained"
              color="primary"
              className="signInButton"
              onMouseEnter={(e) => e.target.style.backgroundColor = '#4CAF50'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#2196F3'}
              onMouseDown={(e) => e.target.style.backgroundColor = '#f44336'}
              onMouseUp={(e) => e.target.style.backgroundColor = '#4CAF50'}
            >
              Sign In
            </Button>
            <Typography variant="body2" align="center" className="signUpText">
              <Link to="/signup" className="signUpLink">
                Don't have an account? Sign up
              </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="rightPanel">
          <img src={phoneImage} alt="Phone Preview" className="phoneImage" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;


