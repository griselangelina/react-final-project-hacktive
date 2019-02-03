import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';
import {InputTamu} from '../../Atom/InputText';
import {PesanBtn} from  '../../Atom/Button';

import { Redirect } from "react-router-dom";
import axios from 'axios';
class FormPrice extends Component {
    constructor(props){
        super(props)
        this.state={
            formControls:{
                nama:"",
                jumlah:"",
            },
            isPesan:false,
        }
    }
    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            formControls: {...this.state.formControls,
              [name]: value
            }
        });
    }

    click = (data) =>{
        if(this.props.islogin){
            if(data.nama===""|| data.jumlah===""){
                alert("Data cannot be empty")
            }else{
                axios.post( 'https://testingdb-7a13b.firebaseio.com/pesan.json', data )
                .then( response => {
                    alert("pesan sukses")
                    this.setState({isPesan:true})
                } )
                .catch( error => {
                    console.log( "error axios post" );
                });
            }
        }else{
            alert("Login First")
        }
        
    }

    render() {
        console.log("return ",this.state.isPesan)
        if(this.state.isPesan){
         return   <Redirect to="/" />
        }
        return (
            <div>
                <Row>
                    <Col  xs={12} md={12} className="margin16px">
                        <div class="text-xs">Nama</div>
                        <div>
                            <InputTamu type={"text"} name={"nama"} value={this.state.nama}  change={this.changeHandler}/>
                        </div>
                    </Col>
                    <Col  xs={12} md={12} className="margin16px">
                        <div class="text-xs">Jumlah</div>
                        <div>
                            <InputTamu type={"number"} name={"jumlah"} value={this.state.jumlah} change={this.changeHandler}/>
                        </div>
                    </Col>
                    <Col  xs={12} md={12}>
                        <div>
                            <PesanBtn click={this.click} data={this.state.formControls}>
                                Pesan
                            </PesanBtn>
                        </div>
                    </Col>
                    <Col  xs={12} md={12}>
                        <div className="pembatas"></div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default FormPrice;