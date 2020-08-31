import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Card } from 'reactstrap';

const About = () => {
    return(
        <Container fluid>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>About</BreadcrumbItem>
            </Breadcrumb>
            <Row className="row-content">
                <Col>
                    <Row className="align-items-start">
                        <Col xs="12" md="3">
                            <img className="d-block img-fluid" src="img/DSC_7631.jpg" alt="photographer" />
                            <hr />
                        </Col>
                        <Col>
                            <h2 className="text-dark">SABINAY PANDEY, PHOTOGRAPHER</h2>
                            <p className="text-dark font-weight-light">Hi There! I am Auckland based photographer and I have been in the industry for over 5 years now. I have a passion for photography, and I believe things done with passion will always turn out great.</p>
                            <p className="d-none d-sm-block text-dark font-weight-light"> Please feel free to check out my work, and let me know if you need any further information.</p>
                            <p className="d-none d-sm-block text-dark font-weight-light">Always happy to have a chat.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-start">
                        <Col>
                            <Card body className="bg-light">
                                <blockquote className="blockquote">
                                    <p className="mb-0">You don't take a photograph, you make it!
                                    </p>
                                    <footer className="blockquote-footer">Ansel Adams</footer>
                                </blockquote>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default About;