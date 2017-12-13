import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  
  render() { 
    return (
    <div>
      Welcome to the app!
      <div className="login">
            Please login here <Link to="/user/login">here</Link>
        </div>
    </div>
    );
  }
}

export default Welcome;
