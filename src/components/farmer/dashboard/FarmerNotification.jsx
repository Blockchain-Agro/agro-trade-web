import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../farmerProfileNavbar';
import './../NavStyle.scss'
import { Container, Row, Col } from 'reactstrap';
import Card from './CardFarmerNotification';
const SERVER_ADDRESS = 'http://localhost:3001';

// ALL WHOSE STATUS IS 0

export default class FarmerNotification extends React.Component {
    constructor(props) {
        super(props);
        
          
         // console.log('login status response :-', response.data);
         this.state = {
         
          id: this.props.location.id,
       people: [
 /*          {
     id: this.props.location.id,
     product_name: "Wheat123",
     type_crop: "starchy",
     price_per_kg: "28",
     quantity_in_kg: "50",
     expiry_date: "20/02/2020",
     vendor_contact: "12324123",
     vendor_name:"rajat"
   }*/
   ],

      
   }
  
        }

        async componentWillMount(props){
          const data = {farmer_address : JSON.parse(sessionStorage.user).ethAddress};
          const response = await axios.post(SERVER_ADDRESS + '/get-farmer-notification', data);
          console.log('product data :', response.data.productData );
//          val = response.data.productData;
//          console.log('value :',val,'\nsize :', val.length);
          this.setState({
            people: response.data.productData,
          })
          console.log('state: ',this.state);
        }

  render (){
    /*
    let peopleCards = this.state.people.map(person => {
      return(
        <Col sm="4">
          <Card history= {this.props.history} person={person} />
        </Col>
      );
    })*/

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
