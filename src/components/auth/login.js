// Dev
import React from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

import { signOut } from '../../store/actions/authActions'



// UI dependencies
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

/*

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});
*/
class Login extends React.Component {

  constructor(props) {
    super(props);
 //   this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.logout = this.logout.bind(this);
    this.isLogin = this.isLogin.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  // methods

  //get inputs (email , password )values 
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // singIn /Login
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }

  logout(e){
    e.preventDefault();
    this.props.signOut()
  //  Auth.signout()
  }

  isLogin(e){
    e.preventDefault()
  //  let a =  Auth.isLogin()
    //alert( a )
    console.log(this.props.auth)

  }
 



  render() {

  const {  authError, auth } = this.props;
  

  return (
    <main // className={classes.main}
    >
      <CssBaseline />
      <Paper //className={classes.paper}
      >
        <Avatar // className={classes.avatar}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form //className={classes.form}
        >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" value={this.state.email} onChange={this.handleChange}  autoFocus />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" value={this.state.password} onChange={this.handleChange}/>
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
           
            fullWidth
            variant="contained"
            color="primary"
           // className={classes.submit}
            onClick={this.handleSubmit}
          >
            Log in
          </Button>
          <Button
           
           fullWidth
           variant="contained"
           color="secondary"
         //   className={classes.submit}
           onClick={this.logout}
         >
           Logout
         </Button>
         <Button
           
           fullWidth
           variant="contained"
           color="secondary"
         //   className={classes.submit}
           onClick={this.isLogin}
         >
           is login
         </Button>
        </form>
      </Paper>
    </main>
  );
}

}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

