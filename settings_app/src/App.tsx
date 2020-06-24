import React from 'react';
import './App.css';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Login, Signup, Welcome } from './pages';

const useStyles = makeStyles({
  root: {
    width: '100%',
    // maxWidth: 500,
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>

        <div className={classes.root}>
          <header className="App-header">
            <Typography component="h1">Soul Stream</Typography>
            {/* TODO: add a header here */}
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/">
                <Welcome />
              </Route>
            </Switch>
          </header>
        </div>

      </Router>
    </div>
  );
}

export default App;
