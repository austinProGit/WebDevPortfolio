import React from 'react';
import { Card } from 'react-bootstrap';
import portrait from '../images/portrait.JPG';
import '../sass/App.scss';

const AboutMe = () => (
  <>
  <div id='about' className='portrait-container'>
    <img className='portrait' src={portrait} alt="" />
  </div>
  <div className='about-me-container'>
    <Card className='about-me-card'>
      <Card.Body>
        <Card.Title className='section-title'>Who I Am</Card.Title>
        <Card.Text>
          I am a junior web developer with a passion for creating user-friendly, 
          visually appealing websites and applications. I am also interested in 
          exploring the potential applications of AI in web development. 
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='about-me-card'>
      <Card.Body>
        <Card.Title className='section-title'>What I Do</Card.Title>
        <Card.Text>
          Whether creating simple content-managed websites using wordpress, 
          complex apps using React, or working on Enterprise applications 
          using complex tech stacks, I always find great satisfaction in 
          producing professional content on the web. Find a sample of my 
          skills and projects below.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  </>
);

export default AboutMe;
