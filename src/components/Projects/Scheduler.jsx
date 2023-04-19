import React from 'react';
import SchedulerScreenshot from '../../images/Scheduler.png';

const Scheduler = () => {

  return (
    <>
    <h2 className='section-title'>Scheduler</h2>
    <img src={SchedulerScreenshot} alt="" className='project-screenshot'/>
    <p className='project-description'>An in-progress team project that allows 
    students to schedule their paths to graduation, taking into account seasonal 
    course offerings, course prerequisites/corequisites, and a given student's 
    previously-taken courses. Incorporates numerous advanced features, including 
    multiple AI modules, automatic installers and updates, web crawler modules, 
    and more! Developed skills: Python, regex, graph theory, and web crawling.
    </p>
    <p className='project-description'>See the entire codebase on <a href="https://github.com/austinProGit/scheduler">my GitHub.</a></p>
    </>
  );
};

export default Scheduler;