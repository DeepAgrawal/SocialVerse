import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='container'>
        <div className='row'>
          <div className='left'>
            <h2>
              Unleash <br /> your <br /> Expertise
            </h2>
          </div>
          <div className='right'>
            <div className='upper-content'>
              Social media is not a media. The key is to listen, engage, and
              build relationships.
            </div>
            <div>
              Until now, putting together a digest newsletter was time
              consuming. Curated lets you focus on the links and add your voice.
              You'll find the entire process effortless.
            </div>
            <div className='buttons'>
              <Link to='/login'>
                <button>Log In</button>
              </Link>
              <Link to='/register'>
                <button>Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
