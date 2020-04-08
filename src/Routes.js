import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/other/Home/Home';
import Farmer from './components/farmer/Farmer';
import Vendor from './components/vendor/Vendor';
import Productvendor from './components/vendor/Productvendor'
import ProductInfoVendor from './components/vendor/Productinfovendor'
import FarmerProfile from './components/farmer/FarmerProfile';


export default class Routes extends Component {
  render () {
    return (
      <BrowserRouter>

        <Route exact path="/" component={ Home } />
        <Route path="/farmer" component={ Farmer } />
        <Route path="/vendor" component={ Vendor } />
        <Route path="/productvendor" component={ Productvendor }/>
        <Route path="/farmerProfile" component={ FarmerProfile } />
        <Route path="/productinfovendor" component={ ProductInfoVendor } />
      </BrowserRouter>
    );
  };
}
