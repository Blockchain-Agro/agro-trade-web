import React, { Component } from 'react';
import "./home.css";
import Navbar from './Navbar.js';

export default class Home extends Component {
  render () {
    return (
     <div className="home">
        <Navbar/>
        <label  className="agro">AgroTrade</label>
        <h1 style={{marginBottom:'50px'}} className="pad">A Blockchain Based Platform for Trading Agricultural Products</h1>
        <div className="network-image" />
        <div  className="container">
            <div className="introduction" style={{justifyContent: 'center',
alignItems: 'center', textAlign: 'left'}}>
                <h2 style={{marginBottom:'30px'}}>Welcome to the world of blockchains</h2>
                <p >A blockchain, originally block chain, is a growing list of records, called blocks, that are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree). By design, a blockchain is resistant to modification of the data. It is "an open, distributed ledger that can record transactions between two parties efficiently and in a verifiable and permanent way". For use as a distributed ledger, a blockchain is typically managed by a peer-to-peer network collectively adhering to a protocol for inter-node communication and validating new blocks. Once recorded, the data in any given block cannot be altered retroactively without alteration of all subsequent blocks, which requires consensus of the network majority. Although blockchain records are not unalterable, blockchains may be considered secure by design and exemplify a distributed computing system with high Byzantine fault tolerance. Decentralized consensus has therefore been claimed with a blockchain.
                </p>
            </div>
            <h1>Description</h1>
            <div className="row">
                <div className="col-sm-6">
                    <p style={{justifyContent: 'center',
alignItems: 'center', textAlign: 'left'}}>The Farmers are not satisfied with the process of the agricultural products
trading. Farmers do not have rights to set the price of their product as per cur-
rent process. A Centralised platform can be made to connect farmers to vendors
and facilitate farmers to set the price for their product but issues like consumer
trust are the reliability issues which are faced by current supply chains. Hence
preparing a transparent and efficient architecture for trading agricultural products
was the purpose of the study, by combining trusted certification system utilizing
blockchain concept and other technologies.
</p>
                </div>
                <div className="col-sm-6 first-image"/>
            </div>
            <div className="row">
                <div className="col-sm-6 first-image"/>
                <div className="col-sm-6">
                    <p style={{justifyContent: 'center',
alignItems: 'center', textAlign: 'left'}}>In the Agri-Food domain, in order to maintain trust and reliability along the whole
supply chain, it is essential for the stored records to be tamper-proof, while the
best case would be if each actor issuing transactions could do that without relying
on any centralized third-party intermediary. A potential solution to all
of such issues and concerns is the Block chain technology, which is a peer-to-peer
digital ledger that does not rely on centralized servers. Since all the records stored
in a block chain are based on a consensus reached at least by the absolute majority
of peers of the network itself, this distributed ledger is immutable by design and
offers an audible and transparent source of information.
                    </p>
                </div>
            </div>
        </div>
     </div>
    );
  };
};
