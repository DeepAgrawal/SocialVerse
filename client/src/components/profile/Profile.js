import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import { getProfileById } from '../../actions/profile';

const Profile = ({ getProfileById, profile: { profile }, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null ? (
        <Spinner />
      ) : (
        <div className='profile'>
          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile} />
          <div>
            <h2 className='text-primary'>Experience</h2>
            {profile.experience.length > 0 ? (
              <Fragment>
                {profile.experience.map((experience) => (
                  <ProfileExperience
                    key={experience._id}
                    experience={experience}
                  />
                ))}
              </Fragment>
            ) : (
              <h4>No experience credentials</h4>
            )}
          </div>

          <div>
            <h2 className='text-primary'>Education</h2>
            {profile.education.length > 0 ? (
              <Fragment>
                {profile.education.map((education) => (
                  <ProfileEducation key={education._id} education={education} />
                ))}
              </Fragment>
            ) : (
              <h4>No education credentials</h4>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
