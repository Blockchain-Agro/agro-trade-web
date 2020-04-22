import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../farmerProfileNavbar';
import './../NavStyle.scss'
import { Container, Row, Col } from 'reactstrap';
import Card from './CardFarmerNotification';
import axios from 'axios';
import { Button} from 'reactstrap';
const SERVER_ADDRESS = 'http://localhost:3001';


// ALL WHOSE STATUS IS 0

export default class FarmerNotification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.location.id,
      people: []
    }

  //  this.fetchProducts = this.fetchProducts.bind(this);
    this.fetchedNotification();
    }


    async fetchedNotification()
    {
      //event.preventDefault();

      const data = {
        farmer_address:JSON.parse(sessionStorage.user).ethAddress,
      }
    //  console.log('Farmer Address :-', JSON.parse(sessionStorage.user));
      const response = await axios.post(SERVER_ADDRESS + '/get-farmer-notification',data);

      let products= [];
      products = response.data
      console.log('product info :-', response.data);

      this.setState({
        people : response.data.fetchedNotification
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
