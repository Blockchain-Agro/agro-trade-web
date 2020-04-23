import React, { Component } from 'react';
import { Card, CardText, CardBody, Button,
  CardTitle, CardSubtitle } from 'reactstrap';
import './../style.css'
class PeopleCard extends Component {
  constructor(props) {
    super(props);
    this.shoot = this.shoot.bind(this);
  }
  shoot()
  {
          this.props.history.push({
        pathname: '../productInfoNotification', ///
        state: {
            id: this.props.person.id,
            product_name: this.props.person.name,
            type_crop:this.props.person.type,
            price_per_kg:this.props.person.price,
            quantity_in_kg:this.props.person.quantity,
            vendor_contact:this.props.person.phone_number,
            vendor_name:this.props.person.first_name
        }
    });
  }
  render () {
let { name , first_name, type, price, quantity, phone_number } = this.props.person;
    return (
        <div>
        <Card>
          <CardBody>
            <CardTitle>Name : {name}</CardTitle>
            <CardTitle>Vendor Name : {first_name }</CardTitle>
            <CardSubtitle>Type : {type}</CardSubtitle>
            <CardText>Price : {price}</CardText>
            <CardText>Quantity : {quantity}</CardText>
            <CardText>Phone number : {phone_number}</CardText>

            <Button history= {this.props.history} onClick={this.shoot}>View Info</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default PeopleCard;
