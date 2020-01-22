import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './SideDrawer.css';

class SideDrawer extends React.Component {

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  };

  renderLogoutLink() {
    return (
      <Link
        onClick={
          () => {this.handleLogoutClick();
                 this.props.toggle()}
        }
        to='/'
        className='side-drawer__text-link'
      >
        Log Out
      </Link>
    )
  };

  renderLoginLink() {
    return (
      <Link
        onClick={() => this.props.toggle()}
        to='/register'
        className='side-drawer__text-link'
      >
        Register
      </Link>
    )
  };

  render() {
    let drawerClasses;
    this.props.show ? drawerClasses = 'side-drawer open' : drawerClasses = 'side-drawer'

    return (
      <nav className={drawerClasses}>
        <div className='side-drawer__navbar-nav-items'>
          <Link to={'/joblist'} className='side-drawer__text-link' onClick={this.props.toggle}>
            Job List
          </Link>
          <Link to={'/addlisting'} className='side-drawer__text-link' onClick={this.props.toggle}>
            Add Listing
          </Link>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </nav>
    )
  };
};

export default SideDrawer;