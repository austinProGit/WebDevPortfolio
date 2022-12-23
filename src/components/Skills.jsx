import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../sass/App.scss';
import htmlSVG from '../images/html.svg';
import cssSVG from '../images/css.svg';
import javaScriptSVG from '../images/javaScript.svg';
import pythonSVG from '../images/python.svg';
import javaSVG from '../images/java.svg';
import reactSVG from '../images/react.svg';
import nodeSVG from '../images/node.svg';
import mongoSVG from '../images/mongo.svg';
import azureSVG from '../images/azure.svg';
import openAISVG from '../images/openAI.svg';
import wordPressSVG from '../images/wordpress.svg';


const Skills = () => (
    <>
    <Container id='skills' className='skills-container mx-auto'>
        <Row>
            <Col><h3 className='section-title'>Skills</h3></Col>
        </Row>
        <Row className='skill-row'>
            <Col sm={3} className='skill-label-container'><img src={htmlSVG} alt="HTML" /><p className="skill-label">HTML</p></Col>
            <Col><ProgressBar animated now={95} className="skill-bar" /></Col>
        </Row>
        <Row className='skill-row'>
            <Col sm={3} className='skill-label-container'><img src={cssSVG} alt="CSS" /><p className="skill-label">CSS</p></Col>
            <Col><ProgressBar animated now={75} className="skill-bar" /></Col>
        </Row>
        <Row className='skill-row'>
            <Col sm={3} className='skill-label-container'><img src={javaScriptSVG} alt="JavaScript" /><p className="skill-label">JavaScript</p></Col>
            <Col><ProgressBar animated now={75} className="skill-bar" /></Col>
        </Row>
        <Row className='skill-row'>
            <Col sm={3} className='skill-label-container'><img src={openAISVG} alt="ChatGPT" /><p className="skill-label">ChatGPT</p></Col>
            <Col><ProgressBar animated now={25} className="skill-bar" /></Col>
        </Row>
        <Row className='skill-row'>
            <Col sm={3} className='skill-label-container'><img src={pythonSVG} alt="Python" /><p className="skill-label">Python</p></Col>
            <Col><ProgressBar animated now={75} className="skill-bar" /></Col>
        </Row>
        <Row className='skill-row'>
            <Col sm={3} className='skill-label-container'><img src={javaSVG} alt="Java" /><p className="skill-label">Java</p></Col>
            <Col><ProgressBar animated now={75} className="skill-bar" /></Col>
        </Row>
        <Row className='skill-row'>
            <Col sm={3} className='skill-label-container'><img src={reactSVG} alt="React" /><p className="skill-label">React</p></Col>
            <Col><ProgressBar animated now={25} className="skill-bar" /></Col>
        </Row>
        <Row className='skill-row'>
            <Col sm={3} className='skill-label-container'><img src={wordPressSVG} alt="WordPress" /><p className="skill-label">WordPress</p></Col>
            <Col><ProgressBar animated now={70} className="skill-bar" /></Col>
        </Row>
        <Row className='skill-row'>
            <Col sm={3} className='skill-label-container'><img src={nodeSVG} alt="Node" /><p className="skill-label">Node.js</p></Col>
            <Col><ProgressBar animated now={25} className="skill-bar" /></Col>
        </Row>
        <Row className='skill-row'>
            <Col sm={3} className='skill-label-container'><img src={mongoSVG} alt="MongoDB" /><p className="skill-label">MongoDB</p></Col>
            <Col><ProgressBar animated now={25} className="skill-bar" /></Col>
        </Row>
        <Row className='skill-row'>
            <Col sm={3} className='skill-label-container'><img src={azureSVG} alt="Azure" /><p className="skill-label">Azure</p></Col>
            <Col><ProgressBar animated now={25} className="skill-bar" /></Col>
        </Row>
    </Container>
    </>
);

export default Skills;
