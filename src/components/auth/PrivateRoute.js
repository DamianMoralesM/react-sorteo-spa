import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom'

import Auth from './authLogic'  

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      Auth.isLogin()
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

  export default PrivateRoute