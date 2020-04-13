import React from 'react';
import { Link } from 'react-router-dom';
import './NavStyle.scss'
import { Button} from 'reactstrap';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: this.props.fname,
            lname: this.props.lname
        }

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
                <Link to="/vendorProfile" className="nav-link">Product</Link>
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
          <Button variant="contained"  color="secondary" id="Logout">Logout</Button>
        </nav>

    );
  }
}
