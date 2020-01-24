import React from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './LogIn.css'

class LogIn extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    }
  }

  state = { error: null }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/joblist'
    history.push(destination)
  };

  handleSubmitJwtAuth = e => {
    e.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = e.target
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        TokenService.saveUserId(res.userId)
        this.handleLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  };

  render() {
    return (
      <div className='Login'>
        <h1>Login</h1>
        <div className='login__demo-creds'>
          <strong>
            Demo credentials: testuser / Thinkful1!
          </strong>
        </div>
        <form
          id='log-in'
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div className='login-field'>
            <label htmlFor='user_name'>Username: </label>
            <input
              type='text'
              name='user_name'
              id='user_name'
              placeholder='Username'
            ></input>
          </div>
          <div className='login-field'>
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            ></input>
          </div>
          <div className='login__button'>
            <button type='submit' value='Log In' className='login-button'>
              Log In
            </button>
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

export default LogIn;