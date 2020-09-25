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
      people: [],
      vendor_address : JSON.parse(sessionStorage.vendor).ethAddress
    }

    this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchProducts();

  }

  async fetchProducts()
  {
    //event.preventDefault();
    const data = {vendor_address : this.state.vendor_address}
    const response = await axios.post(SERVER_ADDRESS + '/fetch-products',data);
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
        farmer_address : response.data[i].farmer_address,
        status : 0
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

    const cardsLength = peopleCards.length;
    let heading;
    if (cardsLength > 0) {
        heading = `Check the newly added products from farmers. Send request if you want to buy.`;
    } else {
        heading = 'No products yet!';
    }

    return (
      <div>
      <Navbar/>
        <div className="title-div" style={{ marginTop: "50px"}}>
          <h2>{ heading }</h2>
        </div>
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
