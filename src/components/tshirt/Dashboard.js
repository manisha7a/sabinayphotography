import React, { useState } from 'react';
import Display from './Display';
import Setting from './Setting';
import { Container, Row, Col} from 'reactstrap';

const Dashboard = () => {
    const [tshirtColor, setTshirtColor] = useState('black');

    const handleTshirtColor = event => {
        setTshirtColor(event.target.id);
    }

    return(
        <Container className="py-5" fluid>
            <Row className="row-content">
                <Col lg="8">
                    <Display tshirtColor={tshirtColor} />
                </Col>
                <Col lg="4">
                    <Setting setColor={handleTshirtColor} />
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard