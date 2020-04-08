import React, { Component } from 'react';

import Navbar from './Navbar';
class FarmerProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: this.props.location.state.fname,
            lname: this.props.location.state.lname,
            email: this.props.location.state.email,
        }
    }
  render () {
    return (
        <div>
            <Navbar />
            <h1>Farmer Profile </h1>
            <h2>First name : {this.state.fname}</h2>
            <h2>Last name : {this.state.lname}</h2>
            <h2>Email : {this.state.email}</h2>
        </div>
    )
  }
}

export default FarmerProfile;
