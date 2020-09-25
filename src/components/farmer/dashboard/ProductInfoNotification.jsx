import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './../style.css'
import Navbar from './../farmerProfileNavbar';
import axios from 'axios'

const SERVER_ADDRESS = 'http://localhost:3001';
class FarmerProductInfo extends Component {
  constructor(props) {


      super(props);
      console.log('this.props ==>', this.props);
            this.state = {
            id: this.props.location.state.id,
            product_name: this.props.location.state.product_name,
            type_crop:this.props.location.state.type_crop,
            price_per_kg:this.props.location.state.price_per_kg,
            quantity_in_kg:this.props.location.state.quantity_in_kg,
            vendor_contact:this.props.location.state.vendor_contact,
            vendor_name:this.props.location.state.vendor_name,
            vendor_address: this.props.location.state.vendor_address,
            farmer_address: JSON.parse(sessionStorage.user).ethAddress
        }

          this.accept = this.accept.bind(this);
          this.deny = this.deny.bind(this);
  }

  async accept(event){
    event.preventDefault();
    const data = {
      id:this.state.id,
      vendorEthAddress: this.state.vendor_address,
      farmerEthAddress: this.state.farmer_address
    };

    const response = await axios.post(SERVER_ADDRESS + '/accept',data);

    if (response) {
        alert('Request accepted!');
    }
  }

  async deny(event){
    event.preventDefault();
    const data = {
        id:this.state.id,
        vendorEthAddress: this.state.vendor_address,
        farmerEthAddress: this.state.farmer_address
    };

    const isSuccessfullyUpdated = await axios.post(SERVER_ADDRESS + '/deny',data);
    if (isSuccessfullyUpdated) {
        alert('Request cancelled!');
    }
  }

  render () {

    return (
        <div>

            <Navbar id={this.state.id}/>

                 <form onSubmit={this.handleSubmit} class="jotform-form">

            <input type="hidden" name="formID" value="200412672853451" />
  <input type="hidden" id="JWTContainer" value="" />
  <input type="hidden" id="cardinalOrderNumber" value="" />
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
        TYPE OF CROP
        <span class="form-required">
        </span>
        </label>
        <div id="cid_2" class="form-input jf-required">
          <h5>{this.state.type_crop}</h5>
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
        VENDOR NAME
        <span class="form-required">
        </span>
        </label>
        <div id="cid_2" class="form-input jf-required">
          <h5>{this.state.vendor_name}</h5>
        </div>
      </li>

                  <li class="form-line jf-required" data-type="control_textbox" id="id_2">
        <label class="form-label form-label-left form-label-auto" id="label_2" for="input_2">
        VENDOR CONTACT
        <span class="form-required">
        </span>
        </label>
        <div id="cid_2" class="form-input jf-required">
          <h5>{this.state.vendor_contact}</h5>
        </div>
      </li>


    </ul>


</div>
<div>
  <Button onClick = {this.accept} style={{marginRight:'30px'}}>Accept</Button>
  <Button onClick = {this.deny} style={{marginRight:'30px'}}>Deny</Button>
</div>

      </form>

        </div>    )
  }
}

export default FarmerProductInfo;
//
