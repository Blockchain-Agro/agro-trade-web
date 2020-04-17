import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import FarmerSignUp from './components/farmer/signup/Signup';
import Home from './components/other/Home/Home';
import FarmerLoginProfile from './components/farmer/dashboard/FarmerLoginProfile'; // Profile info
import FarmerLogin from './components/farmer/login/FarmerLogin';
import VendorSignup from './components/vendor/signup/Signup';
import VendorLoginProfile from './components/vendor/dashboard/VendorLoginProfile';
import VendorLogin from './components/vendor/login/VendorLogin';
import ProductDisplay from './components/vendor/dashboard/ProductDisplay'
import ProductInfoVendor from './components/vendor/ProductInfoVendor'
import FarmerPendingProduct from './components/farmer/dashboard/PendingProduct';
import VendorPendingProduct from './components/vendor/dashboard/PendingProduct';
import BoughtProduct from './components/vendor/dashboard/BoughtProduct';
import VendorNotification from './components/vendor/dashboard/VendorNotification';
import SoldProduct from './components/farmer/dashboard/SoldProduct';
import FarmerNotification from './components/farmer/dashboard/FarmerNotification';
import AddProduct from './components/farmer/addProduct';
import FarmerProductInfo from './components/farmer/dashboard/FarmerProductInfo';
import VendorProductInfo from './components/vendor/dashboard/VendorProductInfo';
// import FarmerProductInfoSoldProduct from './components/farmer/cardInnerPages/';
import FarmerProductInfoNotification from './components/farmer/dashboard/ProductInfoNotification';
//   <Route path="/farmerProductInfoSoldProduct" component={ FarmerProductInfoSoldProduct } />

export default class Routes extends Component {
  render () {
    return (
      <BrowserRouter>

        <Route exact path="/" component={ Home } />
        <Route path="/farmer" component={ FarmerSignUp } />
      
        <Route path="/productInfoNotification" component={ FarmerProductInfoNotification } />
        
        <Route path="/vendor" component={ VendorSignup } />
        <Route path="/productvendor" component={ ProductDisplay }/>
        <Route path="/productInfoVendor" component={ ProductInfoVendor } />
        <Route path="/vendorLogin" component={ VendorLogin } />
        <Route path="/pendingProductVendor" component={ VendorPendingProduct } />
        <Route path="/boughtProduct" component={ BoughtProduct } />
        <Route path="/vendorNotification" component={ VendorNotification } />
        <Route path="/vendorLoginProfile" component={ VendorLoginProfile } />
        <Route path="/vendorProductInfo" component={ VendorProductInfo } />

        <Route path="/farmerProfile" component={ AddProduct } />
        <Route path="/farmerLoginProfile" component={ FarmerLoginProfile } />
        <Route path="/farmerLogin" component={ FarmerLogin } />
        <Route path="/pendingProductFarmer" component={ FarmerPendingProduct } />
        <Route path="/soldProduct" component={ SoldProduct } />
        <Route path="/farmerNotification" component={ FarmerNotification } />
        <Route path="/farmerProductInfo" component={ FarmerProductInfo } />
      </BrowserRouter>
    );
  };
}
