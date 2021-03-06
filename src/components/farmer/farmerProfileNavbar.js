import React from 'react';
import { Link,withRouter} from 'react-router-dom';
import './NavStyle.scss'
import { Button} from 'reactstrap';

class farmerProfileNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: this.props.fname,
            lname: this.props.lname,
            id: this.props.id,
        }
        this.logout = this.logout.bind(this);
  }

  logout()
    {
        sessionStorage.clear();
        alert("You have been logged out!")
        this.props.history.push({
            pathname: '/',
        });
    }

  render() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">AgroTrade</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/farmerLoginProfile" className="nav-link">Farmer</Link>
              </li>
              <li className="nav-item active">
              <Link to={{ pathname:"/farmerProfile", id: this.state.id }} className="nav-link">Add Product</Link>
              </li>

              <li className="nav-item active">
              <Link to={{ pathname:"/pendingProductFarmer", id: this.state.id }} className="nav-link">Pending Products</Link>
              </li>

              <li className="nav-item active">
              <Link to={{ pathname:"/farmerNotification", id: this.state.id }} className="nav-link">Notification</Link>
              </li>
               <li className="nav-item active">
               <Link to={{ pathname:"/soldProduct", id: this.state.id }} className="nav-link">Sold Products</Link>
              </li>
            </ul>
          </div>


          <Button variant="contained"  color="secondary" id="Logout" onClick={this.logout}>Logout</Button>
        </nav>

    );
  }
}
//    <div style={{marginRight:'10px'}}>{this.state.id}</div>
export default withRouter(farmerProfileNavbar);
