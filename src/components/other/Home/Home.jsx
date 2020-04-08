import React, { Component } from 'react';
import "./home.css";
import NavbarHome from './NavbarHome.js';

export default class Home extends Component {
  render () {
    return (
     <div className="bg">
        <NavbarHome/>
        <label  class="agro">Agrotrade</label>
        <h1 class="pad">A Blockchain Based Decentralized Platform for Trading Agricultural Products</h1>
        <div className="network-image" />
        <div>
            <h2>Welcome to the world of blockchains</h2>
            <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.</p>
        </div>
     </div>
    );
  };
};
