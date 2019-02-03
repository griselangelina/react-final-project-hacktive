import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import { Redirect } from "react-router-dom";

 import './Navigator.css';
 import {InputTextCategory} from '../../Atom/InputText';
 import {ModalLogin} from '../../Molecule/Modal/Modal';

 import {LongButtonRed} from '../../Atom/Button';
import {AirBnbLogo} from '../../Atom/Star';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; /*bind dari file action */
import {login,logout,clear} from '../../../redux/Auth/actions';
import {checkValidity} from './validity';

class Navigator extends Component {
  constructor(props){
    super(props)
    this.state={
        modallogin:false,
        isRegis:false,
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
                minLength:6,
              }
          }, 
      }
    }
  }

  // to validate text input value
  checkValidity(value, rules) { 
   return checkValidity(value, rules);
}

//to handle login method
  login= () =>{

    if(this.state.isValid){
      this.props.login(this.state.formControls.email.value, this.state.formControls.password.value, this.state.isRegis)
    }else{
      alert("email/pass in wrong format")
    }
   
  }

  // to handle logout method
  logout = () =>{
    this.setState({ isRegis:false,modallogin:false})
    this.clear()
    this.props.logout()
  }

  // to handle text input change value
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

    this.setState({formControls: updatedOrderForm, isValid: formIsValid});
  }

  //to handle modal open
  modalloginOpen =() =>{
    this.setState({ isRegis:false,modallogin:true})
  }

  //to handle modal regis open
  modalRegisOpen =() =>{
    this.setState({ isRegis:true,modallogin:true})
  }

  // to handle login to daftar
  changeHandlerDaftar = () =>{
    this.props.clear()
    this.clear()
    this.setState({isRegis:true})
  }

  // to handle daftar to login
  changeHandlerLogin = () =>{
    this.props.clear()
    this.clear()
    this.setState({isRegis:false})
  }

  // to clear input text
  clear = () =>{
    this.setState({formControls:{...this.state.formControls,email:{...this.state.formControls.email,value:""},password:{...this.state.formControls.password,value:""}}})
  }

  // render 
  render() {
    let modalLogin = () => {
      this.setState({ modallogin: false });
      this.clear()
    }

    // to keep modal when error exist
    if(this.props.error===false){
      modalLogin
    }

    return (
      <div >
        
        <Navbar inverse collapseOnSelect className={this.props.searchBar?"b":""} >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><AirBnbLogo /></a>
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
                <NavItem eventKey={4} onClick={this.modalRegisOpen}  href="#" className={this.props.searchBar?"c":""}>
                Daftar
                </NavItem>
                <NavItem eventKey={5} onClick={this.modalloginOpen} href="#" className={this.props.searchBar?"c":""}>
                  Masuk
                </NavItem>
              </Nav>
              <ModalLogin open={this.state.modallogin} close={modalLogin}>
                <input type="email"  value={this.state.formControls.email.value}   onChange={this.change} autocomplete="email" className="input-text-login"  name="email" placeholder="Alamat Email" />  
                <input type="password" value={this.state.formControls.password.value}  onChange={this.change} autocomplete="password" className="input-text-login"  name="password" placeholder="Kata Sandi"/>
                    
                <LongButtonRed click={this.login}>
                  {this.state.isRegis? "Daftar":"Login"}
                </LongButtonRed> 
                <hr />
                {
                  this.state.isRegis?  
                    <div className="text-daftar">sudah Punya akun ? <a onClick={()=>this.changeHandlerLogin()}>Login</a></div>
                  : 
                    <div className="text-daftar">Tidak Punya akun ? <a onClick={()=>this.changeHandlerDaftar()}>Daftar</a></div>
                }

                {
                  this.props.error ?<div style={{fontSize:`16px`,color:`red`,textAlign:`center`}}>{this.props.message}</div>:""
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
  isLogin:state.auth.isLogin,
  token:state.auth.token,
  message:state.auth.error.message,
  error:state.auth.error.status
})


const mapDispatchToProps =(dispatch) =>bindActionCreators({
  login,logout,clear
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Navigator);