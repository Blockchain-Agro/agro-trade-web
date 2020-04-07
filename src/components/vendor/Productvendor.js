import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from './Card';


class Productvendor extends Component {
  constructor() {
    super();
    this.state = {
      people: [

        {
    product_name: "Wheat",
    type_crop: "starchy",
    price_per_kg: "28",
    quantity_in_kg: "50",
    expiry_date: "20/02/2020"
  },
          {
    product_name: "Bajra",
    type_crop: "starchy",
    price_per_kg: "28",
    quantity_in_kg: "50",
    expiry_date: "20/02/2020"
  },
          {
    product_name: "Wheat",
    type_crop: "starchy",
    price_per_kg: "28",
    quantity_in_kg: "50",
    expiry_date: "20/02/2020"
  },
          {
    product_name: "Wheat",
    type_crop: "starchy",
    price_per_kg: "28",
    quantity_in_kg: "50",
    expiry_date: "20/02/2020"
  },
          {
    product_name: "Wheat",
    type_crop: "starchy",
    price_per_kg: "28",
    quantity_in_kg: "50",
    expiry_date: "20/02/2020"
  },
          {
    product_name: "Wheat",
    type_crop: "starchy",
    price_per_kg: "28",
    quantity_in_kg: "50",
    expiry_date: "20/02/2020"
  },
          {
    product_name: "Wheat",
    type_crop: "starchy",
    price_per_kg: "28",
    quantity_in_kg: "50",
    expiry_date: "20/02/2020"
  },
          {
    product_name: "Wheat",
    type_crop: "starchy",
    price_per_kg: "28",
    quantity_in_kg: "50",
    expiry_date: "20/02/2020"
  },
          {
    product_name: "Wheat",
    type_crop: "starchy",
    price_per_kg: "28",
    quantity_in_kg: "50",
    expiry_date: "20/02/2020"
  }


      ]
    }
  }


  render () {
    let peopleCards = this.state.people.map(person => {
      return (
        <Col sm="4">
          <Card history= {this.props.history} person={person} />
        </Col>
      )
    })
    return (
      <Container fluid>
        <Row>
          {peopleCards}
        </Row>
      </Container>
    )
  }
}

export default Productvendor;
