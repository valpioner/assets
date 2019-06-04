import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import TextFieldGroup from "../common/TextFieldGroup";

import './landing.scss';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };

    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    // this.props.registerUser(newUser, this.props.history);
  }

  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push('/map');
  //   }
  // }

  render() {
    const { errors } = this.state;

    return (
      // <div className="landing">
      //   <div className="landing-inner text-light">
      //     <div className="container">
      //       <div className="row">
      //         <div className="col-md-12 text-center">
      //           {/* <h1 className="display-3 mb-4">Landing</h1>
      //           <p className="lead">
      //             descr
      //           </p> */}
      //           {/* <Link to="/register" className="btn btn btn-info mr-2">
      //             Sign Up
      //           </Link>
      //           <Link to="/login" className="btn btn btn-light">
      //             Login
      //           </Link> */}
      //                 <input type="submit" className="btn btn-primary btn-block mt-3 mb-3" value="Search" />
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <div className="container h-100">

        <div className="row m-5">
          <div className="col-sm-10 col-md-8 col-lg-8 mx-auto d-table h-100">
            <div className="card">
              <div className="card-body">
                <form onSubmit={this.onSubmit} noValidate className="search-form">
                  <input
                    className={classnames('form-control form-control')}
                    placeholder="Search for rent"
                    name="search"
                    value={this.state.search}
                    onChange={this.onChange}
                  />

                  <input type="submit" className="btn btn-primary btn-block mt-4 mb-3" value="Search" />
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);