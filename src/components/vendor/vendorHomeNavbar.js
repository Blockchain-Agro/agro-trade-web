import React from 'react';
import { Link } from 'react-router-dom';
import './NavStyle.scss'

export default class Navbar extends React.Component {
  state = {
    wallet:'',
  };

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">AgroTrade</a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            
              <li className="nav-item active">
                <Link to="/vendorLogin" className="nav-link">Login</Link>
              </li>

              <li className="nav-item active">
                <Link to="/vendor" className="nav-link">SignUp</Link>
              </li>
            </ul>
          </div>

        </nav>
    );
  }
}
