import React from 'react';
import { Typography, Paper } from '@material-ui/core';

import { Link } from "react-router-dom";

export default function Welcome() {
  // Figure out the data to populate here...

  return (
    <Paper elevation={3} className="loginBox">
      <Typography component="h3">Welcome to Soul Stream</Typography>
      <Link to="/login">Login</Link>
    </Paper>
  )
}