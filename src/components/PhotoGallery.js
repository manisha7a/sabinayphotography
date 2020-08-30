import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './PhotoGallery.css';

const PhotoGallery = ( {images} ) => {
   const gallery = images.map(image => {
        return(
            <Col key={image.src} lg={image.lg} md={image.md} xs="12">
                <img className="img-fluid img-thumbnail" src={image.src} alt={image.altText} />
            </Col>
        )});

    return(
        <div>
            <Row className="text-center text-lg-left">{gallery}</Row>
            <Container>
                <span onclick="this.parentElement.style.display='none'" className="closebtn">&times;</span>
                <img className="expandedImg" style= {{width:'100%'}} />
            </Container>
        </div>
    );
};

export default PhotoGallery;