import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './../VendorStyle.css';
import Navbar from '../vendorHomeNavbar';
import { withRouter } from 'react-router-dom';

const SERVER_ADDRESS = 'http://localhost:3001';

class Vendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',

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

    const {email , password} = this.state;
    const data = {
      email,
      password,
    }
    const response = await axios.post(SERVER_ADDRESS + '/vendor-login', data);
    console.log('login status response :-', response.data);

    if(response.data.status)
    {
        const vendorData = response.data.farmerData[0];
        console.log('vendor data :-', vendorData);

        const temp= {
            fname: vendorData.first_name,
            mname: vendorData.middle_name,
            lname: vendorData.last_name,
            email: vendorData.email,
            ethAddress: vendorData.eth_address,
            ipfsHash: vendorData.ipfs_hash,
            trust: vendorData.trust,
            reviewCount: vendorData.review_count,
            address: vendorData.address,
            city: vendorData.city,
            state: vendorData.state,
            zip: vendorData.zip,
            phone: vendorData.phone_number,
        }

        if(sessionStorage.user)
        {
          alert("You are logged out from farmer account and will now be logged in as vendor");
        }
        sessionStorage.clear();
        sessionStorage.vendor = JSON.stringify(temp);
        console.log('Data added in session :-', JSON.parse(sessionStorage.vendor));

        this.props.history.push({
            pathname: '../vendorLoginProfile',
        });

    }
    if(!response.data.status) {
        alert('Invalid Credentials..');
    }

  }

  render() {
    if(sessionStorage.vendor)
    {
      this.props.history.push('/vendorLoginProfile');
    }
    return (
        <div>
        <Navbar/>
      <div className="vendorLoginForm">

      <form onSubmit={this.handleSubmit}>

			<div id="cid_1" class="form-input-wide" data-type="control_head">
				<div class="form-header-group ">
				<div class="header-text httal htvam">
				<h1 id="header_1" class="form-header" data-component="header">
				Vendor LOGIN
				</h1>
				</div>
				</div>
			</div>
			<ul class="form-section page-section">

			<li class="form-line jf-required" data-type="control_textbox" id="id_2">
				<label class="form-label form-label-left form-label-auto" id="label_2" for="input_2">
				Email ID
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
        <Link to="/vendor" className="nav-link">Sign Up</Link>
        </div>
        </div>
      </div>

      </form>
      </div>
      </div>
    );
  }
}

export default withRouter(Vendor);
