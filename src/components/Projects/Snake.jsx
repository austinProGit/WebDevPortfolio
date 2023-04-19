import React from 'react';
import SnakeScreenshot from '../../images/Snake.png';

const Snake = () => {

  return (
    <>
    <h2 className='section-title'>Snake</h2>
    <a href="https://snake-aweh.onrender.com"><img src={SnakeScreenshot} alt="" className='project-screenshot'/></a>
    <p className='project-description'>
        The classic Snake game coded using just the fundamental tools of web development: 
        HTML, CSS, and JavaScript.
    </p>
    <p className='project-description'>Check out my project hosted <a href="https://snake-aweh.onrender.com">on Render</a> or see the codebase on <a href="https://github.com/austinProGit/snake">my GitHub.</a></p>
    </>
  );
};

export default Snake;