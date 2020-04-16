import React, { Component } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';

import Navbar from './farmerProfileNavbar';
import IPFS from '../../api/ipfs';
import Loader from '../other/Loader/Loader';


// ETH AD
class FarmerProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info:JSON.parse(sessionStorage.user),
            //id: this.props.location.id,
            productname:'',
            price:0,
            type:'',
            quant : 0,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        date: new Date(),
    }

    handleChange(e) {
      let change = {}
      change[e.target.name] = e.target.value
      this.setState(change)
  }

onChange = date => this.setState({ date })


async handleSubmit(event){
    this.setState({
        loading: true,
    });
    event.preventDefault();
    console.log("control insode");
    //alert("HELLO");
    const {productname, price, quant, type} = this.state;
    const dataForIpfs = {
      productname,
      price,
      quant,
      type,
      // TODO remove this later
      farmerAddress:this.state.info.ethAddress,
      eth_id:'Count',
      status:0,
    }
    console.log(dataForIpfs);
    const ipfsHash = await IPFS.getIpfsHash(dataForIpfs);

    console.log('IPFS hash :-', ipfsHash);

    const data = {
      productname,
      price,
      quant,
      type,
      ipfsHash,
      farmerAddress:this.state.info.ethAddress,
      // TODO remove this later
      eth_id:'Count',
      status:0,
    }

    this.setState({
        loading: false,
    });
    console.log('Data to db :-', data);

    const status = await axios.post('http://localhost:3001/add-product', data);
    console.log(status);
      if(status) {
        alert("Product is added!");
        this.props.history.push({
            pathname: '../farmerLoginProfile',
            state: {
                fname: this.state.fname,
                lname: this.state.lname,
                email: this.state.email,
            }
        });
    }

}

  render () {
      if(this.state.loading) {
          return <Loader />
      }
    return (

        <div>

            <Navbar id = {this.state.id}/>
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
          <select class="form-dropdown" id="input_13" name="type" value={this.state.type} onChange={this.handleChange} data-component="dropdown" aria-labelledby="label_13">
            <option value=""> </option>
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


/*


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


*/
