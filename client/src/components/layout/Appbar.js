import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Appbar = ({ logout, auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <span className='nav-links'>
      <Link to='/dashboard'>
        <i className='fas fa-user'></i>
      </Link>
      <Link to='/posts'>
        <i className='fas fa-mail-bulk'></i>
      </Link>
      <a onClick={logout} href='#!'>
        <i className='fas fa-sign-out-alt'></i>
      </a>
    </span>
  );

  const guestLinks = (
    <span className='nav-links'>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Sign Up</Link>
    </span>
  );

  return (
    <div className='appbar'>
      {!loading && (
        <React.Fragment>
          {isAuthenticated ? authLinks : guestLinks}
        </React.Fragment>
      )}
    </div>
  );
};

Appbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Appbar);
