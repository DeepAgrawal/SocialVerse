import React from 'react';
import spinner from '../../res/spinner.gif';

const Spinner = () => {
  return (
    <React.Fragment>
      <img
        src={spinner}
        style={{ width: '300px', margin: 'auto', display: 'block' }}
        alt='loading...'
      />
    </React.Fragment>
  );
};

export default Spinner;
