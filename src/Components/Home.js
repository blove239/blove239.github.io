import React, { useState } from 'react';
import personalPortrait from '../images/PersonalPortrait.png';
import profileData from '../profileData.json';

const Home = () => {
  const [aboutMe] = useState(profileData.aboutMe);
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-lg-6 align-bottom mb-5 my-lg-auto text-center order-lg-2 text-lg-right'>
          <img className='portrait' src={personalPortrait} alt='self-portrait' />
        </div>
        <div className='col-lg-6 my-lg-auto mb-5 order-lg-1'>
          <h1 className='display-4 font-weight-bold'>about me</h1>
          <h2 className='text-secondary'>I&apos;m a software developer</h2>
          {aboutMe.map((x) => (
            <div className='mb-4'>
              {x}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
