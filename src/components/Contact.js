import React from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Contact = () => {
    return(
        <div>
            <Row>
                <Col>
                    <Breadcrumb>
                        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>About</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;