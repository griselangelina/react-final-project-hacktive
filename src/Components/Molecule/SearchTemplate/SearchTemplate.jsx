import React, { Component } from 'react';
import './SearchTemplate.css';
import {SearchBtn} from '../../Atom/Button';
import {InputTamu} from '../../Atom/InputText';
import {Row,Col} from 'react-bootstrap';


class SearchTemplate extends Component {
    render() {
        return (
            <div className="template">
            <Row className="search-template">
                <Col  xs={12} md={12} className="search-title">
                   <p className="text-super-big">Pesan rumah dan pengalaman unik.</p>
                </Col>
                <Col  xs={12} md={12} className="margin16px">
                <div class="span-1">tanggal</div>
                <div>
                    <InputTamu />
                </div>
                
                </Col>
                <Col  xs={12} md={6} className="margin16px">
                <div class="span-1">Check In</div>
                <div>
                    <InputTamu />
                </div>
                </Col>
                <Col  xs={12} md={6} className="margin16px">
                <div class="span-1">Check Out</div>
                <div>
                    <InputTamu />
                </div>
                </Col>
                <Col  xs={12} md={12} className="margin16px">
                <div class="span-1">tamu</div>
                <div>
                    <InputTamu />
                </div>
                </Col>
                <Col  xs={12} md={12}>
               
                <div>
                    <SearchBtn>
                        Search
                    </SearchBtn>
                </div>
                </Col>
                
            </Row>
        </div>
        );
    }
}

export default SearchTemplate;