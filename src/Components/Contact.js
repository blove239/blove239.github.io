import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => (
  <Container className='container my-5 mx-auto'>
    <Row className='justify-content-center'>
      <Col lg={9}>
        <h1>Contact Me</h1>
        <p className='lead mx-2'>
          The best way to get in touch is through my email.
          Send me a message and I&apos;ll get back to you as soon as I can.
        </p>
        <div className='my-3 mx-2'>
          Email:
          {' '}
          <a href='mailto:brandon@brandonlove.ca'>
            brandon@brandonlove.ca
          </a>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Contact;
