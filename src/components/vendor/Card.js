import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import './style.css'

class PeopleCard extends Component {
  constructor(props) {
    super(props);
this.handlechane = this.handlechane.bind(this);
  }

  handlechane(props)
  {
    this.props.history.push('./Productinfovendor',props.person);
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
            <button onClick={this.handlechane}>View Info</button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default PeopleCard;
