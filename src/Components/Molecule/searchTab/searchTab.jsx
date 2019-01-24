import React, { Component } from 'react';
import {Row,Col,PageHeader,Grid} from 'react-bootstrap';
import {InputText} from '../../Atom/InputText';
import {ButtonSearch} from '../../Atom/Button';

import './searchTab.css';
class searchTab extends Component {
  render() {
    return (
            <Grid className="header-search-tab">
                <Row >
                    <Col xs={12} md={4}>
                    <h1>Rencanakan perjalanan Anda berikutnya</h1>
                    </Col>
                </Row>
                <Row >
                <Col xs={12} md={6} className="search-form">
                    <InputText></InputText>
                    <ButtonSearch></ButtonSearch>
                    </Col>
                </Row>
            </Grid>
    );
  }
}

export default searchTab;
