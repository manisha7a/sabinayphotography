import React from 'react';
import ImageCarousel from './ImageCarousel';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import '../css/Home.css';

const items = [
    {
        id:1,
        src: "/img/DSC_3169-Edit.jpg",
        altText: 'Maternity Shoot',
    },
    {
        id:2,
        src: "/img/DSC_7741.jpg",
        altText: 'Baby Shoot',
    },
    {
        id:3,
        src: "/img/DSC_1916.jpg",
        altText: 'Function Shoot',
    }
  ];

const Home = () => {
    return(
        <div>
            <Container fluid>
                <Row className="row-content align-items-center">
                    <Col>
                        <ImageCarousel items={items} />
                    </Col>
                </Row>
                <Row className="row-content">
                    <Col xs="12" md="3" >
                        <div className="polaroid">
                            <img className="photographerImage" src="img/DSC_7631.jpg" alt="photographer" style={{width:'100%'}}/>
                            <div className="title">
                                <p className="text-dark font-weight-bold">SABINAY PANDEY, PHOTOGRAPHER/OWNER</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <h3 className="text-dark font-weight-light">Hi There!</h3>
                        <p className="text-dark font-weight-light">I am Auckland based photographer and I have been in the industry for over 5 years now. I have a passion for photography, and I believe things done with passion will always turn out great.</p>
                        <p className="d-none d-sm-block text-dark font-weight-light">Please feel free to check out my work, and let me know if you need any further information.</p>
                        <p className="d-none d-sm-block text-dark font-weight-light">Always happy to have a chat.</p>
                    </Col>
                </Row>
                <Row className="row-content align-items-center">
                    <Col xs="12">
                        <h1 className="text-center">MY WORK</h1>
                        <hr />
                    </Col>
                    <Col xs="12" md="4">
                        <div className="myWorkContainer">
                            <img className="d-block img-fluid myWorkImage" src="img/DSC_2089.jpg" alt="Functions" style={{width:'100%'}} />
                            <div className="middle">
                                <Link to="/services/function"><h4 className="text text-dark">Functions</h4></Link>
                            </div>
                        </div>
                        <hr />
                    </Col>
                    <Col xs="12" md="4">
                        <div className="myWorkContainer">
                            <img className="d-block img-fluid myWorkImage" src="img/DSC_2868-Edit.jpg" alt="Studio Shoots" style={{width:'100%'}} />
                            <div className="middle">
                                <Link to="/services/studioshoot"><h4 className="text text-dark">Studio Shoots</h4></Link>
                            </div>
                        </div>
                        <hr />
                    </Col>
                    <Col cxs="12" md="4">
                        <div className="myWorkContainer">
                            <img className="d-block img-fluid myWorkImage" src="img/DSC_1014.jpg" alt="Maternity Shoots" style={{width:'100%'}} />
                            <div className="middle">
                                <Link to="/services/maternityshoot"><h4 className="text text-dark">Maternity Shoots</h4></Link>
                            </div>
                        </div>
                        <hr />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;