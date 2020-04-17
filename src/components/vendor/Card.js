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
        pathname: '../vendorProductInfo',
        state: {

        product_id : this.props.person.product_id,
        product_name : this.props.person.product_name,
        product_type : this.props.person.product_type,
        price_per_kg : this.props.person.price_per_kg,
        quantity_in_kg : this.props.person.quantity_in_kg,
        farmer_address : this.props.person.farmer_address,
        }
    });
  }
  


  render () {
    let { product_id, product_name , product_type, price_per_kg, quantity_in_kg,farmer_address } = this.props.person;
    return (
        <div>
        <Card>
          <CardBody>
            <CardTitle>Name : {product_name}</CardTitle>
            <CardText>Product ID : {product_id}</CardText>
            <CardText>Type : {product_type}</CardText>
            <CardText>Price : {price_per_kg}</CardText>
            <CardText>Quantity : {quantity_in_kg}</CardText>
            <CardText>Farmer Address : {farmer_address}</CardText>
            <Button history= {this.props.history} onClick={this.shoot} >View Info</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default PeopleCard;