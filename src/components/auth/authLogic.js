
import fire from '../../config/firebaseAuth'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom'


const Auth = {
   
    /* This methods takes as params email and password to autheticate with firebase 
    */
    authenticate(email,password) {
      
          
          fire.auth().signInWithEmailAndPassword(email, password)
          .then(param => {
            //console.log(param.user.uid)
         
           
            alert('hello')
          
          })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
               
                console.log(error)
               
                alert('na')
              });


    },

    /* This methods takes no params, just refresh isAuthenticated 
    */
    signout() {
      
          fire.auth().signOut().then(function() {
            
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
            console.log(error)
          });
    },

    isLogin(){
      const user = fire.auth().currentUser;
      if (user){
        return true
      }
      

       return false
    }
  }
  
  export default Auth