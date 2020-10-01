import React, { Component } from 'react';
import classes from './Login.module.css'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'

class Login extends Component{
    render(){
        return(
            <div className={classes.contain}>
                <div className={classes.card}>
                    <SignUp />
                </div>
            </div>
        )
    }
}

export default Login;