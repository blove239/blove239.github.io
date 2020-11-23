import React from 'react';

const Contact = () => (
  <div className='container my-5 mx-auto'>
    <div className='row justify-content-center'>
      <div className='col-lg-8'>
        <h1>Contact Me</h1>
        The best way to get in touch is through my email.
        Send me a message and I&apos;ll get back to you as soon as I can :)
        <div className='my-3'>
          Email:
          {' '}
          <a href='mailto:brandon@brandonlove.ca'>
            brandon@brandonlove.ca
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
