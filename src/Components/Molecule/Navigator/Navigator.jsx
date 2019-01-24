import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,Grid} from 'react-bootstrap';
 import './Navigator.css';

class Navigator extends Component {
  //testcomment
  render() {
    return (
      <div>
        
        <Navbar inverse collapseOnSelect >
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">Airbnb Logo</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>

  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Menerima Tamu di Rumah2
      </NavItem>
      <NavItem eventKey={2} href="#">
        Adakan Sebuah Perjalanan
      </NavItem>
      <NavItem eventKey={3} href="#">
        Bantuan
      </NavItem>
      <NavItem eventKey={4} href="#">
       Daftar
      </NavItem>
      <NavItem eventKey={5} href="#">
        Masuk
      </NavItem>
    </Nav>
  </Navbar.Collapse>

</Navbar>
      </div>
    );
  }
}

export default Navigator;
