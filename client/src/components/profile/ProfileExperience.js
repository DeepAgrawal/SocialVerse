import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => (
  <div className='profile-exp'>
    <h3>{company}</h3>
    <p>
      <Moment format='YYYY/MM/DD'>{moment.utc(from)}</Moment> -{' '}
      {!to ? ' Now' : <Moment format='YYYY/MM/DD'>{moment.utc(to)}</Moment>}
    </p>
    <p>
      <strong>Position: </strong> {title}
    </p>
    <p>
      <strong>Location: </strong> {location}
    </p>
    {description && (
      <p>
        <strong>Description: </strong> {description}
      </p>
    )}
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
