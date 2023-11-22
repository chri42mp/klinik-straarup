import React from 'react';
import './Switch.scss';

const Switch = ({ isDisabled }) => {
  return (
    <label className='switch'>
      <input type='checkbox' disabled={isDisabled} />
      <span className='slider' />
    </label>
  );
};

export default Switch;
