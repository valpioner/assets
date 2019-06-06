import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card mb-3">
        <div className="card-header">
          <h5 className="card-title mb-0">Profile Details</h5>
        </div>
        <div className="card-body text-center">
          <img src={profile.user.avatar} alt={profile.user.name} className="img-fluid rounded-circle mb-2" width="128" height="128" />
          <h5 className="card-title mb-0">{profile.user.name}</h5>
          <div className="text-muted mb-2">Lead Developer</div>

          <div>
            <a className="btn btn-primary btn-sm" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> Message</a>
          </div>
        </div>
        <hr className="my-0" />
        <div className="card-body">
          <h5 className="h6 card-title">Skills</h5>
          <a href="#" className="badge badge-primary mr-1 my-1">HTML</a>
          <a href="#" className="badge badge-primary mr-1 my-1">JavaScript</a>
          <a href="#" className="badge badge-primary mr-1 my-1">Sass</a>
          <a href="#" className="badge badge-primary mr-1 my-1">Angular</a>
          <a href="#" className="badge badge-primary mr-1 my-1">Vue</a>
          <a href="#" className="badge badge-primary mr-1 my-1">React</a>
          <a href="#" className="badge badge-primary mr-1 my-1">Redux</a>
          <a href="#" className="badge badge-primary mr-1 my-1">UI</a>
          <a href="#" className="badge badge-primary mr-1 my-1">UX</a>
        </div>
        <hr className="my-0" />
        <div className="card-body">
          <h5 className="h6 card-title">About</h5>
          <ul className="list-unstyled mb-0">
            <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home feather-sm mr-1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Lives in <a href="#">San Francisco, SA</a></li>

            <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase feather-sm mr-1"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> Works at <a href="#">GitHub</a></li>
            <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin feather-sm mr-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> From <a href="#">Boston</a></li>
          </ul>
        </div>
        <hr className="my-0" />
        <div className="card-body">
          <h5 className="h6 card-title">Elsewhere</h5>
          <ul className="list-unstyled mb-0">
            <li className="mb-1"><span className="fas fa-globe fa-fw mr-1"></span> <a href="#">staciehall.co</a></li>
            <li className="mb-1"><span className="fab fa-twitter fa-fw mr-1"></span> <a href="#">Twitter</a></li>
            <li className="mb-1"><span className="fab fa-facebook fa-fw mr-1"></span> <a href="#">Facebook</a></li>
            <li className="mb-1"><span className="fab fa-instagram fa-fw mr-1"></span> <a href="#">Instagram</a></li>
            <li className="mb-1"><span className="fab fa-linkedin fa-fw mr-1"></span> <a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
