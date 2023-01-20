import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../sass/App.scss';
import Hangman from '../components/Projects/Hangman';
import ToDo from '../components/Projects/ToDo';
import Scheduler from './Projects/Scheduler';

const Projects = (props) => (
    <>
        <div id='projects' className='scroll-padded-item'>
            <Container fluid id='projects-container'>
                <Row>
                    <Col><h3 className='section-title' id='projects-title'>Projects</h3></Col>
                </Row>
                <Row className='project-row'>
                    <Col className='project'><Hangman></Hangman></Col>
                    <Col className='project'>Animal Pic App</Col>
                    <Col className='project'>Google Clone with Perfect Lighthouse Score</Col>
                </Row>
                <Row className='project-row'>
                    <Col className='project'><ToDo></ToDo></Col>
                    <Col className='project'><Scheduler></Scheduler></Col>
                    <Col className='project'>Player Versus</Col>
                </Row>
            </Container>
        </div>
    </>
);

export default Projects;
