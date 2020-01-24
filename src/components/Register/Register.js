import React from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import './Register.css';

class Register extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    }
  }

  state = { error: null }

  handleRegistrationSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/login'
    history.push(destination)
  };

  handleSubmit = e => {
    e.preventDefault()
    const { user_name, full_name, password } = e.target

    this.setState({ error: null })

    AuthApiService.postUser({
      user_name: user_name.value,
      full_name: full_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = ''
        full_name.value = ''
        password.value = ''
        this.handleRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
        console.log('error', res.error)
      })
  };

  render() {
    return (
      <div className='Register'>
        <h1>Register</h1>
        <form
          className='registration-form'
          onSubmit={this.handleSubmit}
        >
            <div className='register-field'>
              <label
                htmlFor='full_name'
                className='register__label'
              >Name: </label>
              <input
                type='text'
                id='full_name'
                name='full_name'
                placeholder='Name'
              />
            </div>
            <div className='register-field'>
              <label
                htmlFor='user_name'
                className='register__label'
              >Username: </label>
              <input
                type='text'
                id='user_name'
                name='user_name'
                placeholder='Username'
              />
            </div>
            <div className='register-field'>
              <label
                htmlFor='password'
                className='register__label'
              >Password: </label>
              <input
                className='register__input'
                type='text'
                id='password'
                name='password'
                placeholder='Password'
              />
            </div>
            <div className='register__password-req'>
              <strong>
                Password requirements:<br/>
                Must be between 8 and 72 characters<br/>
                Must not begin or end with a space<br/>
                Must contain an uppercase, lowercase, number and special character
              </strong>
            </div>
            <div className='register__button'>
              <button type='submit' value='Register' className='register-button'>
                Register
              </button>
            </div>
            <div className='register-field'>
              <p className='register-field'>Already have an account? <Link className='login-link' to='/login'>Login</Link></p>
            </div>
        </form>
        <div className='error-message'>
          <strong>
            {this.state.error}
          </strong>
        </div>
      </div>
    )
  }
}

export default Register;