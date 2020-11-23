import React, { useState } from 'react';
import profileData from '../profileData.json';

const About = () => {
  const [skills] = useState(profileData.skills);
  const [workExperience] = useState(profileData.workExperience);
  const [education] = useState(profileData.education);
  return (
    <div className='container my-5 mx-auto'>
      <div className='row justify-content-center'>
        <div className='col-lg-8'>
          <h1>Skills</h1>
          <h3 className='text-secondary'>
            {skills.map((data, index) => (
              skills.length - 1 === index ? data.name : `${data.name}, `
            ))}
          </h3>

          <h1>Work Experience</h1>
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

          <h1>Education</h1>
          <h3 className='text-secondary'>
            {education}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
