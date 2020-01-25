import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'

class Landing extends React.Component {
  render() {
    return (
      <div className='Landing'>
        <h1>Welcome to Job Thing</h1>
        <h3>Take control of your future. Get your dream job.</h3>
        <p>With Job Thing, you can view all of your submitted applications in one place, and track your progress along the way.</p>
        <p>Get started here:</p>

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

export default Landing;