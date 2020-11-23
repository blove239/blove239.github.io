import React, { useState } from 'react';
import PersonalPortrait from '../images/PersonalPortrait.png';
import profileData from '../profileData.json';

const Home = () => {
  const [aboutMe] = useState(profileData.aboutMe);
  return (
    <fragment>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg mb-5 text-center order-lg-2 text-lg-right'>
            <img className='portrait' src={PersonalPortrait} alt='self-portrait' />
          </div>
          <div className='col-lg mb-5 order-lg-1'>
            <h1>about me</h1>
            <h2 className='text-secondary'>I&apos;m a software developer</h2>
            {aboutMe.map((data) => (
              <div className='mb-3'>
                {data}
              </div>
            ))}
          </div>
        </div>
      </div>
    </fragment>
  );
};

export default Home;
