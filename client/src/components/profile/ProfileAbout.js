import React from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({ profile: { headline, about, skills } }) => (
  <div className='profile-about'>
    <h2>{headline}</h2>
    {about && <p>{about}</p>}
    <h2>Skills</h2>
    <div className='skills'>
      {skills.map((skill, index) => (
        <div key={index} className='skill'>
          <i className='fas fa-check' /> {skill}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
