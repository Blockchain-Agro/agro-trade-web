import React, { Component } from 'react';
import './../style.css'
import Navbar from '../vendorProfileNavbar';

class VendorProductInfo extends Component {
  constructor(props) {
    super(props);
            this.state = {
            product_name: this.props.location.state.product_name,
            type_crop:this.props.location.state.type_crop,
            price_per_kg:this.props.location.state.price_per_kg,
            quantity_in_kg:this.props.location.state.quantity_in_kg,
            expiry_date:this.props.location.state.expiry_date
        }
  }

  render () {

    return (
        <div>

            <Navbar />

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
        EXPIRY DATE
        <span class="form-required">
        </span>
        </label>
        <div id="cid_2" class="form-input jf-required">
          <h5>{this.state.expiry_date}</h5>
        </div>
      </li>
            

    </ul>

    
</div>

      </form>

        </div>    )
  }
}

export default VendorProductInfo;