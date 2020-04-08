import React, { Component } from 'react';
import "./home.css";
import Navbar from './Navbar.js';

export default class Home extends Component {
  render () {
    return (
     <div className="home">
        <Navbar/>
        <label  className="agro">AgroTrade</label>
        <h1 className="pad">A Blockchain Based Platform for Trading Agricultural Products</h1>
        <div className="network-image" />
        <div className="container">
            <div className="introduction">
                <h2>Welcome to the world of blockchains</h2>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
            </div>
            <h1>Description</h1>
            <div className="row">
                <div className="col-sm-6">
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
                <div className="col-sm-6 first-image"/>
            </div>
            <div className="row">
                <div className="col-sm-6 first-image"/>
                <div className="col-sm-6">
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
     </div>
    );
  };
};
