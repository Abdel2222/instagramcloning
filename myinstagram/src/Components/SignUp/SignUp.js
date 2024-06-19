import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from '../../images/logoinsta.png';
import phoneImage from '../../images/instasign.jpeg';
import './SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Utilisation de useNavigate pour la navigation

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
    // Ajoutez ici votre logique d'inscription
  };

  const handleLoginClick = () => {
    // Redirection vers la page LoginPage
    navigate('/login');
  };

  return (
    <Box className="signupPage">
      <Grid container spacing={2} className="signupContainer">
        <Grid item xs={12} md={6} className="leftPanel">
          <img src={logo} alt="Instagram Logo" className="logo" />
          <Box component="form" onSubmit={handleSubmit} className="signupForm">
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Email"
              value={email}
              onChange={handleEmailChange}
              className="textField"
            />
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Username"
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
              className="signupButton"
            >
              Login
            </Button>
            <Typography variant="body2" align="center" className="loginText">
              Already have an account?{' '}
              <Button component={Link} to="/signin" className="loginLink">
                Sign in
              </Button>
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

export default SignUp;
