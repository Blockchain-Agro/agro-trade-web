import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './FarmerStyle.css';
import Navbar from './farmerhomenavbar';
import { withRouter } from 'react-router-dom';

// const SERVER_ADDRESS = 'http://localhost:3001';

class Farmer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      email:'',
      password:'',

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  shoot()
  {
    this.props.history.push({
        pathname: './farmer'
    });
  }

    handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

  async handleSubmit(event) {
    event.preventDefault();
    // TODO database part for checking farmer is present or not (IPFS remaining to do)

    const { email, password } = this.state;
    const data = {
      email,
      password,
    }

    const loginStatusResponse = await axios.post('http://localhost:3001/farmer-login', data);
    console.log('login status response :-', loginStatusResponse.data[0]);
    this.props.history.push({
        pathname: '../farmerLoginProfile',
        state: {
            fname: loginStatusResponse.data[0].fname,
            mname: loginStatusResponse.data[0].mname,
            lname: loginStatusResponse.data[0].lname,
            email: loginStatusResponse.data[0].email,
            ethAddress: loginStatusResponse.data[0].eth_address,
            ipfsHash: loginStatusResponse.data[0].ipfs_hash,
            trust: loginStatusResponse.data[0].trust,
            reviewCount: loginStatusResponse.data[0].review_count,
            address: loginStatusResponse.data[0].address,
            city: loginStatusResponse.data[0].city,
            state: loginStatusResponse.data[0].email.state,
            zip: loginStatusResponse.data[0].zip,
            phone: loginStatusResponse.data[0].phone,
        }
    });
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
				FARMER LOGIN
				</h1>
				</div>
				</div>
			</div>
			<ul class="form-section page-section">

			<li class="form-line jf-required" data-type="control_textbox" id="id_2">
				<label class="form-label form-label-left form-label-auto" id="label_2" for="input_2">
				EMAIL ID
				<span class="form-required">
				*
				</span>
				</label>
				<div id="cid_2" class="form-input jf-required">
					<input type="text" value={this.state.email} onChange={this.handleChange} id="input_2" name="email" data-type="input-textbox" class="form-textbox validate[required]" size="20"  placeholder=" " data-component="textbox" aria-labelledby="label_2" required="" />
				</div>
			</li>

			<li class="form-line jf-required" data-type="control_textbox" id="id_3">
				<label class="form-label form-label-left form-label-auto" id="label_3" for="input_3">
				Password
				<span class="form-required">
				*
				</span>
				</label>
			<div id="cid_3" class="form-input jf-required">
				<input type="password" value={this.state.password} onChange={this.handleChange} id="input_3" name="password" data-type="input-textbox" class="form-textbox validate[required]" size="20" placeholder=" " data-component="textbox" aria-labelledby="label_3" required="" />
			</div>
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


      <div id="cid_1" class="form-input-wide" data-type="control_head">
        <div class="form-header-group " >
        <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} class="header-text httal htvam" >
        <h5 style={{marginRight:'15px'}} id="header_1" class="form-header" data-component="header">
        New User?
        </h5>
        <Link to="/farmer" className="nav-link">Sign Up</Link>
        </div>
        </div>
      </div>

      </form>
      </div>
      </div>
    );
  }
}

export default withRouter(Farmer);
