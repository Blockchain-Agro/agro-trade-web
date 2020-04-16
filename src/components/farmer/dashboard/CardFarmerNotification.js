/*
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
        pathname: '../productInfoNotification',
        state: {
            id: this.props.person.id,
            product_name: this.props.person.product_name,
            type_crop:this.props.person.type_crop,
            price_per_kg:this.props.person.price_per_kg,
            quantity_in_kg:this.props.person.quantity_in_kg,
            expiry_date:this.props.person.expiry_date,
            vendor_contact:this.props.person.vendor_contact,
            vendor_name:this.props.person.vendor_name                        
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

*/

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
        /*state: {
            id: this.props.person.id,
            product_name: this.props.person.product_name,
            type_crop:this.props.person.type_crop,
            price_per_kg:this.props.person.price_per_kg,
            quantity_in_kg:this.props.person.quantity_in_kg,
            expiry_date:this.props.person.expiry_date,
            vendor_contact:this.props.person.vendor_contact,
            vendor_name:this.props.person.vendor_name 
        }*/
        state: {
          id: this.props.person.id,
          product_name: this.props.person.name,
          type_crop:this.props.person.type,
          price_per_kg:this.props.person.price,
          quantity_in_kg:this.props.person.quantity,
         // expiry_date:this.props.person.expiry_date,
     //     vendor_contact:this.props.person.phone_number,
       //   vendor_name:this.props.person.first_name
      }
    });
  }


  render () {
let { name ,  type, price, quantity } = this.props.person;
/*
 <CardTitle>Name : {first_name}</CardTitle> 
            <CardText>vendor contact : {phone_number}</CardText>
            */
return (
        <div>
        <Card>
          <CardBody>
            <CardTitle>Name : {name}</CardTitle>
               
            <CardSubtitle>Type : {type}</CardSubtitle>
            <CardText>Price : {price}</CardText>
            <CardText>Quantity : {quantity}</CardText>
           
    
            <Button history= {this.props.history} onClick={this.shoot}>View Info</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default PeopleCard;