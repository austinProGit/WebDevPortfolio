import React from 'react';
import SnakeScreenshot from '../../images/Snake.png';

const Snake = () => {

  return (
    <>
    <h2 className='section-title'>Snake</h2>
    <a href="https://snake-aweh.onrender.com" target="_blank" rel="noopener noreferrer">
      <img src={SnakeScreenshot} alt="" className='project-screenshot'/>
    </a>
    <p className='project-description'>
        The classic Snake game coded using just the fundamental tools of web development: 
        HTML, CSS, and JavaScript.
    </p>
    <p className='project-description'>Check out my project hosted on&nbsp;
      <a href="https://snake-aweh.onrender.com" target="_blank" rel="noopener noreferrer">Render</a> 
      &nbsp;or see the codebase on my&nbsp;<a href="https://github.com/austinProGit/snake" target="_blank" rel="noopener noreferrer">GitHub.</a>
    </p>
    </>
  );
};

export default Snake;