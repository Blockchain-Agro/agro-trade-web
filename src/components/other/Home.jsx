import React, { Component } from 'react';
import "./home.css";
import NavbarHome from './NavbarHome.js';

export default class Home extends Component {
  render () {
    return (

     <div className="bg">
     <NavbarHome/>
     <label  class="agro">Agrotrade</label>
     <h1 class="pad">A Blockchain Based Decentralized Platform for Trading Agricultural Products
		</h1>
     </div>
    );
  };
};
