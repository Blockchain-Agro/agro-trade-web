import React from 'react';
import axios from 'axios';


import './VendorStyle.css';
import Navbar from '../vendorProfileNavbar';
import { withRouter } from 'react-router-dom';
import Portis from '../../../api/portis';
import IPFS from '../../../api/ipfs';
const SERVER_ADDRESS = 'http://localhost:3001';


class VendorLoginrofile extends React.Component {

  constructor(props) {
      super(props);
      this.state = JSON.parse(sessionStorage.user); //this.props.location.state;
      //sessionStorage.user = JSON.stringify(this.state);
        //this.state = JSON.parse(sessionStorage.user);

  }

 // Setstatefrommysql()
 // {
 //     const data = {
 //       email,
 //       password,
 //     }
 //    const response = await axios.post(SERVER_ADDRESS + '/fetch-data', data);
 //  }

  render() {
    return (
        <div>
        <Navbar/>
     <div className="vendorLoginForm">

      <form onSubmit={this.handleSubmit}>

      <div id="cid_1" class="form-input-wide" data-type="control_head">
        <div class="form-header-group ">
        <div class="header-text httal htvam">
        <h1 id="header_1" class="form-header" data-component="header">
        VENDOR PROFILE
        </h1>
        </div>
        </div>
      </div>
      <ul class="form-section page-section">

      <li class="form-line jf-required" data-type="control_textbox" id="id_2">
        <label class="form-label form-label-left form-label-auto" id="label_2" for="input_2">
        NAME
        <span class="form-required">
        </span>
        </label>
        <div id="cid_2" class="form-input jf-required">
          <h5>{this.state.fname}</h5>
        </div>
      </li>


      <li class="form-line jf-required" data-type="control_textbox" id="id_5">
        <label class="form-label form-label-left form-label-auto" id="label_5" for="input_5">
          EMAIL
          <span class="form-required">

          </span>
        </label>
        <div id="cid_5" class="form-input jf-required"><h5>{this.state.email}</h5>
        </div>
      </li>

      <li class="form-line jf-required" data-type="control_textbox" id="id_5">
        <label class="form-label form-label-left form-label-auto" id="label_5" for="input_5">
          CONTACT NO.
          <span class="form-required">

          </span>
        </label>
        <div id="cid_5" class="form-input jf-required"><h5>{this.state.phone}</h5>
        </div>
      </li>

            <li class="form-line jf-required" data-type="control_textbox" id="id_5">
        <label class="form-label form-label-left form-label-auto" id="label_5" for="input_5">
          ADRESS
          <span class="form-required">

          </span>
        </label>
        <div id="cid_5" class="form-input jf-required"><h5>{this.state.address}</h5>
        </div>
      </li>


            <li class="form-line jf-required" data-type="control_textbox" id="id_5">
        <label class="form-label form-label-left form-label-auto" id="label_5" for="input_5">
          CITY
          <span class="form-required">

          </span>
        </label>
        <div id="cid_5" class="form-input jf-required"><h5>{this.state.city}</h5>
        </div>
      </li>

            <li class="form-line jf-required" data-type="control_textbox" id="id_5">
        <label class="form-label form-label-left form-label-auto" id="label_5" for="input_5">
          STATE
          <span class="form-required">

          </span>
        </label>
        <div id="cid_5" class="form-input jf-required"><h5>{this.state.state}</h5>
        </div>
      </li>

                  <li class="form-line jf-required" data-type="control_textbox" id="id_5">
        <label class="form-label form-label-left form-label-auto" id="label_5" for="input_5">
          ZIP
          <span class="form-required">

          </span>
        </label>
        <div id="cid_5" class="form-input jf-required"><h5>{this.state.zip}</h5>
        </div>
      </li>


    </ul>
      </form>
      </div>
      </div>
    );
  }
}

export default withRouter(VendorLoginrofile);
