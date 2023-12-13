import React from 'react';
import PropTypes from 'prop-types';

import './FAQimg.scss';

const FAQimg = ({ imageUrl1, alt1, imageUrl2, alt2 }) => {
  return (
    <div className='faq-img-container'>
      <div className='faq-img'>
        <img className='faq-img-1' src={imageUrl1} alt={alt1} />
        <img className='faq-img-2' src={imageUrl2} alt={alt2} />
      </div>
    </div>
  );
};

FAQimg.propTypes = {
  imageUrl1: PropTypes.string.isRequired,
  alt1: PropTypes.string.isRequired,
  imageUrl2: PropTypes.string.isRequired,
  alt2: PropTypes.string.isRequired,
};

export default FAQimg;
