import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';
import './Detail.css';
import {BedCard} from '../Card/Card/Card';

class TempatTidur extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} md={12} className="ruang">
                    <div><span >Pengaturan Tempat Tidur</span></div>
                    </Col>
                
                </Row>
                <Row>
                    <Col  xs={12} md={4}>
                        <BedCard />
                    </Col>

                    <Col  xs={12} md={4} >
                        <BedCard />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TempatTidur;