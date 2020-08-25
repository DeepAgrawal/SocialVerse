import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  // Redirect if authenticated
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

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

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
