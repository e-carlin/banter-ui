import React, {Component} from 'react';
import PlaidLink from '../components/PlaidLink'

class PlaidLinkContainer extends Component {
    // static propTypes...

    constructor(props, context) {
        super(props, context);
        this.state = {
          open: false,
          plaidData: [],
        }
      }

    render() {
        return (
            <div>
            <button onClick={() => this.setState({ open: true})}>Open Plaid</button>
              {/* Don't pull PlaidLink into one tag (ie <PlaidLink open={this.state.open} />). 
                It is needed for proper render. TODO: Why is it actually needed?  */}
              <PlaidLink open={this.state.open} >
              </PlaidLink>
          </div>
        );
    }
}

export default PlaidLinkContainer;