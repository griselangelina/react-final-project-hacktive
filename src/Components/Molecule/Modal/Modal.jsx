import React  from 'react';
import {Row,Col,Modal,Button} from 'react-bootstrap';
import {PlusButton,MinButton,LongButtonRed} from '../../Atom/Button';
import {CheckBox1} from '../../Atom/Checkbox';

import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
export const ModalTamu = (props) => {
    let open="none"
    if(props.open){
        open="block";
    }else if(props.close){
        open="none"
    }
    return (
<div>
<Backdrop show={props.open} clicked={props.close} />
    <div style={{display:`${open}`}}>
      <div className="modal-medium-box pos1">

        <div className="modal-row">
            <Col xs={12} md={6}>
                Dewasa
            </Col>
            <Col xs={12} md={6}>
                <Col xs={12} md={4}>
                    <PlusButton></PlusButton>
                </Col>
                <Col xs={12} md={4}>
                    <span>0</span>
                </Col>
                <Col xs={12} md={4}>
                    <MinButton></MinButton>
                </Col>    
            </Col>       
        </div>
        <div  className="modal-row" >
            <Col xs={12} md={6}>
                Dewasa
            </Col>
            <Col xs={12} md={6}>
                <Col xs={12} md={4}>
                    <PlusButton></PlusButton>
                </Col>
                <Col xs={12} md={4}>
                    <span>0</span>
                </Col>
                <Col xs={12} md={4}>
                    <MinButton></MinButton>
                </Col>    
            </Col>       
        </div>
        <div  className="modal-row" >
        <Col xs={12} md={6}>
                Dewasa
            </Col>
            <Col xs={12} md={6}>
                <Col xs={12} md={4}>
                    <PlusButton></PlusButton>
                </Col>
                <Col xs={12} md={4}>
                    <span>0</span>
                </Col>
                <Col xs={12} md={4}>
                    <MinButton></MinButton>
                </Col>    
            </Col>         
        </div>
      </div>
      </div>
      </div>
    );
}



export const ModalKategori = (props) => {
    let open="none"
    if(props.open){
        open="block";
    }else if(props.close){
        open="none"
    }
    return (
    <div><Backdrop show={props.open} clicked={props.close} />
    <div style={{display:`${open}`}}>
      <div className="modal-medium-box pos2">

        <div className="modal-row">
        <Col xs={12} md={6}>
                Dewasa
            </Col>
            <Col xs={12} md={6}>
                <Col xs={12} md={4}>
                    <PlusButton></PlusButton>
                </Col>
                <Col xs={12} md={4}>
                    <span>0</span>
                </Col>
                <Col xs={12} md={4}>
                    <MinButton></MinButton>
                </Col>    
            </Col>       
        </div>
        
 
      </div>
      </div>
      </div>
    );
}

export const ModalLogin = (props) => {
    return (
        <Modal show={props.open} onHide={props.close}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            
                <input type="email" autocomplete="username" className="input-text-login" id="email-login-email" name="email" placeholder="Alamat Email" value=""/>
          
                <input type="email" autocomplete="username" className="input-text-login" id="email-login-email" name="email" placeholder="Kata Sandi" value=""/>
           
                <LongButtonRed click={props.login}>
                    Login
                </LongButtonRed>
            
         
            
        </Modal.Body>

      
      </Modal>
    );
}