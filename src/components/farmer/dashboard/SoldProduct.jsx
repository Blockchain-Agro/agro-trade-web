import React from 'react';
import Navbar from '../farmerProfileNavbar';
import './../NavStyle.scss'
import { Container, Row, Col } from 'reactstrap';
import Card from './CardFarmerSold';
import axios from 'axios';
const SERVER_ADDRESS = 'http://localhost:3001';


export default class SoldProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.location.id,
      people: []
    }
    this.fetchedSold();
    }


    async fetchedSold()
    {
      //event.preventDefault();

      const data = {
        farmer_address:JSON.parse(sessionStorage.user).ethAddress,
      }
    //  console.log('Farmer Address :-', JSON.parse(sessionStorage.user));
      const response = await axios.post(SERVER_ADDRESS + '/get-sold-products',data);

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
    {this.state.id}
      <Container fluid>
        <Row>
          {peopleCards}
        </Row>
      </Container>
    </div>
    )
  }
}


/*


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

*/
