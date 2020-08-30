import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardText, CardBody,CardTitle} from 'reactstrap';

const PriceCard = ( {cardTitle, cardTexts} ) => {
    const text = cardTexts.map(cardText =>{
        return(
                <CardText key={cardText.id}><i className="fa fa-check"></i> {cardText.text}</CardText>
            )});

    return(
        <Card>
            <CardBody>
                <CardTitle className="h2">{cardTitle}</CardTitle>
                {text}
                <Link to="/contact" className="btn btn-dark">Get In Touch</Link>
            </CardBody>
        </Card>
    );
};

export default PriceCard;