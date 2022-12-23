import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className='mb-1'>Copyright &copy; {currentYear}</p>
      <p className='mb-1'>Icons by <a href="https://icons8.com">Icons8</a></p>
      <p className='mb-0'>
        <a href="#about">About</a> | <a href="#skills">Skills</a> |<a href="#projects">Projects</a> |  <a href="#contact">Contact</a>
      </p>
    </footer>
  );
};

export default Footer;