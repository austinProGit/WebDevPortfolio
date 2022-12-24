import React from 'react';
import SchedulerScreenshot from '../../images/Scheduler.png';

const Scheduler = () => {

  return (
    // title
    // description
    // skills
    // hosted link
    // repo
    <>
    <h2 className='section-title'>Scheduler</h2>
    <p className='project-description'>I worked with a team of three other developers to 
    create a Python application to help college students 
    plan their class paths to graduation. 
    </p>
    <p className='project-description'>See the entire codebase on <a href="https://github.com/austinProGit/scheduler">my GitHub.</a></p>
    <img src={SchedulerScreenshot} alt="" className='project-screenshot'/>
    
    </>
  );
};

export default Scheduler;