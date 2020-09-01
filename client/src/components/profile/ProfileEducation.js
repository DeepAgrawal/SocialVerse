import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => (
  <div className='profile-edu'>
    <h3>{school}</h3>
    <p>
      <Moment format='YYYY/MM/DD'>{moment.utc(from)}</Moment> -{' '}
      {!to ? ' Now' : <Moment format='YYYY/MM/DD'>{moment.utc(to)}</Moment>}
    </p>
    <p>
      <strong>Degree: </strong> {degree}
    </p>
    <p>
      <strong>Field Of Study: </strong> {fieldofstudy}
    </p>
    {description && (
      <p>
        <strong>Description: </strong> {description}
      </p>
    )}
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
