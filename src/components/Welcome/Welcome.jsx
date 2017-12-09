import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  
  render() { 
    return (
    <div>
      Welcome to the app!
      <div className="register">
            Link your bank account <Link to="/link-account">here</Link>
        </div>
    </div>
    );
  }
}

export default Welcome;
