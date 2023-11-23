import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import api from '../service/api';

export default function UserPage() {
  const userData = JSON.parse(localStorage.getItem('user') || "{}");

  const [showUserInfo, setShowUserInfo] = useState(true);

  const handleDeleteUser = () => {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    console.log(config)
    console.log(userData)
    api.delete(`/v1/user/DeleteUser/${userData.id}`, config).then((response) => {
      console.log(response.data);
    });
  
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setShowUserInfo(false);
    
  };

  if (!showUserInfo) {
    window.location.href = '/';
    return null; 
  }

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <AppBar position="relative" sx={{ backgroundColor: "#db2504" }}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              BichoGames
            </Typography>
            {localStorage.getItem('token') && localStorage.getItem("user") ? (
              <IconButton color="inherit" sx={{ left: "85%", fontSize: '2.5rem' }} href="/my-account">
                <AccountCircleIcon />
              </IconButton>
            ) : (
              <IconButton color="inherit" sx={{ left: "85%", fontSize: '2.5rem' }} href="/login">
                <LoginIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
      <Typography
              component="h5"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
             Informações do Usuário
            </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component="h6" variant="h6" align="center" color="text.primary" gutterBottom>
          <strong>Nome:</strong> {userData?.nome}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component="h6" variant="h6" align="center" color="text.primary" gutterBottom>
          <strong>Email:</strong> {userData?.email}
        </Typography>
      </Grid>
      <Grid item xs={12}>

        </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" onClick={handleDeleteUser}  sx={{ mt: 3, mb: 2, ml: 82, backgroundColor: 'orangeRed', '&:hover': {
                  backgroundColor: '#db2504',
                }, }}>
          Deletar Informações
        </Button>
      </Grid>
    </Grid>
  );
}
