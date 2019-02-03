import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';
import './Detail.css';
class CommentDetail extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                
                <Row  >
                    <Col xs={12} md={1}>
                        <div>
                            <img class="_1mgxxu3" src={this.props.commentdata.foto} height="48" width="48" alt="Profil Pengguna Sarah" title="Profil Pengguna Sarah" />
                        </div>
                    </Col>

                    <Col xs={12} md={11} >
                        <div className="comment-user">
                            <div className="text-small-bold ">{this.props.commentdata.nama}</div>
                            <div className="text-small-thin ">{this.props.commentdata.waktu}</div>
                        </div>
                    </Col>
                </Row>
                <Row  >
                    <Col xs={12} md={12}>
                        <div style={{marginTop: `16px`}}>
                            <div className="text-small">
                                {this.props.commentdata.komentar}
                            </div>
                        </div>
                    </Col>
                
                </Row>

                <Row >
                    <Col xs={12} md={12}>
                        <div className="pembatas"></div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CommentDetail;