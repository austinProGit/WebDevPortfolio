import React from 'react';
import { Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from 'react-switch';

const NavigationBar = (props) => {
  const toggleTheme = () => {
    props.toggleTheme();
  };

  return (
    <>
      <Navbar id='navigation-bar' className='sticky-top' expand="sm">
        <Navbar.Brand id='brand'>
          Austin Lee, Web Developer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-light"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end navbar-links">
            <Nav.Link className='navbar-link' href="#about">About</Nav.Link>
            <Nav.Link className='navbar-link' href="#skills">Skills</Nav.Link>
            <Nav.Link className='navbar-link' href="#projects">Projects</Nav.Link>
            <Nav.Link className='navbar-link' href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div id='mode-btn-container'>
          <Switch onChange={toggleTheme} checked={props.theme === 'dark'} id='mode-btn' htmlFor='mode-btn'/>
        </div>
        
      </Navbar>
    </>
  );
};

export default NavigationBar;

