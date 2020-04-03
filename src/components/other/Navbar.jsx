import React from 'react';
import { Link } from 'react-router-dom';
// import Portis from '@portis/web3';
import './NavStyle.scss'
// const portis = new Portis('4e5c7a30-2bbf-41db-92fa-0bbe1ae94d9b', 'mainnet');



export default class Navbar extends React.Component {
  state = {
    wallet:'',
  };

  // logoutPortis(event){
  //   portis.logout();
  //   alert("Logged out from porits wallet.");

  //   // redirect to home page

  // }

  // async componentDidMount(){
  //   PushSubscriptionOptions.onLogin(wallet => {
  //     alert("Logged in");
  //     this.setState({wallet});
  //   });
  // }


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
                <Link to="/" className="nav-link">Home </Link>
              </li>
              <li className="nav-item">
                <Link to="/farmer" className="nav-link">Farmer</Link>
              </li>
              <li className="nav-item">
                <Link to="/vendor" className="nav-link">Vendor</Link>
              </li>

            </ul>
          </div>
          <div className="status">
            {(
              <p className="network-name">

                {this.state.wallet && (
                  <React.Fragment>
                    <br />
                    <span className="wallet-address">
                      <span title={this.state.wallet}>

                        {this.state.wallet.substring(0, 5) +
                          '...' +
                          this.state.wallet.substring(this.state.wallet.length - 3)}
                      </span>
                      <a href={'/address/' + this.state.wallet} rel="noopener noreferrer" target="_blank">
                        ↗LInk
                      </a>
                    </span>
                  </React.Fragment>
                )}
              </p>
            )}

          </div>

          {/* <button class="portis-button" onClick={() => portis.showPortis()} >Account info</button> */}

          <button className="logout-button" variant="contained" onClick={this.logoutPortis} color="secondary" id="Logout">Logout</button>

        </nav>

    );
  }

}
