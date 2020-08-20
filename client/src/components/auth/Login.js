import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <React.Fragment>
      <div className='register container'>
        <div className='form-container'>
          <h2>Log in to Socialss</h2>
          <h4>Keep Sharing.</h4>
          <form className='form' onSubmit={(e) => onSubmit(e)}>
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
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                name='password'
                minLength='6'
              />
            </div>

            <button type='submit'>Log in</button>
            <div className='login'>
              Don't have an account ? <Link to='/resigter'>Register</Link>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
