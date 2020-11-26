import React from 'react';
import Thumbnail from './Thumbnail';
import TypingTestScreenCap from '../images/typing test screenshot.png';

const Projects = () => (
  <div className='container my-5 mx-auto'>
    <div className='row justify-content-center'>
      <div className='col-lg-11'>
        <h1>Projects</h1>
        <Thumbnail
          link='https://www.brandonlove.ca/thetypingtest/'
          image={TypingTestScreenCap}
          title='Typing Test'
          description='A typing test built with React'
        />
      </div>
    </div>
  </div>
);

export default Projects;
