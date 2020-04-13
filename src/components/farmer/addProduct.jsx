import React, { Component } from 'react';
import Navbar from './farmerProfileNavbar';
import Calendar from 'react-calendar';
class FarmerProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cropname:'',
            price:0,
            quant : 0,
        }
    }

    state = {
        date: new Date(),
    }

onChange = date => this.setState({ date })


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
        PRODUCT NAME
        <span class="form-required">
        *
        </span>
        </label>
        <div id="cid_2" class="form-input jf-required">
          <input type="text" value={this.state.productname} onChange={this.handleChange} id="input_2" name="productname" data-type="input-textbox" class="form-textbox validate[required]" size="20"  placeholder=" " data-component="textbox" aria-labelledby="label_2" required="" />
        </div>
      </li>
            <li class="form-line" data-type="control_dropdown" id="id_13">
        <label class="form-label form-label-left form-label-auto" id="label_13" for="input_13"> TYPE OF CROP </label>
        <div id="cid_13" class="form-input">
          <select class="form-dropdown" id="input_13" name="q13_typeOf"  data-component="dropdown" aria-labelledby="label_13">
            <option value="">  </option>
            <option value="Fruit"> Fruit </option>
            <option value="Green"> Green </option>
            <option value="Starchy"> Starchy </option>
            <option value="Beans and Peas"> Beans and Peas </option>
            <option value="Other"> Other </option>
          </select>
        </div>
      </li>

      <li class="form-line jf-required" data-type="control_textbox" id="id_4">
        <label class="form-label form-label-left form-label-auto" id="label_4" for="input_4">
          EXPECTED PRICE per KG
          <span class="form-required">
            *
          </span>
        </label>
        <div id="cid_4" class="form-input jf-required">
          <input type="number" value={this.state.price} onChange={this.handleChange} id="input_4" name="price" data-type="input-textbox" class="form-textbox validate[required]" size="20"  placeholder=" " data-component="textbox" aria-labelledby="label_4" required="" />
        </div>
      </li>


      <li class="form-line jf-required" data-type="control_textbox" id="id_5">
        <label class="form-label form-label-left form-label-auto" id="label_5" for="input_5">
          TOTAL QUANTITY in KG
          <span class="form-required">
            *
          </span>
        </label>
        <div id="cid_5" class="form-input jf-required">
          <input type="text" value={this.state.quant} onChange={this.handleChange}id="input_5" name="quant" data-type="input-textbox" class="form-textbox validate[required]" size="20"  placeholder=" " data-component="textbox" aria-labelledby="label_5" required="" />
        </div>
      </li>

      <li class="form-line jf-required" data-type="control_textbox" id="id_5">
        <label class="form-label form-label-left form-label-auto" id="label_5" for="input_5" style={{marginRight:'30px'}}>
          EXPECTED EXPIRAY DATE
          <span class="form-required">
            *
          </span>
        </label>
        <Calendar style={{marginLeft:'30px', paddingLeft:'30px'}}
          onChange={this.onChange}
          value={this.state.date}
        />
      </li>


      <li class="form-line" data-type="control_button" id="id_12">
        <div id="cid_12" class="form-input-wide">
          <div style={{textalign:'center'}} class="form-buttons-wrapper ">
            <button id="input_12" type="submit" class="form-submit-button" data-component="button" data-content="">
              Submit
            </button>
          </div>
        </div>
      </li>

    </ul>


</div>

      </form>

        </div>
    );
  }
}

export default FarmerProfile;
