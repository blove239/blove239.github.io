import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import './App.css';

function App() {
  const [navExpanded, setNavExpanded] = useState(false);

  const setNavOnToggle = (expanded) => {
    setNavExpanded(expanded);
  };

  const closeNav = () => {
    if (navExpanded === true) {
      setNavExpanded(false);
    }
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar
          onClick={closeNav}
          onToggle={setNavOnToggle}
          expanded={navExpanded}
          collapseOnSelect
          expand='lg'
          className='navbar text-center'
          variant='dark'
          sticky='top'
        >
          <Navbar.Brand
            onClick={closeNav}
            as={Link}
            to='/'
          >
            <span className='font-weight-bold ml-lg-5'>Brandon Love</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto mr-lg-5'>
              <Nav.Link eventKey='1' as={Link} to='/skills'>Skills</Nav.Link>
              <Nav.Link eventKey='2' as={Link} to='/projects'>Projects</Nav.Link>
              <Nav.Link eventKey='3' as={Link} to='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div
          onClick={closeNav}
          onKeyPress={closeNav}
          role='article'
        >
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={Projects} />
          <Route path='/skills' component={Skills} />
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
