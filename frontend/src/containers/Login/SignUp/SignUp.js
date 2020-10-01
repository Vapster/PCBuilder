import React from 'react';
import classes from './SignUp.module.css'
import Button from '../../../components/Button/Button'

const SignUp = (props) => {
    return(
        <div className={classes.contain}>
            <div className={classes.title}>
                Sign up | Sign in
            </div>
            <input className={classes.textInput} type="text" placeholder="First Name" />
            <input className={classes.textInput} type="text" placeholder="Last Name" />
            <input className={classes.textInput} type="text" placeholder="Email" />
            <input className={classes.textInput} type="password" placeholder="Password" />
            <input className={classes.textInput} type="password" placeholder="Password" />
            <Button text="Sign Up" />
        </div>
    )
}

export default SignUp