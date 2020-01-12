import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className='nav-container'>
          <Link to='/' className='logo'>
            Job Thing
          </Link>
          {' '}
          <Link to='/joblist' className='joblist'>
            Job List
          </Link>
          {' '}
          <Link to='/addlisting'>
            Add Listing
          </Link>
        </div>
      </nav>
    )
  }
}

export default Nav