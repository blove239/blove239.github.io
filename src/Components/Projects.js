import React from 'react';
import Thumbnail from './Thumbnail';
import TypingTestScreenCap from '../images/typing test screenshot.png';
import ImageRepoScreenCap from '../images/imagereposcreenshot.png';

const Projects = () => (
  <div className='container my-5 mx-auto'>
    <div className='row justify-content-center'>
      <div className='col-lg-11'>
        <h1>Projects</h1>
        <Thumbnail
          link='https://typingtest.brandonlove.ca/'
          image={TypingTestScreenCap}
          title='Typing Test'
          description='A full stack typing test with leaderboard functionality. Uses React for the front end. NeDB, Express.js and Node.js for the backend. Hosted on an Amazon EC2 instance.'
        />
        <Thumbnail
          link='https://imagerepo.brandonlove.ca/'
          image={ImageRepoScreenCap}
          title='Image Repo'
          description='A simple image hosting repository. Uses Passport.js for user auth, SQLite for storage, served with Express.js. Hosted on an Amazon EC2 instance.'
        />
      </div>
    </div>
  </div>
);

export default Projects;
