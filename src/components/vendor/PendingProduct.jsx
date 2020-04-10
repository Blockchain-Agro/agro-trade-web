import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './vendorprofilenavbar';
import './NavStyle.scss'
import { Button} from 'reactstrap';

export default class PendingProduct extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
        <div>
        <Navbar />
        <div>Pending Product Vendor</div>
        </div>
    );
  }
}
