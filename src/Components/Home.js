import React, { useState } from 'react';
import personalPortrait from '../images/PersonalPortrait.png';
import profileData from '../profileData.json';

const Home = () => {
  const [aboutMe] = useState(profileData.aboutMe);
  return (
    <div className='container align-center my-5'>
      <div className='row'>
        <div className='col-lg-5 align-bottom mt-lg-4 mb-5 text-center order-lg-2 text-lg-right'>
          <img className='portrait' src={personalPortrait} alt='self-portrait' />
        </div>
        <div className='col-lg-5 mb-5 order-lg-1'>
          <h1 className='display-3 font-weight-bold'>about me</h1>
          <h2 className='text-secondary'>I&apos;m a software developer</h2>
          {aboutMe.map((x) => (
            <div className='mb-3'>
              {x}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
