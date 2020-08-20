import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <div className='inner-container'>
          <Link to='/' className='nav-brand'>
            Socialss
          </Link>
          <span className='nav-links'>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Sign Up</Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
