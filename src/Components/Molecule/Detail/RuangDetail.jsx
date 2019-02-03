import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';
import './Detail.css';

class RuangDetail extends Component {
    render() {
        return (
            <div>
                 <Row  >
                    <Col xs={12} md={12} className="ruang">
                        <div><span >Ruang</span></div>
                    </Col>
                
                </Row>
                <Row >
                    <Col xs={12} md={12}>
                        <div className="ruang-detail">
                            <span>
                                Spend a unforgettable holiday in the enchanting surroundings of the town of Cisternino (reachable from the near airports of Bari and Brindisi). 
                                Trullo Edera offers a heaven of peace and tranquillity, set in an elevated position with a stunning view. 
                                It's the perfect place if you like nature. You can stay under an olive tree reading a good book, you can have a walk in the small country streets or go to the nearest beaches. 
                                You can even easily visit any of the sights in Apulia such as the caves of Castellana, the trulli of Alberobello, the baroque cities of Lecce and Martina Franca, the excavations of Egnazia, the zoosafari of Fasano, Castel del Monte with Frederick's castle, Grottaglie famous for its ceramics, Taranto, Brindisi and Lecce museums.
                                Prices vary on period and are to be considered included: in-outcoming cleanings, towels, sheets, water, gas, electricity.
                            </span>
                        </div>
                    </Col>
                
                </Row>
                <Row>
                    <Col  xs={12} md={12} className="ruang">
                        <div type="button" class="_1k01n3v1" aria-busy="false">Hubungi tuan rumah</div>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default RuangDetail;