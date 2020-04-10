import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/other/Home/Home';
import Farmer from './components/farmer/Farmer';
import FarmerLoginProfile from './components/farmer/FarmerLoginProfile';
import FarmerLogin from './components/farmer/FarmerLogin';
import Vendor from './components/vendor/Vendor';
import VendorLoginProfile from './components/vendor/VendorLoginProfile';
import VendorLogin from './components/vendor/VendorLogin';
import Productvendor from './components/vendor/Productvendor'
import ProductInfoVendor from './components/vendor/Productinfovendor'
import PendingProduct from './components/farmer/PendingProduct';
import PPendingProduct from './components/vendor/PendingProduct';
import BoughtProduct from './components/vendor/BoughtProduct';
import VendorNotification from './components/vendor/VendorNotification';
import SoldProduct from './components/farmer/SoldProduct';
import FarmerNotification from './components/farmer/FarmerNotification';
import FarmerProfile from './components/farmer/FarmerProfile';
import VendorProfile from './components/vendor/VendorProfile';


export default class Routes extends Component {
  render () {
    return (
      <BrowserRouter>

        <Route exact path="/" component={ Home } />
        <Route path="/farmer" component={ Farmer } />

        <Route path="/vendor" component={ Vendor } />
        <Route path="/productvendor" component={ Productvendor }/>
        <Route path="/vendorProfile" component={ VendorProfile } />
        <Route path="/productInfoVendor" component={ ProductInfoVendor } />
        <Route path="/vendorLogin" component={ VendorLogin } />
        <Route path="/pendingProductVendor" component={ PPendingProduct } />
        <Route path="/boughtProduct" component={ BoughtProduct } />
        <Route path="/vendorNotification" component={ VendorNotification } />
        <Route path="/vendorLoginProfile" component={ VendorLoginProfile } />

        <Route path="/farmerProfile" component={ FarmerProfile } />
        <Route path="/farmerLoginProfile" component={ FarmerLoginProfile } />
        <Route path="/farmerLogin" component={ FarmerLogin } />
        <Route path="/pendingProductFarmer" component={ PendingProduct } />
        <Route path="/soldProduct" component={ SoldProduct } />
        <Route path="/farmerNotification" component={ FarmerNotification } />
      </BrowserRouter>
    );
  };
}
