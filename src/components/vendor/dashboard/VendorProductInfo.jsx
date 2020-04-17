import React, { Component } from 'react';
import {Button} from 'reactstrap';
import './../style.css'
import Navbar from '../vendorProfileNavbar';
import axios from 'axios';

const SERVER_ADDRESS = 'http://localhost:3001';

class VendorProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        product_id : this.props.location.state.product_id,
        product_name : this.props.location.state.product_name,
        product_type : this.props.location.state.product_type,
        price_per_kg : this.props.location.state.price_per_kg,
        quantity_in_kg : this.props.location.state.quantity_in_kg,
        farmer_address : this.props.location.state.farmer_address,
        vendor_address : JSON.parse(sessionStorage.vendor).ethAddress
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event)
  { 
    event.preventDefault();
    const data = {
      product_id : this.state.product_id,
      farmer_address : this.state.farmer_address,
      vendor_address : this.state.vendor_address
    }
    console.log("data ready to be sent : ",data);
    const response = await axios.post(SERVER_ADDRESS + '/add-purchase-request-vendor', data);
    console.log("REceived data : ", response.data);
    if(response.data.status) 
    {
      alert("Your request for purchase has been recorded.\nRequest ID : " + response.data.id)
    }
    else
    {
      alert("You request for this product is already submitted.Please wait until approved/rejected by farmer");
    }
  }

  render () {

    return (
        <div>

      <Navbar />

  <form onSubmit={this.handleSubmit} class="jotform-form">

    <div role="main" class="form-all">
      <ul class="form-section page-section">

      <div id="cid_1" class="form-input-wide" data-type="control_head">
        <div class="form-header-group ">
        <div class="header-text httal htvam">
        <h1 id="header_1" class="form-header" data-component="header">
        PRODUCT INFORMATION
        </h1>
        </div>
        </div>
      </div>

      <li class="form-line jf-required" data-type="control_textbox" id="id_2">
        <label class="form-label form-label-left form-label-auto" id="label_2" for="input_2">
        NAME
        <span class="form-required">
        </span>
        </label>
        <div id="cid_2" class="form-input jf-required">
          <h5>{this.state.product_name}</h5>
        </div>
      </li>

        <li class="form-line jf-required" data-type="control_textbox" id="id_2">
        <label class="form-label form-label-left form-label-auto" id="label_2" for="input_2">
        Product ID
        <span class="form-required">
        </span>
        </label>
        <div id="cid_2" class="form-input jf-required">
          <h5>{this.state.product_id}</h5>
        </div>
      </li>

      
      <li class="form-line jf-required" data-type="control_textbox" id="id_2">
        <label class="form-label form-label-left form-label-auto" id="label_2" for="input_2">
        TYPE OF CROP
        <span class="form-required">
        </span>
        </label>
        <div id="cid_2" class="form-input jf-required">
          <h5>{this.state.product_type}</h5>
        </div>
      </li>

            <li class="form-line jf-required" data-type="control_textbox" id="id_2">
        <label class="form-label form-label-left form-label-auto" id="label_2" for="input_2">
        PRICE per KG
        <span class="form-required">
        </span>
        </label>
        <div id="cid_2" class="form-input jf-required">
          <h5>{this.state.price_per_kg}</h5>
        </div>
      </li>

            <li class="form-line jf-required" data-type="control_textbox" id="id_2">
        <label class="form-label form-label-left form-label-auto" id="label_2" for="input_2">
        TOTAL QUANTITY in KG
        <span class="form-required">
        </span>
        </label>
        <div id="cid_2" class="form-input jf-required">
          <h5>{this.state.quantity_in_kg}</h5>
        </div>
      </li>

            <li class="form-line jf-required" data-type="control_textbox" id="id_2">
        <label class="form-label form-label-left form-label-auto" id="label_2" for="input_2">
        Farmer Ethereum Address
        <span class="form-required">
        </span>
        </label>
        <div id="cid_2" class="form-input jf-required">
          <h5>{this.state.farmer_address}</h5>
        </div>
      </li>

    <Button type="submit"> Add request for purchase </Button>
            

    </ul>

    
</div>

      </form>

        </div>    )
  }
}

export default VendorProductInfo;