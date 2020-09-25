import React, { Component } from 'react';
import { Card, CardText, CardBody, Button,
  CardTitle, CardSubtitle } from 'reactstrap';
import './../style.css'
class PeopleCard extends Component {
  constructor(props) {
    super(props);
    console.log('props =====> in card constructor ==>', props);

    this.shoot = this.shoot.bind(this);
  }

  shoot()
  {
    console.log('this.props ====> in CartFarmerNoti ==>', this.props);
    console.log('person ===>', this.props.person);


    this.props.history.push({
      pathname: '../productInfoNotification',
      state: {
          id: this.props.person.id,
          product_name: this.props.person.product_name,
          type_crop:this.props.person.type_crop,
          price_per_kg:this.props.person.price_per_kg,
          quantity_in_kg:this.props.person.quantity_in_kg,
          vendor_contact:this.props.person.vendor_contact,
          vendor_name:this.props.person.vendor_name,
          vendor_address: this.props.person.vendor_address,
      }
    });

  }
  render () {
let { product_name , vendor_name, type_crop, price_per_kg, quantity_in_kg, vendor_contact } = this.props.person;
    return (
        <div>
        <Card>
          <CardBody>
            <CardTitle>Name : {product_name}</CardTitle>
            <CardTitle>Vendor Name : {vendor_name }</CardTitle>
            <CardSubtitle>Type : {type_crop}</CardSubtitle>
            <CardText>Price : {price_per_kg}</CardText>
            <CardText>Quantity : {quantity_in_kg}</CardText>
            <CardText>Phone number : {vendor_contact}</CardText>

            <Button history= {this.props.history} onClick={this.shoot}>View Info</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default PeopleCard;
