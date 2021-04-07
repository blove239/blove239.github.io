import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Thumbnail from './Thumbnail';
import TypingTestScreenCap from '../images/typing test screenshot.png';
import ImageRepoScreenCap from '../images/imagereposcreenshot.png';
import IceClimbScreenCap from '../images/ice climb weather tool.png';
import SkillTrackerScreenCap from '../images/skill tracker.png';

const Projects = () => (
  <Container className='my-5 mx-auto'>
    <Row className='justify-content-center'>
      <Col lg={11}>
        <h1>Projects</h1>
        <Thumbnail
          link='https://simpleskilltracker.herokuapp.com/'
          image={SkillTrackerScreenCap}
          title='Skill Tracker'
          description='A simple gamified skill tracker to help users keep track of their skills.'
        />
        <Thumbnail
          link='https://iceclimbweather.brandonlove.ca/'
          image={IceClimbScreenCap}
          title='Ice Climbing Weather Tool'
          description='A tool for assessing ice climbing weather conditions. Uses OpenWeatherMap API for weather data.'
        />
        <Thumbnail
          link='https://imagerepo.brandonlove.ca/'
          image={ImageRepoScreenCap}
          title='Image Repo'
          description='A simple image hosting repository. Uses Passport.js for user auth, SQLite for storage, served with Express.js.'
        />
        <Thumbnail
          link='https://typingtest.brandonlove.ca/'
          image={TypingTestScreenCap}
          title='Typing Test'
          description='A full stack typing test with leaderboard functionality. Uses React for the front end. NeDB, Express.js and Node.js for the backend.'
        />
      </Col>
    </Row>
  </Container>
);

export default Projects;
