import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import logo from '../../images/logoinsta.png';
import phoneImage from '../../images/instafon.svg';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    // Ajoutez ici votre logique de connexion, par exemple :
    // - Appel à une API d'authentification
    // - Validation des informations de connexion
    // - Redirection vers une nouvelle page
  };

  return (
    <Box className="loginPage">
      <Grid container spacing={0} className="loginContainer" boxShadow={10}> {/* Ajout de l'effet de shadow box */}
        <Grid item xs={12} md={7} className="leftPanel">
          <img src={logo} alt="Instagram Logo" className="logo" />
          <Box component="form" onSubmit={handleSubmit} className="loginForm">
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Phone number, username, or email"
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
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="loginButton"
              style={{ backgroundColor: '#2196F3', boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)' }}
              onMouseDown={(e) => e.target.style.backgroundColor = '#0D47A1'}
              onMouseUp={(e) => e.target.style.backgroundColor = '#2196F3'}
            >
              Let's Go {/* Modification du texte du bouton */}
            </Button>
            <Button
              component={Link}
              to="/signup"
              fullWidth
              variant="contained"
              color="primary"
              className="signUpButton"
              style={{ backgroundColor: '#4CAF50', boxShadow: '0 3px 5px 2px rgba(76, 175, 80, .3)' }}
              onMouseDown={(e) => e.target.style.backgroundColor = '#1B5E20'}
              onMouseUp={(e) => e.target.style.backgroundColor = '#4CAF50'}
            >
              Already have an account? Sign Up {/* Modification du texte du bouton Sign Up */}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} className="rightPanel">
          <img src={phoneImage} alt="Phone Preview" className="phoneImage" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;



