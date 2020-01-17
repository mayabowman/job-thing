import React from 'react';

class LogIn extends React.Component {
  render() {
    return (
      <div className='Login'>
        <h1>Login</h1>
        <form>
          <div className='login__username'>
            <label htmlFor='username'>Username: </label>
            <input
              type='text'
              name='username'
              id='username'
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