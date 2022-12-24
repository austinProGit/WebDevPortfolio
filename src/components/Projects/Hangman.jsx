import React from 'react';
import HangmanScreenshot from '../../images/Hangman.png';

const Hangman = () => {

  return (
    // title
    // description
    // skills
    // hosted link
    // repo
    <>
    <h2 className='section-title'>Hangman</h2>
    <p className='project-description'>I coded the classic Hangman game from scratch using just the fundamental tools of web development: HTML, CSS, and JavaScript.</p>
    <p className='project-description'>Check out my project hosted <a href="https://hangman-s1t1.onrender.com/">on Render</a> or see the codebase on <a href="https://github.com/austinProGit/hangman">my GitHub.</a></p>
    <a href="https://hangman-s1t1.onrender.com/"><img src={HangmanScreenshot} alt="" className='project-screenshot'/></a>
    </>
  );
};

export default Hangman;