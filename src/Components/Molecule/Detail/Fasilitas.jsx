import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';
import './Detail.css';

class Fasilitas extends Component {
    render() {
        return (
            <div>
                <Row  >
                    <Col xs={12} md={12} className="ruang">
                        <div><span >Fasilitas</span></div>
                    </Col>
                </Row>
                <Row>
                    <Col  xs={12} md={6} className="fasilitas-column ">
                        <div className="fasilitas-cell">
                            <div class="fasilitas-icon"><svg style={{    height: `19px`,width: `19px`,fill: `currentcolor`}} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="m12 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5.92-5.78a.5.5 0 1 1 -.84.55c-1.19-1.81-3.07-2.77-5.08-2.77s-3.89.96-5.08 2.78a.5.5 0 0 1 -.84-.55c1.38-2.1 3.58-3.23 5.92-3.23s4.54 1.13 5.92 3.23zm2.98-3.03a.5.5 0 1 1 -.79.61c-1.66-2.14-5.22-3.8-8.11-3.8-2.83 0-6.26 1.62-8.12 3.82a.5.5 0 0 1 -.76-.65c2.05-2.42 5.75-4.17 8.88-4.17 3.19 0 7.05 1.8 8.9 4.19zm2.95-2.33a.5.5 0 0 1 -.71-.02c-2.94-3.07-6.71-4.84-11.14-4.84s-8.2 1.77-11.14 4.85a.5.5 0 0 1 -.72-.69c3.12-3.27 7.14-5.16 11.86-5.16s8.74 1.89 11.86 5.16a.5.5 0 0 1 -.02.71z" fill-rule="evenodd"></path></svg></div>
                            <div class="fasilitas-text">Wifi</div>
                        </div>

                        <div className="fasilitas-cell">
                            <div class="fasilitas-icon">
                                <svg style={{    height: `19px`,width: `19px`,fill: `currentcolor`}}  viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm .5-17h-4.5v11.5a.5.5 0 0 0 1 0v-4.5h3.5c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5zm0 6h-3.5v-5h3.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5z" fill-rule="evenodd"></path></svg>
                            </div>
                            <div class="fasilitas-text">Parkir gratis di areal properti</div>
                        </div>
                    </Col>
                    <Col  xs={12} md={6} className="fasilitas-column ">
                        <div className="fasilitas-cell">
                            <div class="fasilitas-icon">
                                <svg style={{    height: `19px`,width: `19px`, fill: `currentcolor`}}  viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="m10.5 0a .5.5 0 0 0 -.5.5v7a .5.5 0 0 1 -.49.5h-1.51v-7.5a.5.5 0 1 0 -1 0v7.5h-1.51a.5.5 0 0 1 -.49-.5v-7a .5.5 0 1 0 -1 0v7c0 .83.67 1.5 1.49 1.5h1.51v5c0 .03.01.06.02.09a1.49 1.49 0 0 0 -1.02 1.41v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.66-.43-1.21-1.02-1.41.01-.03.02-.06.02-.09v-5h1.51a1.5 1.5 0 0 0 1.49-1.5v-7a .5.5 0 0 0 -.5-.5zm-2.5 15.5v7a .5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5zm11.5-15.5h-2c-1.4 0-2.5 1.07-2.5 2.5v7c0 1.43 1.1 2.5 2.5 2.5h1.5v2.09a1.49 1.49 0 0 0 -.5-.09c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-22.5zm-2 11c-.86 0-1.5-.63-1.5-1.5v-7c0-.87.65-1.5 1.5-1.5h1.5v10zm1.5 11.5a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5z" fill-rule="evenodd"></path></svg>
                            </div>
                            <div class="fasilitas-text">Dapur</div>
                        </div>
                        
                        <div className="fasilitas-cell">
                            <div class="fasilitas-icon">
                                <svg  style={{    height: `19px`,width: `19px`,fill: `currentcolor`}} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="m16 13.54v-9.55a4 4 0 0 0 -4-3.99c-2.21 0-4 1.79-4 3.99v9.55a5.98 5.98 0 0 0 -2 4.46 6 6 0 1 0 12 0 5.98 5.98 0 0 0 -2-4.46zm-4 9.46a5 5 0 0 1 -3.18-8.86.5.5 0 0 0 .18-.39v-9.76a3 3 0 0 1 3-2.99c1.66 0 3 1.34 3 2.99v9.77a.5.5 0 0 0 .18.39 5 5 0 0 1 -3.18 8.85zm2-8.45v-10.54a2 2 0 1 0 -4 0v10.54a3.99 3.99 0 0 0 -2 3.45 4 4 0 0 0 8 0 3.99 3.99 0 0 0 -2-3.45zm-2 6.45a3 3 0 0 1 -1.29-5.71.5.5 0 0 0 .28-.45v-10.83a1 1 0 1 1 2 0v10.83a.5.5 0 0 0 .28.45 3 3 0 0 1 -1.27 5.71z" fill-rule="evenodd"></path></svg>
                            </div>
                            <div class="fasilitas-text">Pemanas Ruangan</div>
                        </div>
                    
                    </Col>
                </Row>
                <Row>
                    <Col  xs={12} md={12} className="ruang">
                         <div type="button" class="_1k01n3v1" aria-busy="false">Tampilkan Semua Fasilitas</div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Fasilitas;