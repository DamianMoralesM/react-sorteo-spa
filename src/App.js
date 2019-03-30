import React, { Component } from 'react';
import './App.css';
import SorteoStepper from './components/SorteoStepper'
import SimpleBottomNavigation from './components/BottomNavigation'
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from './components/search'
import Notifications from './components/notifications'
import Swipe from './components/swipe'
import Profile from './components/profile'





class App extends Component {
  
  

  render() {
    return (
    <Router>
      <Grid container spacing={24}>
        <Grid item xs={12}>
                <div className="App">
                <Route path="/" exact  component={Search} />
                <Route path="/swipe/" component={Swipe} />
                <Route path="/profile/" component={Profile} />
                <Route path="/notifications/" component={Notifications} />
                <SimpleBottomNavigation/>
                </div>
        </Grid>
      </Grid>
      

      </Router>
    );
  }
}

export default App;
