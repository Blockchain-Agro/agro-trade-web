import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import './../FarmerStyle.css';
import Navbar from './../FarmarNavbar';
// import Portis from '../../api/portis';
import IPFS from '../../../api/ipfs';
import Utils from '../../../contracts/utils';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: null,
      fname:'',
      mname: '',
      lname:'',
      email:'',
      password:'',
      street:'',
      block:'',
      city:'',
      state:'',
      zip:'',
      phone: '',
      areaCode: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
}

  async handleSubmit(event) {
    event.preventDefault();
    console.log('inside handle submit')
    // const address = await Portis.connectPortis();
    const address = await Utils.getAccountForFarmer();
    console.log('web account address :', address);

    this.setState({
        account: address,
    })

    // post request with all the input params
    const { fname, mname, lname, email, street, block, city, state, zip, phone } = this.state;

    const dataForIpfs = {
        ethereumAddress: address,
        fname,
        mname,
        lname,
        email,
        street,
        block,
        city,
        state,
        zip,
        phone,
    }
    const ipfsHash = await IPFS.getIpfsHash(dataForIpfs);

    // TO DO : remove this later
    // const ipfsHash = 'QmPmeKnFTW6DTGMHvy46tfGEoTP8QUa4ePWjZrcgxRw31n';
    console.log('IPFS hash :-', ipfsHash);

    const password = this.state.password;
    const data = {
        ethAddress: address,
        ipfsHash,
        fname: this.state.fname,
        mname: this.state.mname,
        lname: this.state.lname,
        email: this.state.email,
        address: this.state.street + this.state.block,
        city: this.state.city,
        state: this.state.state,
        phone: this.state.phone,
        zip: this.state.zip,
        password,
    }

    console.log('Data to db :-', data);

    const status = axios
      .post('http://localhost:3001/create-farmer', data)
      .then(() => console.log('Farmer added'))
      .catch(err => {
        console.error(err);
      });

    if(status) {
        delete data.password;
        sessionStorage.user = JSON.stringify(data);
        console.log('Data added in session');
        this.props.history.push({
            pathname: '../farmerLoginProfile'
        });
    }
  }

  render() {
    return (
        <div>
        <Navbar/>
      <div className="farmerLoginForm">

      <form onSubmit={this.handleSubmit}>

			<div id="cid_1" class="form-input-wide" data-type="control_head">
				<div class="form-header-group ">
				    <div class="header-text httal htvam">
                        <h1 id="header_1" class="form-header" data-component="header">
                            FARMER SIGN UP
                        </h1>
				    </div>
				</div>
			</div>
			<ul class="form-section page-section">

			<li class="form-line jf-required" data-type="control_textbox" id="id_2">
				<label class="form-label form-label-left form-label-auto" id="label_2" for="input_2">
				    FIRST NAME
				    <span class="form-required">
				        *
				    </span>
				</label>
				<div id="cid_2" class="form-input jf-required">
					<input type="text" value={this.state.fname} onChange={this.handleChange} id="input_2" name="fname" data-type="input-textbox" class="form-textbox validate[required]" size="20"  placeholder=" " data-component="textbox" aria-labelledby="label_2" required="" />
				</div>
			</li>

            <li class="form-line jf-required" data-type="control_textbox" id="id_2">
				<label class="form-label form-label-left form-label-auto" id="label_2" for="input_2">
				MIDDLE NAME
				<span class="form-required">
				*
				</span>
				</label>
				<div id="cid_2" class="form-input jf-required">
					<input type="text" value={this.state.mname} onChange={this.handleChange} id="input_3" name="mname" data-type="input-textbox" class="form-textbox validate[required]" size="20"  placeholder="" data-component="textbox" aria-labelledby="label_2" required="" />
				</div>
			</li>

			<li class="form-line jf-required" data-type="control_textbox" id="id_3">
				<label class="form-label form-label-left form-label-auto" id="label_3" for="input_3">
				LAST NAME
				<span class="form-required">
				*
				</span>
				</label>
			<div id="cid_3" class="form-input jf-required">
				<input type="text" value={this.state.lname} onChange={this.handleChange} id="input_4" name="lname" data-type="input-textbox" class="form-textbox validate[required]" size="20" placeholder=" " data-component="textbox" aria-labelledby="label_3" required="" />
			</div>
			</li>

      <li class="form-line jf-required" data-type="control_textbox" id="id_5">
        <label class="form-label form-label-left form-label-auto" id="label_5" for="input_5">
          EMAIL
          <span class="form-required">
            *
          </span>
        </label>
        <div id="cid_5" class="form-input jf-required">
          <input type="email" value={this.state.email} onChange={this.handleChange}id="input_5" name="email" data-type="input-textbox" class="form-textbox validate[required]" size="20"  placeholder=" " data-component="textbox" aria-labelledby="label_5" required="" />
        </div>
      </li>

      <li class="form-line jf-required" data-type="control_textbox" id="id_4">
        <label class="form-label form-label-left form-label-auto" id="label_4" for="input_4">
          Password
          <span class="form-required">
            *
          </span>
        </label>
        <div id="cid_4" class="form-input jf-required">
          <input type="password" value={this.state.password} onChange={this.handleChange} id="input_4" name="password" data-type="input-textbox" class="form-textbox validate[required]" size="20"  placeholder=" " data-component="textbox" aria-labelledby="label_4" required="" />
        </div>
      </li>


      <li class="form-line" data-type="control_phone" id="id_11">
        <label class="form-label form-label-left form-label-auto" id="label_11" for="input_11_area">
            Phone Number
        </label>
        <div id="cid_11" class="form-input">
          <div data-wrapper-react="true">
            <span class="form-sub-label-container " style={{verticalalign:'top'}}>
              <input type="tel" value={this.state.phone} onChange={this.handleChange} id="input_11_phone" name="phone" class="form-textbox" size="20"  data-component="phone" aria-labelledby="label_11 sublabel_11_phone" />
              <label class="form-sub-label" for="input_11_phone" id="sublabel_11_phone" style={{minheight:"13px"}} aria-hidden="false"> Phone Number </label>
            </span>
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_address" id="id_9">
        <label class="form-label form-label-left form-label-auto" id="label_9" for="input_9_addr_line1"> Farmer Address </label>
        <div id="cid_9" class="form-input">
          <table summary="" class="form-address-table">
            <tbody>
              <tr>
                <td colSpan="2">
                  <span class="form-sub-label-container " style={{verticalalign:'top'}}>
                    <input type="text" value={this.state.street} onChange={this.handleChange} name="street"  class="form-textbox form-address-line" data-component="address_line_1" aria-labelledby="label_9 sublabel_9_addr_line1" />
                    <label class="form-sub-label" for="input_9_addr_line1" id="sublabel_9_addr_line1" style={{minheight:"13px"}} aria-hidden="false"> Street Address </label>
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <span class="form-sub-label-container " style={{verticalalign:'top'}}>
                    <input type="text" name="block" value={this.state.block} onChange={this.handleChange} class="form-textbox form-address-line" size="46"  data-component="address_line_2" aria-labelledby="label_9 sublabel_9_addr_line2" />
                    <label class="form-sub-label" for="input_9_addr_line2" id="sublabel_9_addr_line2" style={{minheight:"13px"}} aria-hidden="false"> Block number </label>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="form-sub-label-container " style={{verticalalign:'top'}}>
                    <input type="text"  name="city" value={this.state.city} onChange={this.handleChange} class="form-textbox form-address-city" size="21" data-component="city" aria-labelledby="label_9 sublabel_9_city" />
                    <label class="form-sub-label" for="input_9_city" id="sublabel_9_city" style={{minheight:"13px"}} aria-hidden="false"> City </label>
                  </span>
                </td>
                <td>
                  <span class="form-sub-label-container " style={{verticalalign:'top'}}>
                    <input type="text" name="state" value={this.state.state} onChange={this.handleChange} class="form-textbox form-address-state" size="22" data-component="state" aria-labelledby="label_9 sublabel_9_state" />
                    <label class="form-sub-label" for="input_9_state" id="sublabel_9_state" style={{minheight:"13px"}} aria-hidden="false"> State / Province </label>
                  </span>
                </td>
              </tr>
                <td>
                  <span class="form-sub-label-container " style={{verticalalign:'top'}}>
                    <input type="number"  name="zip" value={this.state.zip} onChange={this.handleChange} class="form-textbox form-address-postal" size="10"  data-component="zip" aria-labelledby="label_9 sublabel_9_postal" />
                    <label class="form-sub-label" for="input_9_postal" id="sublabel_9_postal" style={{minheight:"13px"}} aria-hidden="false"> Postal / Zip Code </label>
                  </span>
                </td>
            </tbody>
          </table>
        </div>
      </li>
      <li class="form-line" data-type="control_button" id="id_12">
        <div id="cid_12" class="form-input-wide">
          <div style={{textalign:'center'}} class="form-buttons-wrapper ">
            <button id="input_12"  type="submit" class="form-submit-button" data-component="button" data-content="">
              Submit
            </button>
          </div>
        </div>
      </li>

		</ul>
      </form>
      </div>
      </div>
    );
  }
}

export default withRouter(Signup);
