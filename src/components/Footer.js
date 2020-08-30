import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Footer.css';

const Footer = () => {
    return(
        <Container fluid className="footer">
            <Row>
                <Col xs="8" sm="8">
                    <h5>Our Address</h5>
                    <ul className="font-weight-light list-unstyled">
                        <li>Takanini, Auckland</li>
                        <li>New Zealand</li>
                        <li><i className="fa fa-phone fa-lg"></i> Tel.: +64 22-095-7982</li>
                        <li><i className="fa fa-envelope fa-lg"></i> Email: <a className="text-light" href="mailto:sabinay.pandey@gmail.com">sabinay.pandey@gmail.com</a></li>
                    </ul>
                </Col>
                <Col xs="4" sm="4" className="align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/sabinaypandey/"><i className="fa fa-facebook-square fa-2x"></i></a>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/7aphotography/"><i className="fa fa-instagram fa-2x"></i></a>
                        <a className="btn btn-social-icon btn-youtube" href="https://www.youtube.com/channel/UCfLo1P1VBXOrl-l8jfCYd_g"><i className="fa fa-youtube fa-2x"></i></a>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">             
                <Col className="col-auto">
                    <p className="font-italic">© Copyright 2020 7A Photography</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;