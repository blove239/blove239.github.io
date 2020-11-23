import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({ image, link, title, description }) => (
  <div className='container text-center'>
    <span className='project-title'>{title}</span>
    {' – '}
    <span className='project-description'>{description}</span>

    <div className='text-center'>
      <a href={link}>
        <img className='img-fluid project-image' src={image} alt='Typing Test made with React' />
      </a>
    </div>
  </div>
);

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Thumbnail;
