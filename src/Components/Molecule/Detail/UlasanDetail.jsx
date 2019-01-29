import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';
import {LongButton} from '../../Atom/Button';
import {StarLarge,StarSmall} from '../../Atom/Star';
import './Detail.css';

class UlasanDetail extends Component {
    render() {
        return (
            <div>
                <Row  >
                    <Col xs={12} md={12}>
                    <div>
                        <span className="ulasan-text">155 Ulasan</span>
                        <span className="penilaian"> 
                            <StarLarge />
                            <StarLarge />
                            <StarLarge />
                        </span>  
                        
                        <hr /> 
                    </div>
                    </Col>
                
                </Row>
                <Row  >
                    <Col xs={12} md={6}>
                        <div>
                            <Col xs={12} md={6}>
                            <span className="text-small">
                                        Keakuratan
                                    </span>
                            </Col>
                            <Col xs={12} md={6}>
                                <span className="penilaian"> 
                                    <StarSmall />
                                    <StarSmall />        
                                </span>  
                            </Col>
                       </div>
                       <div>
                            <Col xs={12} md={6}>
                            <span className="text-small">
                                        Komunikasi
                                    </span>
                            </Col>
                            <Col xs={12} md={6}>
                                <span className="penilaian"> 
                                    <StarSmall />
                                    <StarSmall />        
                                </span> 
                            </Col>
                       </div>
                       <div>
                            <Col xs={12} md={6}>
                            <span className="text-small">
                                        Kebersihan
                                    </span>
                            </Col>
                            <Col xs={12} md={6}>
                                <span className="penilaian"> 
                                    <StarSmall />
                                    <StarSmall />        
                                </span>
                            </Col>
                       </div>
                    </Col>
                    
                    <Col xs={12} md={6}>
                        <div>
                            <Col xs={12} md={6}>
                            <span className="text-small">
                                        Keakuratan
                                    </span>
                            </Col>
                            <Col xs={12} md={6}>
                                <span className="penilaian"> 
                                    <StarSmall />
                                    <StarSmall />        
                                </span>
                            </Col>
                       </div>
                       <div>
                            <Col xs={12} md={6}>
                            <span className="text-small">
                                        Komunikasi
                                    </span>
                            </Col>
                            <Col xs={12} md={6}>
                                <span className="penilaian"> 
                                    <StarSmall />
                                    <StarSmall />        
                                </span>
                            </Col>
                       </div>
                       <div>
                            <Col xs={12} md={6}>
                            <span className="text-small">
                                        Kebersihan
                                    </span>
                            </Col>
                            <Col xs={12} md={6}>
                                <span className="penilaian"> 
                                    <StarSmall />
                                    <StarSmall />        
                                </span>
                            </Col>
                       </div>
                    </Col>
                    
                </Row>
                <Row  >
                    <Col xs={12} md={12}>
                    <div className="pembatas-div"></div>
                    </Col>
                
                </Row>
                <Row  >
                    <Col xs={12} md={12}>
                    <div>
                        <LongButton>Terjemahkan Ulasan
                            </LongButton>
                    </div>
                    </Col>      
                </Row>
            </div>
        );
    }
}

export default UlasanDetail;