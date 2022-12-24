import React from 'react';
import ToDoScreenshot from '../../images/ToDo.png';

const ToDo = () => {

  return (
    <>
      <h2 className='section-title'>ToDo</h2>
      <p className='project-description'>This simple to-do helper app is also coded in HTML, CSS, and JavaScript. However, I incorporated Bootstrap for easy responsive design.</p>
      <p className='project-description'>Check out my project hosted <a href="https://todoapp-3skh.onrender.com">on Render</a> or see the codebase on <a href="https://github.com/austinProGit/toDoApp">my GitHub.</a></p>
      <a href="https://todoapp-3skh.onrender.com"><img src={ToDoScreenshot} alt="" className='project-screenshot'/></a>
    </>
  );
};

export default ToDo;