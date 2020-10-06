import React, { Component } from 'react';
import classes from './SignUp.module.css'
import Button from '../../../components/Button/Button'
import axios from '../../../axiosform'

class SignUp extends Component{

    state = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirmPassword: "",
        token: "",
        classesForPassword: [classes.textInput],
        classesForConfirmPassword: [classes.textInput],
        canSubmit: false
    }

    handleForm = (event, field) => {
        this.setState({[field]: event.target.value}, this.canSubmitHandler)
    }

    errorCheckerForPassword = (value) => {
        if (value.length < 7){
            const passwordClasses = [...this.state.classesForPassword]
            passwordClasses.push(classes.error)
            this.setState({classesForPassword: passwordClasses})
        }else{
            this.setState({classesForPassword: [classes.textInput]})
            this.errorCheckerForConfirmPassword(this.state.confirmPassword)
        }
    }

    errorCheckerForConfirmPassword = (value) => {
        if (value !== this.state.password){
            const passwordClasses = [...this.state.classesForConfirmPassword]
            passwordClasses.push(classes.error)
            this.setState({classesForConfirmPassword: passwordClasses})
        }else{
            this.setState({classesForConfirmPassword: [classes.textInput]})
        }
    }

    canSubmitHandler = () => {
        if (this.state.fname !== "" && this.state.lname !== "" && this.state.email !== "" && this.state.password.length > 6 && this.state.confirmPassword === this.state.password){
            this.setState({canSubmit: true})
        }else{
            this.setState({canSubmit: false})
        }
    }

    onSubmit = () => {
        if (this.state.canSubmit){
            console.log('submited')
            const body = {
                fname: this.state.fname,
                lname: this.state.lname,
                email: this.state.email,
                password: this.state.password
            }
            axios({
                method: 'post',
                url: '/user',
                data: body,
                headers: {'Content-Type': 'application/json' }
            })
            .then(function (response) {
                console.log(response.data.token);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    render() {
        return(
            <div className={classes.contain}>
                <div className={classes.title}>
                    Sign up | Sign in
                </div>
                <input className={classes.textInput} value={this.state.fname} type="text" placeholder="First Name" onChange={ (event) => this.handleForm(event, "fname") } />
                <input className={classes.textInput} value={this.state.lname} type="text" placeholder="Last Name" onChange={ (event) => this.handleForm(event, "lname") } />
                <input className={classes.textInput} value={this.state.email} type="text" placeholder="Email"  onChange={ (event) => this.handleForm(event, "email") } />
                <input className={this.state.classesForPassword.join(" ")} value={this.state.password} type="password" placeholder="Password" onChange={ (event) => {this.handleForm(event, "password"); this.errorCheckerForPassword(event.target.value)} } />
                <input className={this.state.classesForConfirmPassword.join(" ")} value={this.state.confirmPassword} type="password" placeholder="Confirm Password" onChange={ (event) => {this.handleForm(event, "confirmPassword"); this.errorCheckerForConfirmPassword(event.target.value)} } />
                <Button text="Sign Up" clicked={this.onSubmit} />
            </div>
        )
    }
}

export default SignUp;