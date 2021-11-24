import { Component } from 'react';
import './css/Register.css'

class Register extends Component {
    state = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" }

    registerBtn = () => {
        console.log(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.confirmPassword);
    }
    inputHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    isValid = () => (this.state.firstName.length > 2 && this.state.firstName !== null) && (this.state.lastName.length > 2 && this.state.lastName !== null) && (this.state.email !== null) && (this.state.password.length > 8 && this.state.confirmPassword.length > 8 && this.state.password === this.state.confirmPassword);

    render() {
        const isDisabled = !this.isValid()
        return (
            <div className="Register">
                <h2>Register</h2>
                <h3>Create your account</h3>
                <input onChange={this.inputHandler} type="text" placeholder="First Name" name="firstName" /><br />
                <input onChange={this.inputHandler} type="text" placeholder="Last Name" name="lastName" /><br />
                <input onChange={this.inputHandler} type="email" placeholder="Email" name="email" /><br />
                <input onChange={this.inputHandler} type="number" placeholder="Password" name="password" /><br />
                <input onChange={this.inputHandler} type="number" placeholder="Confirm Password" name="confirmPassword" /><br />
                <button onClick={this.registerBtn} disabled={isDisabled}>Register Now</button>
            </div>
        )
    }
}

export default Register;