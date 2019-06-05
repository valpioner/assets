import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './footer.scss';

function Footer({ location: { pathname } }) {
  const hideFooter = pathname === '/login' || pathname === '/register'

  return (
    hideFooter ? null :
      <footer className="text-center">
        <div className="container">
          <div className="row text-muted">
            <div className="col-6 text-left">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a className="text-muted" href="#">Support</a>
                </li>
                <li className="list-inline-item">
                  <a className="text-muted" href="#">Help Center</a>
                </li>
                <li className="list-inline-item">
                  <a className="text-muted" href="#">Privacy</a>
                </li>
                <li className="list-inline-item">
                  <a className="text-muted" href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className="col-6 text-right">
              <p className="mb-0">
                © {new Date().getFullYear()} - <a href="#" className="text-muted">Assets For Rent</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default withRouter(Footer);

