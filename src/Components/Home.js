import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import personalPortrait from '../images/PersonalPortrait.png';
import profileData from '../profileData.json';

const Home = () => {
  const [aboutMe] = useState(profileData.aboutMe);
  return (
    <Container className='my-5'>
      <Row>
        <Col lg={6} className='align-bottom mb-5 my-lg-auto text-center order-lg-2 text-lg-right'>
          <img className='portrait' src={personalPortrait} alt='self-portrait' />
        </Col>
        <Col lg={6} className='my-lg-auto mb-5 order-lg-1'>
          <h1 className='display-4 font-weight-bold'>about me</h1>
          <h2 className='text-secondary'>I&apos;m a software developer</h2>
          {aboutMe.map((x) => (
            <div className='mb-4'>
              {x}
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
