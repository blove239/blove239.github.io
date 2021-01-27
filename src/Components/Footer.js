import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <div className='page-footer'>
    <div>
      <a className='icon' href='https://github.com/blove239'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a className='icon' href='https://www.linkedin.com/in/brandon-love239'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a className='icon' href='mailto:brandon@brandonlove.ca'>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
    <div>
      <span className='copyright-symbol'>
        ©
        {' '}
      </span>
      <span className='copyright align-middle'>
        2021 Brandon Love
      </span>

    </div>
  </div>
);

export default Footer;
