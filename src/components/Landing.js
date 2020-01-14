import React from 'react'
import { Link } from 'react-router-dom'

class Landing extends React.Component {
  render() {
    return (
      <div className='Landing'>
        <h1>Welcome to Job Thing</h1>
        <h2>Track Your Job Applications</h2>
        <h3>View Job Applications</h3>
        <p>See all of your submitted applications in one place.</p>
        <h3>Add and Edit Applications</h3>
        <p>Add new applications and update them as you progress.</p>
        <Link to='register'>
          Register
        </Link>
        {' | '}
        <Link to='login'>
          Log In
        </Link>
      </div>
    )
  }
}

export default Landing