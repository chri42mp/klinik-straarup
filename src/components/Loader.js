import React from 'react';
import './Loader.scss';

const Loader = () => {
  return (
    <div class='spinner'>
      <div class='spinner__circle'>
        <div class='spinner__circle-gradient'></div>

        <div class='spinner__circle-inner'></div>
      </div>
    </div>
  );
};

export default Loader;
