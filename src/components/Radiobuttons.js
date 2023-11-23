import React, { useState } from 'react';
import './Radiobuttons.scss';

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState('yes');

  function onValueChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div className='container'>
      <div className='radio'>
        <input
          type='radio'
          value='yes'
          checked={selectedOption === 'yes'}
          onChange={onValueChange}
        />
        <label className='radio-label'>Checked</label>
      </div>

      <div className='radio'>
        <input
          type='radio'
          value='no'
          checked={selectedOption === 'no'}
          onChange={onValueChange}
        />
        <label className='radio-label'>Checked</label>
      </div>
    </div>
  );
};

export default RadioButtons;
