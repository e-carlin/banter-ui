import React, { Component } from 'react';
import PlaidLink from '../../containers/PlaidLink'


class Welcome extends Component {
  
  render() { 
    return (
    <div>
      Welcome to the app!
      {/* Keep the empty div below PlaidLink. It is needed in the render of the  */}
      <PlaidLink >
      <div></div>
      </PlaidLink>
    </div>
    );
  }
}

export default Welcome;
