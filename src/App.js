import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar className='navbar text-center' variant='dark' expand='lg' sticky='top'>
          <Navbar.Brand as={Link} to='/'>
            <span className='font-weight-bold ml-lg-5'>Brandon Love</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto mr-lg-5'>
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              <Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
              <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
