import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
// import PrivateRoute from '../../utilities/PrivateRoute';
import './Nav.css';
// import JobList from '../JobList/JobList';
// import AddListing from '../AddListing/AddListing';

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
      <header className='navbar'>
        <nav className='navbar-navigation' role='navigation'>
          <div className='navbar-toggle-button'>
            <DrawerToggleButton click={this.props.drawerClickHandler}/>
          </div>
            <div className='navbar-logo'>
              {TokenService.hasAuthToken()
                ? this.toJobList()
                : this.toLandingPage()
              }
            </div>
            <div className='spacer' />
            <div className='navbar-nav-items'>
            <Link to={'/joblist'} className='text-link'>
              Job List |
            </Link>
            {' '}
            <Link to={'/addlisting'} className='text-link'>
              Add Listing
            </Link>
            {' '}
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </div>
        </nav>
      </header>
    )
  }
}

export default Nav;