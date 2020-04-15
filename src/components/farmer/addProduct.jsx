import React, { Component } from 'react';
import Navbar from './farmerProfileNavbar';
// import Calendar from 'react-calendar';
import IPFS from '../../api/ipfs';
import axios from 'axios';

// ETH AD
class FarmerProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info:JSON.parse(sessionStorage.user),
            id: this.props.location.id,
            productName:'',
            price:0,
            type:'',
            quant : 0,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        date: new Date(),
    }

    state = {

    }

    handleChange(e) {
      let change = {}
      change[e.target.name] = e.target.value
      this.setState(change)
  }

onChange = date => this.setState({ date })


    async handleSubmit(event){
        event.preventDefault();

        console.log("control insode");
        const { productName, price, quant, type, status } = this.state;
        const dataForIpfs = {
            productName,
            price,
            quant,
            type: 'Fruit',
            // TODO remove this later
            farmerAddress: this.state.info.ethAddress,
            eth_id: 4,
            status: 0,
        }
        const ipfsHash = await IPFS.getIpfsHash(dataForIpfs);
        console.log('IPFS hash :-', ipfsHash);

        const data = {
            productName,
            price,
            quant,
            type: 'Fruit',
            ipfsHash,
            farmerAddress: this.state.info.ethAddress,
            // TODO remove this later
            eth_id: 4,
            status: 0,
        }

        console.log('Data to db :-', data);

        const response = await axios.post('http://localhost:3001/add-product', data);
        console.log('add-product status :-', response);
    }

  render () {
    return (

        <div>

            <Navbar id = {this.state.id}/>
            {JSON.parse(sessionStorage.user).email}
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
          <input type="text" value={this.state.productName} onChange={this.handleChange} id="input_2" name="productName" data-type="input-textbox" class="form-textbox validate[required]" size="20"  placeholder=" " data-component="textbox" aria-labelledby="label_2" required="" />
        </div>
      </li>
            <li class="form-line" data-type="control_dropdown" id="id_13">
        <label class="form-label form-label-left form-label-auto" id="label_13" for="input_13"> TYPE OF CROP </label>
        <div id="cid_13" class="form-input">
          <select class="form-dropdown" id="input_13" name="type"  data-component="dropdown" aria-labelledby="label_13">
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
