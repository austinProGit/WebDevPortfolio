import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import React from 'react';


function MainBody(){
  return (
    <div>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default MainBody;
