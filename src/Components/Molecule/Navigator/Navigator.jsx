import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,Grid} from 'react-bootstrap';
import { Redirect } from "react-router-dom";

 import './Navigator.css';
 import {InputTextCategory} from '../../Atom/InputText';
 import {ModalLogin} from '../../Molecule/Modal/Modal';

 import {LongButtonRed} from '../../Atom/Button';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; /*bind dari file action */
import {login,logout} from '../../../redux/Data/actions';
import {checkValidity} from './validity';
class Navigator extends Component {
  constructor(props){
    super(props)
    this.state={
        modallogin:false,
        isValid:false,
        formControls: {
          email:{
            value:"",
            valid:false,
            validation: {
              required: true,
              isEmail: true
            },
          },
          password:{
             value:"",
              valid:false,
              validation: {
                required: true,
                minLength:8,
              }
          }, 
      }
    }
  }
  checkValidity(value, rules) { 
   /* let isValid = true;
    if (!rules) {
        return true;
    }
    
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }
    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }


    return isValid;*/

   return checkValidity(value, rules);
}

  login= () =>{
    this.props.login()
    this.setState({modallogin:false})
  }
  logout = () =>{
    this.props.logout()
  }

  change= (event) =>{
    const name = event.target.name;
    const updatedOrderForm = {
      ...this.state.formControls
    };
    const updatedFormElement = { 
        ...updatedOrderForm[name]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedOrderForm[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({formControls: updatedOrderForm, formIsValid: formIsValid});


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
    <ModalLogin open={this.state.modallogin} close={modalLogin}>
          <input type="email"  value={this.state.formControls.email.value}   onChange={this.change} autocomplete="email" className="input-text-login"  name="email" placeholder="Alamat Email" />
          
          <input type="password" value={this.state.formControls.password.value}  onChange={this.change} autocomplete="password" className="input-text-login"  name="password" placeholder="Kata Sandi"/>
          {
            this.state.formIsValid?
              <LongButtonRed click={this.login}>
                Login
              </LongButtonRed> 
            :
              ""
          }
         
    </ModalLogin>
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