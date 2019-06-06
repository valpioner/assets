import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import Spinner from '../common/Spinner';
import { getProfileByHandle } from '../../actions/profileActions';

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        // <div>
        //   <div className="row">
        //     <div className="col-md-6">
        //       <Link to="/profiles" className="btn btn-light mb-3 float-left">
        //         Back To Profiles
        //       </Link>
        //     </div>
        //     <div className="col-md-6" />
        //   </div>
        //   <ProfileHeader profile={profile} />
        //   <ProfileAbout profile={profile} />
        //   <ProfileCreds
        //     education={profile.education}
        //     experience={profile.experience}
        //   />
        //   {profile.githubusername ? (
        //     <ProfileGithub username={profile.githubusername} />
        //   ) : null}
        // </div>
        <div className="row">
          <div className="col-md-4 col-xl-3">
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
          </div>

          <div className="col-md-8 col-xl-9">
            <div className="card">
              <div className="card-header">
                <div className="card-actions float-right">
                  <div className="dropdown show">
                    <a href="#" data-toggle="dropdown" data-display="static">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal align-middle"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                    </a>

                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
                <h5 className="card-title mb-0">Activities</h5>
              </div>
              <div className="card-body h-100">

                <div className="media">
                  <img src={profile.user.avatar} width="36" height="36" className="rounded-circle mr-2" alt="Ashley Briggs" />
                  <div className="media-body">
                    <small className="float-right text-navy">5m ago</small>
                    <strong>Ashley Briggs</strong> started following <strong>Stacie Hall</strong><br />
                    <small className="text-muted">Today 7:51 pm</small><br />
                  </div>
                </div>

                <hr />
                <div className="media">
                  <img src={profile.user.avatar} width="36" height="36" className="rounded-circle mr-2" alt="Chris Wood" />
                  <div className="media-body">
                    <small className="float-right text-navy">30m ago</small>
                    <strong>Chris Wood</strong> posted something on <strong>Stacie Hall</strong>'s timeline<br />
                    <small className="text-muted">Today 7:21 pm</small>

                    <div className="border text-sm text-muted p-2 mt-1">
                      Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
                      pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
              </div>

                    <a href="#" className="btn btn-sm btn-danger mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart feather-sm"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> Like</a>
                  </div>
                </div>

                <hr />
                <div className="media">
                  <img src={profile.user.avatar} width="36" height="36" className="rounded-circle mr-2" alt="Stacie Hall" />
                  <div className="media-body">
                    <small className="float-right text-navy">1h ago</small>
                    <strong>Stacie Hall</strong> posted a new blog<br />

                    <small className="text-muted">Today 6:35 pm</small>
                  </div>
                </div>

                <hr />
                <div className="media">
                  <img src={profile.user.avatar} width="36" height="36" className="rounded-circle mr-2" alt="Carl Jenkins" />
                  <div className="media-body">
                    <small className="float-right text-navy">3h ago</small>
                    <strong>Carl Jenkins</strong> posted two photos on <strong>Stacie Hall</strong>'s timeline<br />
                    <small className="text-muted">Today 5:12 pm</small>

                    <div className="row no-gutters mt-1">
                      <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                        <img src={profile.user.avatar} className="img-fluid pr-2" alt="Unsplash" />
                      </div>
                      <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                        <img src={profile.user.avatar} className="img-fluid pr-2" alt="Unsplash" />
                      </div>
                    </div>

                    <a href="#" className="btn btn-sm btn-danger mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart feather-sm"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> Like</a>
                  </div>
                </div>

                <hr />
                <div className="media">
                  <img src={profile.user.avatar} width="36" height="36" className="rounded-circle mr-2" alt="Carl Jenkins" />
                  <div className="media-body">
                    <small className="float-right text-navy">1d ago</small>
                    <strong>Carl Jenkins</strong> started following <strong>Stacie Hall</strong><br />
                    <small className="text-muted">Yesterday 3:12 pm</small>

                    <div className="media mt-1">
                      <a className="pr-3" href="#">
                        <img src={profile.user.avatar} width="36" height="36" className="rounded-circle mr-2" alt="Stacie Hall" />
                      </a>
                      <div className="media-body">
                        <div className="border text-sm text-muted p-2 mt-1">
                          Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
                  </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />
                <div className="media">
                  <img src={profile.user.avatar} width="36" height="36" className="rounded-circle mr-2" alt="Stacie Hall" />
                  <div className="media-body">
                    <small className="float-right text-navy">1d ago</small>
                    <strong>Stacie Hall</strong> posted a new blog<br />
                    <small className="text-muted">Yesterday 2:43 pm</small>
                  </div>
                </div>

                <hr />
                <div className="media">
                  <img src={profile.user.avatar} width="36" height="36" className="rounded-circle mr-2" alt="Chris Wood" />
                  <div className="media-body">
                    <small className="float-right text-navy">1d ago</small>
                    <strong>Chris Wood</strong> started following <strong>Stacie Hall</strong><br />
                    <small className="text-muted">Yesterdag 1:51 pm</small>
                  </div>
                </div>

                <hr />
                <a href="#" className="btn btn-primary btn-block">Load more</a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="profile container mt-5">
        {profileContent}
      </div>
    );
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
