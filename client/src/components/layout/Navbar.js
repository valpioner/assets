import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

import './navbar.scss';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const icons = {
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box align-middle"><path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line></svg>
      ),
      msg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle align-middle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      ),
      settings: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings align-middle"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
      ),
      profile: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user align-middle mr-1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      ),
      signOut: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out align-middle mr-2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
      )
    };

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/ads">Ad Feed</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/map">Map</Link>
        </li>

        <li className="nav-item">
          <a href="" className="nav-link" onClick={this.onLogoutClick.bind(this)} >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: '40px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />{' '}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand navbar-light bg-white">
        <div className="container">
          <div className="navbar-collapse collapse">
            <a className="brand" href="#">
              {icons.logo}
              <span className="align-middle">Assets For Rent</span>
            </a>
            <ul className="navbar-nav ml-auto">
              <a href="#" className="btn btn-primary mr-2">+ POST NEW AD</a>
              <li className="nav-item dropdown">
                <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-toggle="dropdown" aria-expanded="false">
                  <div className="position-relative">
                    {icons.msg}
                    <span className="indicator">4</span>
                  </div>
                </a>

                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0" aria-labelledby="messagesDropdown">
                  <div className="dropdown-menu-header">
                    <div className="position-relative">4 New Messages</div>
                  </div>

                  <div className="list-group">
                    <a href="#" className="list-group-item">
                      <div className="row no-gutters align-items-center">
                        <div className="col-2">
                          <img className="avatar img-fluid rounded-circle"
                            src={user.avatar} alt={user.name}
                            title="You must have a Gravatar connected to your email to display an image" />
                        </div>
                        <div className="col-10 pl-2">
                          <div>Ashley Briggs</div>
                          <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                          <div className="text-muted small mt-1">15m ago</div>
                        </div>
                      </div>
                    </a>

                    <a href="#" className="list-group-item">
                      <div className="row no-gutters align-items-center">
                        <div className="col-2">
                          <img className="avatar img-fluid rounded-circle mr-1"
                            src={user.avatar} alt={user.name}
                            title="You must have a Gravatar connected to your email to display an image" />
                        </div>
                        <div className="col-10 pl-2">
                          <div className="text-dark">Carl Jenkins</div>
                          <div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
                          <div className="text-muted small mt-1">2h ago</div>
                        </div>
                      </div>
                    </a>

                    <a href="#" className="list-group-item">
                      <div className="row no-gutters align-items-center">
                        <div className="col-2">
                          <img className="avatar img-fluid rounded-circle mr-1"
                            src={user.avatar} alt={user.name}
                            title="You must have a Gravatar connected to your email to display an image" />
                        </div>
                        <div className="col-10 pl-2">
                          <div className="text-dark">Stacie Hall</div>
                          <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
                          <div className="text-muted small mt-1">4h ago</div>
                        </div>
                      </div>
                    </a>

                    <a href="#" className="list-group-item">
                      <div className="row no-gutters align-items-center">
                        <div className="col-2">
                          <img className="avatar img-fluid rounded-circle mr-1"
                            src={user.avatar} alt={user.name}
                            title="You must have a Gravatar connected to your email to display an image" />
                        </div>
                        <div className="col-10 pl-2">
                          <div className="text-dark">Bertha Martin</div>
                          <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
                          <div className="text-muted small mt-1">5h ago</div>
                        </div>
                      </div>
                    </a>

                  </div>

                  <div className="dropdown-menu-footer">
                    <a href="#" className="text-muted">Show all messages</a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" data-toggle="dropdown" aria-expanded="false">
                  <span className="d-inline-block d-md-none">
                    {icons.settings}
                  </span>
                  <span className="d-none d-sm-inline-block">
                    <img
                      className="avatar img-fluid rounded-circle mr-1"
                      src={user.avatar}
                      alt={user.name}
                      title="You must have a Gravatar connected to your email to display an image"
                    />
                    <span className="text-dark mr-1 ml-1">{user.name}</span>
                  </span>
                </a>

                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                  <Link className="dropdown-item" to="/profile">
                    {icons.profile}
                    Profile
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">Help Center</Link>
                  <Link className="dropdown-item" to="#">Privacy</Link>
                  <Link className="dropdown-item" to="#">Terms of Service</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#" onClick={this.onLogoutClick.bind(this)}>
                    {icons.signout}
                    Sign out
                  </Link>
                </div>

              </li>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
