import React from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';

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
          <div className='form-content'>
            <div>
              <label htmlFor='full_name'>Name: </label>
              <input
                type='text'
                id='full_name'
                name='full_name'
                placeholder='Name'
              />
            </div>
            <div>
              <label htmlFor='user_name'>Username: </label>
              <input
                type='text'
                id='user_name'
                name='user_name'
                placeholder='Username'
              />
            </div>
            <div>
              <label htmlFor='password'>Password: </label>
              <input
                type='text'
                id='password'
                name='password'
                placeholder='Password'
              />
            </div>
            <input type='submit' value='Register'/>
            <p>Already have an account? <Link className='login-link' to='/login'>Login</Link></p>
          </div>
        </form>
      </div>
    )
  }
}

export default Register;