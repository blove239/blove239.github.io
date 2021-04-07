import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import profileData from '../profileData.json';

const Skills = () => {
  const [skills] = useState(profileData.skills);
  const [workExperience] = useState(profileData.workExperience);
  const [education] = useState(profileData.education);
  return (
    <Container className='my-5 mx-auto'>
      <Row className='justify-content-center'>
        <Col lg={11}>
          <h1 className='mb-1'>Skills</h1>
          <h3 className='text-secondary mb-4'>
            {skills.map((data, index) => (
              skills.length - 1 === index ? data.name : `${data.name}, `
            ))}
          </h3>
          <h1 className='mb-1'>Work Experience</h1>
          <div>
            {workExperience.map((data) => (
              <div>
                <span className='font-weight-bold'>
                  {data.jobTitle}
                </span>
                <span>
                  {` – ${data.company}, `}
                </span>
                <span className='font-italic'>
                  {`${data.location} – ${data.date}`}
                </span>
                <ul>
                  {data.duties.map((x) => (
                    <li>{x}</li>))}
                </ul>
              </div>
            ))}
          </div>
          <h1 className='mb-1'>Education</h1>
          <h3 className='text-secondary'>
            {education}
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
