import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardTitle, CardImg} from 'reactstrap';

import SettingsForm from './SettingsForm';

const URLIMG = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/';

const Setting = ({ setColor }) => {

    return(
        <Card className="bg-light">
            <CardHeader tag="h3" className="text-center">Settings</CardHeader>
            <CardBody>
                <CardTitle tag="h5">Change T-Shirt Color</CardTitle>
                <Row className="tshirt-color">
                    <Col><CardImg onClick={setColor} src={`${URLIMG}white.png`} alt="white" id="white"/></Col>
                    <Col><CardImg onClick={setColor} src={`${URLIMG}black.png`} alt="black" id="black"/></Col>
                    <Col><CardImg onClick={setColor} src={`${URLIMG}grey.png`} alt="grey" id="grey"/></Col>
                    <Col><CardImg onClick={setColor} src={`${URLIMG}blue.png`} alt="blue" id="blue"/></Col>
                </Row>
            </CardBody>
            <CardBody>
                <SettingsForm />
            </CardBody>
        </Card>
    );
}

export default Setting