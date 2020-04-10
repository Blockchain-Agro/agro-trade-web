import React from 'react';
import { Link } from 'react-router-dom';
import './NavStyle.scss'
import { Button} from 'reactstrap';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: this.props.fname,
            lname: this.props.lname
        }

    }

  render() {
    return (
        <div></div>

    );
  }
}
