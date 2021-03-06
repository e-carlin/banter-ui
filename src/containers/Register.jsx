import React, { Component } from 'react';
import { Link ,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../actions/userRegistration';

class Register extends Component {
    state = {
    email: '',
    password: '',
    redirect: false
  };

  handleChange = (e) => {
    return this.setState({
      [e.target.name]: e.target.value,
    });
  };

    handleSubmit = (e) => {
    e.preventDefault();
    this.props.registerUser(this.state.email, this.state.password);
  };

    render() {
        if(this.props.success) {
          return <Redirect to='/'/>;
        }

        else if (this.props.isPending) {
            return <p>Loading…</p>;
        }

        else {
            return (
              <div className="login-container">
              <div>{this.props.hasErrored}</div>
                <div className="login-form">
                  <h1>Register Here</h1>
                  <form onSubmit={this.handleSubmit}>
                    <input
                      name="email"
                      onChange={this.handleChange}
                      placeholder="Enter email"
                      type="text"
                      value={this.state.email}
                    />
                    <input
                      name="password"
                      onChange={this.handleChange}
                      placeholder="Enter Password"
                      type="password"
                      value={this.state.password}
                    />
                    <button type="submit">Submit</button>
                  </form>
                  <div className="register">
                    Already a user? Log in <Link to="/login">here</Link>
                  </div>
                </div>
              </div>
            );

        }
    }
};

Register.propTypes = {
    success: PropTypes.bool.isRequired,
    hasErrored: PropTypes.string.isRequired,
    isPending: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        success: state.userRegistrationSuccess,
        hasErrored: state.userRegistrationHasErrored,
        isPending: state.userRegistrationIsPending
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (email, password) => dispatch(registerUser(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

