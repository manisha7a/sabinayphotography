import React from 'react';
import { Container, Button, Card, CardImg, CardBody, CardTitle, Row, Col } from 'reactstrap';

const ProjectList = ({ designs }) => {
    const tDesigns = designs.map( design => (
        <Col xs="12" md="2" key={design.id}>
            <Card>
                <CardImg className="img-thumbnail" top src={design.src} alt="t-shirt" />
                <CardBody>
                    <CardTitle>{design.name}</CardTitle>
                    <Button color="secondary">View Project</Button>
                </CardBody>
            </Card>
        </Col>
    ));

    return (
        <Container fluid className="mt-2 mb-2">
            <Row>
                {tDesigns}
            </Row>
        </Container>
    );
}

export default ProjectList;