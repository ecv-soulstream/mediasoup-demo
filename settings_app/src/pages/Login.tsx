import React from 'react';
import { Typography, TextField, Paper, Box, Button } from '@material-ui/core';
import { Link } from "react-router-dom";

import { PasswordInput } from '../components'
import '../App.css';

export default function Login() {
  // Figure out the data to populate here...

  function onPasswordChange(val: string) {
    console.log("Login: pass=", val)
  }

  return (
    <Paper elevation={3} className="paperContainer">
      <Box flexDirection="column">
        <Typography component="h3">Log In:</Typography>
        <Box flexDirection="column">
          <TextField label="User Name" variant="outlined"></TextField>
          <PasswordInput label="Password" variant="outlined" onPasswordChange={onPasswordChange} />
        </Box>
        <Button variant="contained" color="primary" >Log in</Button>
        <Box>
          <Link to="/signup">Create a New Account</Link>
        </Box>
      </Box>
    </Paper>
  )
}