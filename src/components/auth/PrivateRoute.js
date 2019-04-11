import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom'



const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
     
      true
        ? <Component {...props} />
        : <Redirect to='/login' />
      
    )} />
  )

  export default PrivateRoute