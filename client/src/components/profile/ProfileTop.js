import React from 'react';
import PropTypes from 'prop-types';

// user // name, email, password, college
// headline
// about
// education // school, degree, fieldofstudy, from, to, current, desc
// experiance // title, company, location, from, to, current, desc
// location
// website
// skills // twitter, facebook, linkedin
// githubusername
// social

const ProfileTop = ({
  profile: {
    user: { name, email },
    location,
    website,
    social,
  },
}) => {
  return (
    <div className='profile-top'>
      <h1 className='name'>{name}</h1>
      <div className='subline'>
        {location && <span>{location + '  .  '}</span>}
        <span>{email}</span>
      </div>
      <div className='socials'>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-2x' />
          </a>
        )}
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter fa-2x' />
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook fa-2x' />
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin fa-2x' />
          </a>
        )}
      </div>
      <hr />
    </div>

    // <div className='profile-top'>
    //   <h1 className='name'>{name}</h1>
    //   <p className='lead'>
    //     {headline} {company && <span> at {company}</span>}
    //   </p>
    //   <p>{location && <span>{location}</span>}</p>
    //   <div className='icons my-1'>
    //     {website && (
    //       <a href={website} target='_blank' rel='noopener noreferrer'>
    //         <i className='fas fa-globe fa-2x' />
    //       </a>
    //     )}
    //     {social && social.twitter && (
    //       <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
    //         <i className='fab fa-twitter fa-2x' />
    //       </a>
    //     )}
    //     {social && social.facebook && (
    //       <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
    //         <i className='fab fa-facebook fa-2x' />
    //       </a>
    //     )}
    //     {social && social.linkedin && (
    //       <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
    //         <i className='fab fa-linkedin fa-2x' />
    //       </a>
    //     )}
    //   </div>
    // </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
