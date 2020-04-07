import React from 'react';
import './VendorStyle.css';

export default class Vendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname:'',
      lname:'',
      idno:'',
      email:'',
      type:'',
      phno1:'',
      phno2:'',

      street:'',
      block:'',
      city:'',
      state1:'',
      zip:'',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
}

  handleSubmit(event){
    alert('fname :'+ this.state.fname + '\nlname :' + this.state.lname + '\nidno :' + this.state.idno + '\nemail :' + this.state.email + '\ntype :' + this.state.type);
    this.props.history.push({
        pathname: '../Productvendor',
        state: {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
        }
    });

  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>

			<div id="cid_1" className="form-input-wide" data-type="control_head">
				<div className="form-header-group ">
				<div className="header-text httal htvam">
				<h1 id="header_1" className="form-header" data-component="header">
				VENDOR SIGN UP
				</h1>
				</div>
				</div>
			</div>
			<ul className="form-section page-section">

			<li className="form-line jf-required" data-type="control_textbox" id="id_2">
				<label className="form-label form-label-left form-label-auto" id="label_2" >
				FIRST NAME
				<span className="form-required">
				*
				</span>
				</label>
				<div id="cid_2" className="form-input jf-required">
					<input type="text" value={this.state.fname} onChange={this.handleChange} id="input_2" name="fname" data-type="input-textbox" className="form-textbox validate[required]" size="20"  placeholder=" " data-component="textbox" aria-labelledby="label_2" required="" />
				</div>
			</li>

			<li className="form-line jf-required" data-type="control_textbox" id="id_3">
				<label className="form-label form-label-left form-label-auto" id="label_3">
				LAST NAME
				<span className="form-required">
				*
				</span>
				</label>
			<div id="cid_3" className="form-input jf-required">
				<input type="text" value={this.state.lname} onChange={this.handleChange} id="input_3" name="lname" data-type="input-textbox" className="form-textbox validate[required]" size="20" placeholder=" " data-component="textbox" aria-labelledby="label_3" required="" />
			</div>
			</li>

			<li className="form-line jf-required" data-type="control_textbox" id="id_4">
        <label className="form-label form-label-left form-label-auto" id="label_4" for="input_4">
          ID NO
          <span className="form-required">
            *
          </span>
        </label>
        <div id="cid_4" className="form-input jf-required">
          <input type="text" value={this.state.idno} onChange={this.handleChange} id="input_4" name="idno" data-type="input-textbox" className="form-textbox validate[required]" size="20"  placeholder=" " data-component="textbox" aria-labelledby="label_4" required="" />
        </div>
      </li>


      <li className="form-line jf-required" data-type="control_textbox" id="id_5">
        <label className="form-label form-label-left form-label-auto" id="label_5" for="input_5">
          EMAIL
          <span className="form-required">
            *
          </span>
        </label>
        <div id="cid_5" className="form-input jf-required">
          <input type="text" value={this.state.email} onChange={this.handleChange}id="input_5" name="email" data-type="input-textbox" className="form-textbox validate[required]" size="20"  placeholder=" " data-component="textbox" aria-labelledby="label_5" required="" />
        </div>
      </li>

            <li className="form-line" data-type="control_dropdown" id="id_13">
        <label className="form-label form-label-left form-label-auto" id="label_13" for="input_13"> TYPE OF VEGES </label>
        <div id="cid_13" className="form-input">
          <select value={this.state.type} onChange={this.handleChange} className="form-dropdown" id="input_13" name="q13_typeOf"  data-component="dropdown" aria-labelledby="label_13">

            <option value="Dark-Green"> Dark-Green </option>
            <option value="Red and Orange"> Red and Orange </option>
            <option value="Starchy"> Starchy </option>
            <option value="Beans and Peas"> Beans and Peas </option>
            <option value="Other"> Other </option>
          </select>
        </div>
      </li>


      <li className="form-line" data-type="control_phone" id="id_11">
        <label className="form-label form-label-left form-label-auto" id="label_11" for="input_11_area"> Phone Number </label>
        <div id="cid_11" className="form-input">
          <div data-wrapper-react="true">
            <span className="form-sub-label-container " style={{verticalalign: 'top'}}>
              <input value={this.state.phno1} onChange={this.handleChange} type="tel" id="input_11_area" name="phno1" className="form-textbox" size="6" data-component="areaCode" aria-labelledby="label_11 sublabel_11_area" />
              <span className="phone-separate" aria-hidden="true">
                 -
              </span>
              <label className="form-sub-label" for="input_11_area" id="sublabel_11_area" style={{minheight:"13px"}} aria-hidden="false"> Area Code </label>
            </span>
            <span className="form-sub-label-container " style={{verticalalign:'top'}}>
              <input type="tel" value={this.state.phno2} onChange={this.handleChange} id="input_11_phone" name="phno2" className="form-textbox" size="12"  data-component="phone" aria-labelledby="label_11 sublabel_11_phone" />
              <label className="form-sub-label" for="input_11_phone" id="sublabel_11_phone" style={{minheight:"13px"}} aria-hidden="false"> Phone Number </label>
            </span>
          </div>
        </div>
      </li>
      <li className="form-line" data-type="control_address" id="id_9">
        <label className="form-label form-label-left form-label-auto" id="label_9" for="input_9_addr_line1"> Vendor Address </label>
        <div id="cid_9" className="form-input">
          <table summary="" className="form-address-table">
            <tbody>
              <tr>
                <td colSpan="2">
                  <span className="form-sub-label-container " style={{verticalalign:'top'}}>
                    <input type="text" value={this.state.street} onChange={this.handleChange} name="street"  className="form-textbox form-address-line" data-component="address_line_1" aria-labelledby="label_9 sublabel_9_addr_line1" />
                    <label className="form-sub-label" for="input_9_addr_line1" id="sublabel_9_addr_line1" style={{minheight:"13px"}} aria-hidden="false"> Street Address </label>
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <span className="form-sub-label-container " style={{verticalalign:'top'}}>
                    <input type="text" name="block" value={this.state.block} onChange={this.handleChange} className="form-textbox form-address-line" size="46"  data-component="address_line_2" aria-labelledby="label_9 sublabel_9_addr_line2" />
                    <label className="form-sub-label" for="input_9_addr_line2" id="sublabel_9_addr_line2" style={{minheight:"13px"}} aria-hidden="false"> Box number </label>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="form-sub-label-container " style={{verticalalign:'top'}}>
                    <input type="text"  name="city" value={this.state.city} onChange={this.handleChange} className="form-textbox form-address-city" size="21" data-component="city" aria-labelledby="label_9 sublabel_9_city" />
                    <label className="form-sub-label" for="input_9_city" id="sublabel_9_city" style={{minheight:"13px"}} aria-hidden="false"> City </label>
                  </span>
                </td>
                <td>
                  <span className="form-sub-label-container " style={{verticalalign:'top'}}>
                    <input type="text" name="state1" value={this.state.state1} onChange={this.handleChange} className="form-textbox form-address-state" size="22" data-component="state" aria-labelledby="label_9 sublabel_9_state" />
                    <label className="form-sub-label" for="input_9_state" id="sublabel_9_state" style={{minheight:"13px"}} aria-hidden="false"> State / Province </label>
                  </span>
                </td>
              </tr>
                <td>
                  <span className="form-sub-label-container " style={{verticalalign:'top'}}>
                    <input type="number"  name="zip" value={this.state.zip} onChange={this.handleChange} className="form-textbox form-address-postal" size="10"  data-component="zip" aria-labelledby="label_9 sublabel_9_postal" />
                    <label className="form-sub-label" for="input_9_postal" id="sublabel_9_postal" style={{minheight:"13px"}} aria-hidden="false"> Postal / Zip Code </label>
                  </span>
                </td>
            </tbody>
          </table>
        </div>
      </li>
      <li className="form-line" data-type="control_button" id="id_12">
        <div id="cid_12" className="form-input-wide">
          <div style={{textalign:'center'}} className="form-buttons-wrapper ">
            <button id="input_12" type="submit" className="form-submit-button" data-component="button" data-content="">
              Submit
            </button>
          </div>
        </div>
      </li>

		</ul>




      </form>
    );
  }
}
