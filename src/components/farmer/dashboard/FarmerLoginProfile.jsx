import React from 'react';
import { withRouter } from 'react-router-dom';

import './../NavStyle.scss';
import Navbar from '../farmerProfileNavbar';

class FarmerLoginrofile extends React.Component {

    constructor(props) {
        super(props);
        this.state = JSON.parse(sessionStorage.user);
    }

  render() {
    console.log(this.state);
    return (
        <div>
        <Navbar/>
     <div className="farmerLoginForm">

      <form onSubmit={this.handleSubmit}>

      <div id="cid_1" class="form-input-wide" data-type="control_head">
        <div class="form-header-group ">
        <div class="header-text httal htvam">
        <h1 id="header_1" class="form-header" data-component="header">
        FARMER PROFILE
        </h1>
        </div>
        </div>
      </div>
      <ul class="form-section page-section">

      <li class="form-line jf-required" data-type="control_textbox" id="id_2">
        <label class="form-label form-label-left form-label-auto" id="label_2" for="input_2">
        FIRST NAME
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

export default withRouter(FarmerLoginrofile);
