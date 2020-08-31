import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import ContactUsForm from './ContactUsForm';

const Contact = () => {
    return(
        <Container fluid>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Contact</BreadcrumbItem>
            </Breadcrumb>
            <Row className="row-content">
                <Col>
                    <ContactUsForm />
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;