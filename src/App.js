import React, { Component } from 'react';

import SorteoStepper from './components/SorteoStepper'
import SimpleBottomNavigation from './components/BottomNavigation'
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Search from './components/basic/search'
import Notifications from './components/basic/notifications'
import Swipe from './components/basic/swipe'
import Profile from './components/basic/profile'
import PrivateRoute from './components/auth/PrivateRoute'
import Login from './components/auth/login'




class App extends Component {
  
  

  render() {
    return (
    <Router>
      <Grid container >
        <Grid  xs={12}>
                <div className="App">
                <PrivateRoute path="/" exact  component={Search} />
                <PrivateRoute path="/swipe/" component={Swipe} />
                <PrivateRoute path="/profile/" component={Profile} />
                {/* PrivateRoute */}
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/notifications/" component={Notifications} />
                
                </div>
        </Grid>
        
      </Grid>
        <SimpleBottomNavigation/>

    </Router>
    );
  }
}

export default App;
