import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [college, setCollege] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      setAlert('Passwords do not match', 'danger');
    } else {
      console.log(name, email, college, password);
    }
  };

  return (
    <React.Fragment>
      <div className='register container'>
        <div className='form-container'>
          <h2>Create a new account</h2>
          <h4>It's quick and easy.</h4>
          <form className='form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
                name='name'
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email Address'
                name='email'
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder='College / School Name'
                name='college'
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                name='password'
                minLength='6'
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                placeholder='Confirm Password'
                name='cpassword'
                minLength='6'
              />
            </div>
            <div className='terms'>
              ✔ By clicking Sign Up, you agree to our Terms, Data Policy and
              Cookie Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </div>
            <button type='submit'>Register</button>
            <div className='login'>
              Already have an account ? <Link to='/login'>Login</Link>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Register);
