import React from 'react';
import ToDoScreenshot from '../../images/ToDo.png';

const ToDo = () => {

  return (
    <>
      <h2 className='section-title'>ToDo</h2>
      <a href="https://todoapp-3skh.onrender.com" target="_blank" rel="noopener noreferrer">
        <img src={ToDoScreenshot} alt="" className='project-screenshot'/>
      </a>
      <p className='project-description'>
        Simple todo app coded in HTML, CSS, and JavaScript, with Bootstrap for responsive design.</p>
      <p className='project-description'>Check out my project hosted on&nbsp;
        <a href="https://todoapp-3skh.onrender.com" target="_blank" rel="noopener noreferrer">Render</a> 
        &nbsp;or see the codebase on my&nbsp;<a href="https://github.com/austinProGit/toDoApp" target="_blank" rel="noopener noreferrer">GitHub.</a></p>
    </>
  );
};

export default ToDo;