import React from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

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
        <form
          id='log-in'
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div className='login__username'>
            <label htmlFor='user_name'>Username: </label>
            <input
              type='text'
              name='user_name'
              id='user_name'
              placeholder='Username'
            ></input>
          </div>
          <div className='login__password'>
            <label htmlFor='password'>Password: </label>
            <input
              type='text'
              name='password'
              id='password'
              placeholder='Password'
            ></input>
          </div>
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

export default LogIn;