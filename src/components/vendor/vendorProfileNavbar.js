import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import './NavStyle.scss'
import { Button} from 'reactstrap';

class vendorProfileNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout()
    {
        sessionStorage.clear();
        alert("You have benn logged out!")
        this.props.history.push({
            pathname: '/',
        });
    }

  render() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">AgroTrade</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/vendorLoginProfile" className="nav-link">Vendor</Link>
              </li>
              <li className="nav-item active">
                <Link to="/productvendor" className="nav-link">Product</Link>
              </li>

              <li className="nav-item active">
                <Link to="/pendingProductVendor" className="nav-link">Pending Products</Link>
              </li>

              <li className="nav-item active">
                <Link to="/vendorNotification" className="nav-link">Notification</Link>
              </li>

               <li className="nav-item active">
                <Link to="/boughtProduct" className="nav-link">Bought Products</Link>
              </li>
            </ul>
          </div>
          <Button variant="contained"  color="secondary" id="Logout" onClick={this.logout}>Logout</Button>
        </nav>

    );
  }
}

export default withRouter(vendorProfileNavbar);