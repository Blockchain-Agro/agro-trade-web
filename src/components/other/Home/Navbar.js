import React,{Fragment} from 'react';
import { Link,withRouter } from 'react-router-dom';
import './NavStyle.scss'

export default class Navbar extends React.Component {

  render() {
    let insert2 = <Fragment>
        <li className="nav-item active"><Link to="/farmerLogin" className="nav-link">Farmer </Link></li>
        <li className="nav-item active"><Link to="/vendorLogin" className="nav-link">Vendor </Link></li>
      </Fragment>;

    if(sessionStorage.user)
    { 
      insert2 = <Fragment>
        <li className="nav-item active"><Link to="/farmerLogin" className="nav-link">Farmer </Link></li>
        <li className="nav-item active"><Link to="#" className="nav-link" onClick={() => {
         alert("You're already logged in as farmer.\nKindly logout from there to login as vendor")}}>Vendor</Link></li>    
       </Fragment>
       
    }

    if(sessionStorage.vendor)
    { 
      insert2 = <Fragment>
        <li className="nav-item active"><Link to="#" className="nav-link" onClick={() => {
         alert("You're already logged in as vendor.\nKindly logout from there to login as farmer")}}>Farmer</Link></li>
         <li className="nav-item active"><Link to="/vendorLogin" className="nav-link">Vendor </Link></li>
       </Fragment>
     
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">AgroTrade</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home </Link>
              </li>
              {insert2}
            </ul>
          </div>
        </nav>
    );
  }
}


withRouter(Navbar);
