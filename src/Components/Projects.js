import React from 'react';
import Thumbnail from './Thumbnail';
import TypingTestScreenCap from '../images/typing test screenshot.png';
import ImageRepoScreenCap from '../images/imagereposcreenshot.png';
import IceClimbScreenCap from '../images/ice climb weather tool.png';

const Projects = () => (
  <div className='container my-5 mx-auto'>
    <div className='row justify-content-center'>
      <div className='col-lg-11'>
        <h1>Projects</h1>
        <Thumbnail
          link='https://typingtest.brandonlove.ca/'
          image={TypingTestScreenCap}
          title='Typing Test'
          description='A full stack typing test with leaderboard functionality. Uses React for the front end. NeDB, Express.js and Node.js for the backend.'
        />
        <Thumbnail
          link='https://imagerepo.brandonlove.ca/'
          image={ImageRepoScreenCap}
          title='Image Repo'
          description='A simple image hosting repository. Uses Passport.js for user auth, SQLite for storage, served with Express.js.'
        />
        <Thumbnail
          link='https://iceclimbweather.brandonlove.ca/'
          image={IceClimbScreenCap}
          title='Ice Climbing Weather Tool'
          description='A tool for assessing ice climbing weather conditions. Uses OpenWeatherMap API for weather data.'
        />
      </div>
    </div>
  </div>
);

export default Projects;
