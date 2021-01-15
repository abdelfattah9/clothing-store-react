import React from 'react'
import FormInput from './FormInput'
import CustomButton from '../components/CustomButton'
import './css/signin.css'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

  handleSubmit = event => {
      event.preventDefault()
      this.setState({ email: '', password: ''})
  }
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value})
}


    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <h2>Sign in with your email and password</h2>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" handelChange={this.handleChange} value={this.state.email} label="email" placeholder="Email" name="email" required />

                    <FormInput type="password" handelChange={this.handleChange} label="password" name="passowrd" placeholder="Password"  />

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn