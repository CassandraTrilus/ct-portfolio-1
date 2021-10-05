import React from 'react'
import { Link } from 'react-scroll';
import { Nav, Container, Navbar } from 'react-bootstrap'
// import logo from '../assets/logo.png'
import './navbar.css'

function Navigation() {
  return (
      <Navbar expand='lg' fixed='top'>
        <Container>
          <Navbar.Brand>
  {/* <img width='60px' src={logo} alt="site logo" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link offset={-140} activeClass='active' smooth={true} to='profileID'>About</Link>
              <Link duration={300} activeClass='active' smooth={true} to='project'>Projects</Link>
              <Link duration={500} activeClass='active' smooth={true} to='contactID'>Contact me</Link>
              <Link offset={-500} duration={500} activeClass='active' smooth={true} to='resume'>Resume</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navigation
