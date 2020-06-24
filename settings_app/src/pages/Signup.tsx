import React, { useState } from 'react';
import { Typography, Paper, Box, Button } from '@material-ui/core';

import { PasswordInput, PasswordInputProps, TextInput } from '../components'
import '../App.css';

export default function Signup() {

  // state
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');
  const [matching, setMatching] = useState(true);
  const [reminder, setReminder] = useState('');

  function onEmailChange(val: string) {
    // todo: validate email!
    setEmail(val);
  }

  function onUserNameChange(val: string) {
    // todo: validate userName
    setUserName(val);
  }

  function onPasswordChange(val: string) {
    console.log("onPasswordChange: pass=", val)
    // Make this validate!!
    setPassword(val);

    setMatching(val === repeat);
  }

  function onRepeatPasswordChange(val: string) {
    console.log("onRepeatPasswordChange: pass=", val)

    setRepeat(val);

    setMatching(val === password);
  }

  function onReminderChange(val: string) {
    setReminder(val)
  }

  function onCreate() {
    console.log("onCreate")

    if(!matching) { 
      console.error("Passwords don't match!")
      return; 
    }
    // todo: validate the data to ensure that it doesn't repeat..

    // todo: use gundb to validate and enter new data...

    // Add a split value to encode the remind me functionality

  }

  const repeatProps : PasswordInputProps = {
    label: "Repeat Password",
    value: repeat,
    onPasswordChange: onRepeatPasswordChange
  }

  return (
    <Paper elevation={3} className="paperContainer">
      <Box flexDirection="column">
        <Typography component="h3">Create a New Account:</Typography>
        
        <Box flexDirection="column">
          <TextInput label="Email" value={email} onInputChange={onEmailChange}/>
          <TextInput label="User Name" value={userName} onInputChange={onUserNameChange}/>
        </Box>

        <Box flexDirection="column">
          <PasswordInput label="Password" value={password} 
            onPasswordChange={onPasswordChange}
          />
          { matching
            ? <PasswordInput {...repeatProps} />
            : <PasswordInput {...repeatProps} error helperText="Passwords must match" />
          }
        </Box>
        { !matching && <Typography > </Typography>}

        <TextInput label="Password Reminder" 
          value={reminder} onInputChange={onReminderChange} />

        <Button variant="contained" color="primary" onClick={onCreate}>
          Create Account
        </Button>
      </Box>
    </Paper>
  )
}