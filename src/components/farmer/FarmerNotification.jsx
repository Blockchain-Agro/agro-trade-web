import React from 'react';
import Navbar from './farmerprofilenavbar';
import { Link } from 'react-router-dom';
import './NavStyle.scss'
import { Button} from 'reactstrap';

export default class FarmerNotification extends React.Component {
    constructor(props) {
        super(props);

    }

  render() {
    return (
             <div>
        <Navbar />
        <div>Notification</div>
        </div>
    );
  }
}
