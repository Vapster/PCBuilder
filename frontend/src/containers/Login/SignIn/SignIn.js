import React from 'react';
import classes from './SignIn.module.css'
import Button from '../../../components/Button/Button'

const SignIn = (props) => {
    return(
        <div className={classes.contain}>
            <div className={classes.title}>
                Sign up | Sign in
            </div>
            <input className={classes.textInput} type="text" placeholder="Email" />
            <input className={classes.textInput} type="text" placeholder="Password" />
            <Button text="Sign In" />
        </div>
    )
}

export default SignIn