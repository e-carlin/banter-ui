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

    // componentDidMount() {
    //     this.props.registerUser();
    // };

    handleSubmit = (e) => {
    e.preventDefault();

    this.props.registerUser();
    // register(this.state.email, this.state.password)
    // .then((res) => {
    //     console.log(res);
    //     this.setState({redirect: true});
    // });
  };

    render() {
        if(this.props.success) {
          return <Redirect to='/'/>;
        }
        else if (this.props.hasErrored) {
            return <p>Sorry! There was an error registering</p>;
        }

        else if (this.props.isPending) {
            return <p>Loading…</p>;
        }

        else {
            return (
              <div className="login-container">
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
        //     return (
        //     <div>
        //     GOING TO RENDER:
        //         <ul>
        //             {this.props.registration.map((item) => (
        //                 <li key={item.id}>
        //                     {item.label}
        //                 </li>
        //             ))}
        //         </ul>
        //     </div>
        // );

        }
    }
};

Register.propTypes = {
    success: PropTypes.bool.isRequired,
    hasErrored: PropTypes.bool.isRequired,
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
        registerUser: () => dispatch(registerUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

