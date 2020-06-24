import React from 'react';
import './App.css';
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
  logo: {
    width: "80%",
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>

        <div className={classes.root}>
          <header className="App-header">
            <img src="logo_ss.png" alt="logo" className={classes.logo}/>
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
