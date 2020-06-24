import React, { useState } from 'react';
import { Typography, TextField, Paper, Box, Button } from '@material-ui/core';
import { Link } from "react-router-dom";

import { PasswordInput } from '../components'
import '../App.css';

export default function Signup() {
  
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');

  function onPasswordChange(val: string) {
    console.log("onPasswordChange: pass=", val)
  }

  function onRepeatPasswordChange(val: string) {
    console.log("onRepeatPasswordChange: pass=", val)
  }

  function onCreate() {
    console.log("onCreate")
  }

  return (
    <Paper elevation={3} className="paperContainer">
      <Box flexDirection="column">
        <Typography component="h3">Create a New Account:</Typography>
        <TextField label="User Name" variant="outlined"></TextField>
        <Box flexDirection="column">
          <PasswordInput label="Password" value={password} 
            variant="outlined" onPasswordChange={onPasswordChange}
          />
          <PasswordInput label="Repeat Password" value={repeat}
            variant="outlined" onPasswordChange={onRepeatPasswordChange}
          />
        </Box>
        <Button variant="contained" color="primary" onClick={onCreate}>
          Create Account
        </Button>
      </Box>
    </Paper>
  )
}