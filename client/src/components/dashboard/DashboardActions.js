import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile'>
        <button className='dash-btn'>
          <i className='fas fa-user-circle' /> Edit Profile
        </button>
      </Link>
      <Link to='/add-experience'>
        <button className='dash-btn'>
          <i className='fab fa-black-tie' /> Add Experience
        </button>
      </Link>
      <Link to='/add-education'>
        <button className='dash-btn'>
          <i className='fas fa-graduation-cap' /> Add Education
        </button>
      </Link>
    </div>
  );
};

export default DashboardActions;
