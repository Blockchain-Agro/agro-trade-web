import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from '../Card';
import axios from 'axios';
import Navbar from '../vendorProfileNavbar';

const SERVER_ADDRESS = 'http://localhost:3001';


class ProductDisplay extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    }

    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchProducts();

  }

  async fetchProducts()
  {
    //event.preventDefault();
    const response = await axios.post(SERVER_ADDRESS + '/fetch-products');
    console.log('product info :-', response.data);
    const products= [];
    for(let i=0;i<response.data.length ; i++)
    {
      products.push({
        product_id : response.data[i].id,
        product_name : response.data[i].name,
        product_type : response.data[i].type,
        price_per_kg : response.data[i].price,
        quantity_in_kg : response.data[i].quantity,
        farmer_address : response.data[i].farmer_address
      })

      console.log("array : ",products);
    }
    this.setState({
      people : products
    })

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
      <div>
      <Navbar/>
      <Container fluid>
        <Row>
          {peopleCards}
        </Row>
      </Container>
      </div>
    )
  }
}

export default ProductDisplay;
