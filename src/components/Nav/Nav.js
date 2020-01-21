import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

class Nav extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <Link
        onClick={this.handleLogoutClick}
        to='/'
        className='text-link'
      >
        <span className='keep-white'>|</span> Log Out
      </Link>
    )
  }

  renderLoginLink() {
    return (
      <Link
        to='/login'
        className='text-link'
      >
        <span className='keep-white'>|</span> Log In
      </Link>
    )
  }

  toJobList() {
    return (
      <Link to={'/joblist'} className='text-link'>
        Job Thing<span className='keep-white'>.</span>
      </Link>
    )
  }

  toLandingPage() {
    return (
      <Link to={'/'} className='text-link'>
        Job Thing<span className='keep-white'>.</span>
      </Link>
    )
  }

  componentDidMount() {
    TokenService.onChange(() => {
      this.forceUpdate()
    })
  }

  render() {
    return (
      <nav>
        <div className='nav-container'>
          <div className='navbar-logo'>
          {TokenService.hasAuthToken()
              ? this.toJobList()
              : this.toLandingPage()
            }
          </div>
          {' '}
          <Link to='/joblist' className='joblist'>
            Job List
          </Link>
          {' '}
          <Link to='/addlisting'>
            Add Listing
          </Link>
          {' '}
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </nav>
    )
  }
}

export default Nav;