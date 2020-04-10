import React from 'react';
import { Link } from 'react-router-dom';
import './NavStyle.scss'
import { Button} from 'reactstrap';

export default class Navbar extends React.Component {
  state = {
    wallet:'',
  };

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
                <Link to="/" className="nav-link">Farmer </Link>
              </li>
              <li className="nav-item active">
                <Link to="/farmer" className="nav-link">Add Product </Link>
              </li>
                <li className="nav-item active">
                <Link to="/vendor" className="nav-link">Notifications </Link>
              </li>
            </ul>
          </div>

          </ul>
          <Button variant="contained"  color="secondary" id="Logout">Logout</Button>
        </nav>
    );
  }
}
