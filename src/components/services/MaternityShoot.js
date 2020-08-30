import React from 'react';
import { Container, 
    Row, 
    Col, 
    Breadcrumb, 
    BreadcrumbItem,
   } from 'reactstrap';
import { Link } from 'react-router-dom';

import PhotoGallery from '../PhotoGallery';
import PriceCard from '../PriceCard';
import HorizontalNav from '../HorizontalNav';

const images = [
    {
        src: "/img/maternityshoot/DSC_1034.jpg",
        altText: 'Reception',
        lg: 3,
        md: 5
    },
    {
        src: "/img/maternityshoot/DSC_6945-2.jpg",
        altText: 'Cake Smash',
        lg: 6,
        md: 7
    },
    {
        src: "/img/maternityshoot/DSC_3156-Edit.jpg",
        altText: 'Wedding',
        lg: 3,
        md: 6
    },
    {
        src: "/img/maternityshoot/DSC_3174-Edit.jpg",
        altText: 'Rice Weaning',
        lg: 3,
        md: 6
    },
    {
        src: "/img/maternityshoot/DSC_7482.jpg",
        altText: 'Reaception',
        lg: 6,
        md: 7
    },
    {
        src: "/img/maternityshoot/DSC_1048.jpg",
        altText: 'Reception',
        lg: 3,
        md: 5
    },
  ];

  const cardTexts = [
    {
        id: 1,
        text: 'Limited to 2 hrs. An extra $80/hr will be charge for extra hours'
    },
    {
        id: 2,
        text: 'Edited photos'
    },
    {
        id: 3,
        text: 'Upto 20 photos'
    },
    {
        id: 4,
        text: 'Will be shoot outdoors'
    },
    {
        id: 5,
        text: 'Photos can be collected in a pendrive OR from google drive'
    },
]; 

const MaternityShoot = () => {
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
                            <PriceCard cardTitle="Maternity Shoot $180/session" cardTexts={cardTexts}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default MaternityShoot;