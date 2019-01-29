import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,Grid} from 'react-bootstrap';
import { Redirect } from "react-router-dom";

 import './Navigator.css';
 import {InputTextCategory} from '../../Atom/InputText';
 import {ModalLogin} from '../../Molecule/Modal/Modal';

 
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; /*bind dari file action */
import {login,logout} from '../../../redux/Data/actions';
class Navigator extends Component {
  constructor(props){
    super(props)
    this.state={
      modallogin:false,
    }
  }
  login= () =>{
    this.props.login()
    this.setState({modallogin:false})
  }
  logout = () =>{
    this.props.logout()
  }
  //testcomment
  modalloginOpen =() =>{
    this.setState({modallogin:true})
}
  render() {
    let modalLogin = () => this.setState({ modallogin: false });
    console.log(this.props.isLogin)
   
    return (
      <div >
        
        <Navbar inverse collapseOnSelect className={this.props.searchBar?"b":""} >
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Airbnb Logo</a>
    </Navbar.Brand>
    {
      this.props.searchBar?<InputTextCategory/>:null
    }
    
    <Navbar.Toggle />
  </Navbar.Header>
  {
    this.props.isLogin ?
    <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} href="#" className={this.props.searchBar?"c":""}>
        Menjadi Tuan Rumah
      </NavItem>
   
      <NavItem eventKey={3} href="#" className={this.props.searchBar?"c":""}>
        Tersimpan
      </NavItem>
      <NavItem eventKey={4} href="#" className={this.props.searchBar?"c":""}>
       Perjalanan
      </NavItem>
      <NavItem eventKey={5}href="#" className={this.props.searchBar?"c":""}>
        Pesan
      </NavItem>
      <NavItem eventKey={5} href="#" className={this.props.searchBar?"c":""}>
        Bantuan
      </NavItem>
      <NavItem eventKey={5} onClick={() => this.logout()} href="#" className={this.props.searchBar?"c":""}>
        Keluar
      </NavItem>
    </Nav>
  </Navbar.Collapse>
  
  :
  
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} href="#" className={this.props.searchBar?"c":""}>
        Menjadi Tuan Rumah
      </NavItem>
   
      <NavItem eventKey={3} href="#" className={this.props.searchBar?"c":""}>
        Bantuan
      </NavItem>
      <NavItem eventKey={4} href="#" className={this.props.searchBar?"c":""}>
       Daftar
      </NavItem>
      <NavItem eventKey={5} onClick={this.modalloginOpen} href="#" className={this.props.searchBar?"c":""}>
        Masuk
      </NavItem>
    </Nav>
    <ModalLogin open={this.state.modallogin} close={modalLogin} login={this.login}/>
  </Navbar.Collapse>

  
  }
</Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  isLogin:state.data.isLogin
})


const mapDispatchToProps =(dispatch) =>bindActionCreators({
  login,logout
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Navigator);