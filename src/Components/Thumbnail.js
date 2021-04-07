import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Thumbnail = ({ image, link, title, description }) => (
  <Container className='text-center my-5'>
    <a href={link}>
      <span className='text-dark project-title'>{title}</span>
    </a>
    {' – '}
    <span className='project-description'>{description}</span>
    <Row className='justify-content-center'>
      <Col lg={5} className='text-center'>
        <a href={link}>
          <img className='img-fluid project-image border border-secondary' src={image} alt='Project Screenshot' />
        </a>
      </Col>
    </Row>
  </Container>
);

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Thumbnail;
