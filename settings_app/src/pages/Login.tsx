import React from 'react';
import { Typography, TextField, Paper } from '@material-ui/core';

import './Login.css';

export default function Login() {
  // Figure out the data to populate here...

  return (
    <Paper elevation={3} className="loginBox">
      <Typography component="h3">Log In:</Typography>
      <TextField label="User Name" variant="outlined"></TextField>
      <TextField type="password" label="Password" variant="outlined"></TextField>
    </Paper>
  )
}