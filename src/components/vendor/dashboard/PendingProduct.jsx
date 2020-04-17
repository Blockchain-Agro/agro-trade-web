import React from 'react';
import Navbar from '../vendorProfileNavbar';
import './../NavStyle.scss'
import { Container, Row, Col } from 'reactstrap';
import Card from '../Card';
import axios from 'axios';

const SERVER_ADDRESS = 'http://localhost:3001';

export default class PendingProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            vendor_address : JSON.parse(sessionStorage.vendor).ethAddress,
        } 
      this.fetchPendingProducts = this.fetchPendingProducts.bind(this);
      this.fetchPendingProducts();
    }

  async fetchPendingProducts()
  {
    //event.preventDefault();
    const data = {
      vendor_address : this.state.vendor_address
    }
    console.log("sending to db : ",  data);
    const response = await axios.post(SERVER_ADDRESS + '/fetch-pending-products',data);
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
