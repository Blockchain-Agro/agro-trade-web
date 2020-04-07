import React from 'react';
import { Link } from 'react-router-dom';
// import Portis from '@portis/web3';
import './NavStyle.scss'
// const portis = new Portis('4e5c7a30-2bbf-41db-92fa-0bbe1ae94d9b', 'mainnet');



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
                <Link to="/" className="nav-link">Home </Link>
              </li>
              <li className="nav-item active">
                <Link to="/Farmer" className="nav-link">Farmer </Link>
              </li>
                <li className="nav-item active">
                <Link to="/Productvendor" className="nav-link">Vendor </Link>
              </li>

            </ul>
          </div>


        </nav>

    );
  }

}
