import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  render() {
    return (
      <div className='Register'>
        <h1>Register</h1>
        <form>
          <div className='form-content'>
            <div>
              <label htmlFor='username'>Name: </label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Name'
              />
            </div>
            <div>
              <label htmlFor='username'>Username: </label>
              <input
                type='text'
                id='username'
                name='username'
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