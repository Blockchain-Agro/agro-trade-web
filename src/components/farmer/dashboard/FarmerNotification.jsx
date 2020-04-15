import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../farmerProfileNavbar';
import './../NavStyle.scss'
import { Container, Row, Col } from 'reactstrap';
import Card from './CardFarmerNotification';

import { Button} from 'reactstrap';

// ALL WHOSE STATUS IS 0

export default class FarmerNotification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.location.id,
      people: [
          {
    id: this.props.location.id,
    product_name: "Wheat123",
    type_crop: "starchy",
    price_per_kg: "28",
    quantity_in_kg: "50",
    expiry_date: "20/02/2020",
    vendor_contact: "12324123",
    vendor_name:"rajat"
  }
   ]
    }
    }

  render (){

    let peopleCards = this.state.people.map(person => {
      return(
        <Col sm="4">
          <Card history= {this.props.history} person={person} />
        </Col>
      );
    })

    return(
        <div>
    <Navbar id = {this.state.id}/>
    {JSON.parse(sessionStorage.user).email}
      <Container fluid>
        <Row>
          {peopleCards}
        </Row>
      </Container>
    </div>
    )
  }
}
