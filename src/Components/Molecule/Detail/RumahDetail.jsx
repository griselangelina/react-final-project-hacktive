import React, { Component } from 'react';
import {Row,Col,Grid} from 'react-bootstrap';

import './Detail.css';
class RumahDetail extends Component {
    render() {
        return (
               <div>
                <Row className="summary" >
                    <Col xs={12} md={12}>
                    <span className="span-1">seluruh rumah</span>
                    </Col>
                   
                </Row>
                <Row >
                    <Col xs={12} md={12}>
                        <Row>
                            <Col xs={12} md={8}>
                                <span class="title-detail">{this.props.rumah.nama}</span>
                            </Col>
                            <Col xs={12} md={4}>
                                <img class="_1mgxxu3" src={this.props.rumah.foto_pemilik} height="64" width="64" alt="Profil Pengguna Anna" title="Profil Pengguna Anna" />
                        </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} className="rooms">
                                <div className="rooms-detail" style={{textAlign:`center`}}>4 tamu</div>
                                <div className="rooms-detail">1 kamar tidur</div>
                                <div className="rooms-detail">2 kamar tidur</div>
                                <div className="rooms-detail">1 kamar mandi</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12} className="profile">
                                <div className="person">{this.props.rumah.pemilik} adalah seorang HosTeladan.</div>
                                <div className="person-detail">{this.props.rumah.summary}</div>

                            </Col>
                        </Row>
                    
                    </Col>
                    
                   
                </Row>
                </div>
        );
    }
}

export default RumahDetail;