import React from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import PriceCard from '../PriceCard';
import PhotoGallery from '../PhotoGallery';
import HorizontalNav from '../HorizontalNav';

const images = [
    {
        src: "/img/studioshoot/DSC_2845-Edit.jpg",
        altText: 'Reception',
        lg: 3,
        md: 5
    },
    {
        src: "/img/studioshoot/DSC_3117-Edit-2.jpg",
        altText: 'Cake Smash',
        lg: 6,
        md: 7
    },
    {
        src: "/img/studioshoot/DSC_2953-Edit.jpg",
        altText: 'Wedding',
        lg: 3,
        md: 4
    },
    {
        src: "/img/studioshoot/DSC_2229.jpg",
        altText: 'Rice Weaning',
        lg: 3,
        md: 4
    },
    {
        src: "/img/studioshoot/DSC_3044-Edit-2.jpg",
        altText: 'Reaception',
        lg: 3,
        md: 4
    },
    {
        src: "/img/studioshoot/DSC_2348-Edit.jpg",
        altText: 'Reception',
        lg: 3,
        md: 6
    },
    {
        src: "/img/studioshoot/DSC_3070-Edit.jpg",
        altText: 'Birthday',
        lg: 3,
        md: 6
    },
  ];

  const cardTexts = [
    {
        id: 1,
        text: 'Limited to 2 hrs. An extra $80/hr will be charge for extra hours'
    },
    {
        id: 2,
        text: 'Can change upto two clothes'
    },
    {
        id: 3,
        text: 'Edited photos'
    },
    {
        id: 4,
        text: 'Upto 20 photos'
    },
    {
        id: 5,
        text: 'You can choose photos right after the photoshoot is over'
    },
    {
        id: 6,
        text: 'Photos can be collected in a pendrive OR from google drive'
    },

];

const StudioShoot = () => {
    return(
        <Container fluid>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem>Services</BreadcrumbItem>
               <BreadcrumbItem active>StudioShoot</BreadcrumbItem>
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
                            <PriceCard cardTitle="Studio Shoot $200/session" cardTexts={cardTexts}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default StudioShoot;