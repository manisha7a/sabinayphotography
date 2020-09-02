import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectList from './ProjectList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Projects = ({designs}) => {
    return (
        <Container fluid>
            <div className="bg-dark text-white">My Projects</div>
            <Row className="mr-auto">
                <Col>
                    <ProjectList designs={designs}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link className="btn-secondary btn-sm" to="/tshirt/dashboard">Create New Project</Link>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        designs: state.design.designs
    }
}

export default connect(mapStateToProps)(Projects);