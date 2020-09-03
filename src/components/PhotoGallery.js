import React from 'react';
import { Row, Col } from 'reactstrap';
import '../css/PhotoGallery.css';

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
           
        </div>
    );
};

export default PhotoGallery;