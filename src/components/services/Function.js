import React from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import PriceCard from '../PriceCard';
import PhotoGallery from '../PhotoGallery';
import HorizontalNav from '../HorizontalNav';

const images = [
    {
        src: "/img/functions/DSC_5188.jpg",
        altText: 'Reception',
        lg: 3,
        md: 4
    },
    {
        src: "/img/functions/DSC_2099.jpg",
        altText: 'Cake Smash',
        lg: 3,
        md: 4
    },
    {
        src: "/img/functions/DSC_5821.jpg",
        altText: 'Wedding',
        lg: 3,
        md: 4
    },
    {
        src: "/img/functions/DSC_7217.jpg",
        altText: 'Rice Weaning',
        lg: 3,
        md: 6
    },
    {
        src: "/img/functions/DSC_6313.jpg",
        altText: 'Reaception',
        lg: 3,
        md: 6
    },
    {
        src: "/img/functions/DSC_8277.jpg",
        altText: 'Reception',
        lg: 3,
        md: 4
    },
    {
        src: "/img/functions/DSC_8758.jpg",
        altText: 'Birthday',
        lg: 3,
        md: 4
    },
    {
        src: "/img/functions/DSC_8971.jpg",
        altText: 'Birthday',
        lg: 3,
        md: 4
    },
  ];

const cardTexts = [
    {
        id: 1,
        text: 'Unlimited hours'
    },
    {
        id: 2,
        text: 'Edited photos'
    },
    {
        id: 3,
        text: 'Min 150 photos'
    },
    {
        id: 4,
        text: 'Photos can be collected in a pendrive OR from google drive'
    },

]; 

const Function = () => {
    return(
        <Container fluid>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem>Services</BreadcrumbItem>
               <BreadcrumbItem active>Functions</BreadcrumbItem>
            </Breadcrumb>
            <Row className="row-content no-gutters">
                <Col xs="2" className="d-none d-sm-block">
                    <p>Services</p>
                    <HorizontalNav />
                </Col>
                <Col xs="10">
                    <Row>
                        <Col>
                            <PhotoGallery images={images}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PriceCard cardTitle="Functions $80/hr" cardTexts={cardTexts}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Function;