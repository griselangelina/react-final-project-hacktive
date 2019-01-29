import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';
import {InputTamu} from '../../Atom/InputText';
import {PesanBtn} from  '../../Atom/Button';
class FormPrice extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col  xs={12} md={12} className="margin16px">
                    <div class="text-xs">tanggal</div>
                    <div>
                        <InputTamu />
                    </div>
                    
                    </Col>
                    <Col  xs={12} md={12} className="margin16px">
                    <div class="text-xs">tamu</div>
                    <div>
                        <InputTamu />
                    </div>
                    </Col>
                    <Col  xs={12} md={12}>
                   
                    <div>
                        <PesanBtn>
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