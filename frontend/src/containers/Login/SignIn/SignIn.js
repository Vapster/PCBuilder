import React from 'react';
import classes from './SignIn.module.css'
import Button from '../../../components/Button/Button'

const SignIn = (props) => {
    return(
        <div className={classes.contain}>
            <div className={classes.title}>
                <span onClick={props.clickOnSignup}>Sign up</span> | <span onClick={props.clickOnSignin}>Sign in</span>
            </div>
            <input className={classes.textInput} type="text" placeholder="Email" />
            <input className={classes.textInput} type="text" placeholder="Password" />
            <Button text="Sign In" />
        </div>
    )
}

export default SignIn