import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import Spinner from '../layout/Spinner';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <React.Fragment>
      <div className='container dashboard'>
        <h2>Dashboard</h2>
        <h4>
          <i className='fas fa-user'></i> Welcome {user && user.name}
        </h4>
        {profile !== null ? (
          <React.Fragment>
            <DashboardActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <div className='delete-acc'>
              <button onClick={() => deleteAccount()}>
                <i
                  style={{ marginRight: '10px' }}
                  className='fas fa-user-minus'
                ></i>
                Delete User
              </button>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className='no-profile'>
              <p>You have not setup your profile yet.</p>
              <Link to='create-profile'>
                <button>Create Profile</button>
              </Link>
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
