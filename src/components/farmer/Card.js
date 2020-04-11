import React, { Component } from 'react';
import { Card, CardText, CardBody, Button,
  CardTitle, CardSubtitle } from 'reactstrap';
import './style.css'


class PeopleCard extends Component {
  constructor(props) {
    super(props);
this.shoot = this.shoot.bind(this);
  }

  shoot()
  {
          this.props.history.push({
        pathname: '../farmerProductInfo',
        state: {
            product_name: this.props.person.product_name,
            type_crop:this.props.person.type_crop,
            price_per_kg:this.props.person.price_per_kg,
            quantity_in_kg:this.props.person.quantity_in_kg,
            expiry_date:this.props.person.expiry_date
        }
    });
  }


  render () {
let { product_name , type_crop, price_per_kg, quantity_in_kg,expiry_date } = this.props.person;
    return (
        <div>
        <Card>
          <CardBody>
            <CardTitle>Name : {product_name}</CardTitle>
            <CardSubtitle>Type : {type_crop}</CardSubtitle>
            <CardText>Price : {price_per_kg}</CardText>
            <CardText>Quantity : {quantity_in_kg}</CardText>
            <CardText>Expiry Date : {expiry_date}</CardText>
            <Button history= {this.props.history} onClick={this.shoot}>View Info</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default PeopleCard;