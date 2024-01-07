import React from 'react';
import './TrustpilotCard.scss';
import { Link } from 'react-router-dom';
import TrustpilotStar from '../assets/icons/TrustpilotStar';

const TrustpilotCard = ({ headline, name, text, date }) => {
  return (
    <div className='trustpilot-card-box'>
      <Link
        className='trustpilot-card-link'
        to='https://dk.trustpilot.com/review/klinikstraarup.dk'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='trustpilot-card '>
          <div className='card-top-div'>
            <div className='trustpilot-star'>
              <TrustpilotStar />
              <TrustpilotStar />
              <TrustpilotStar />
              <TrustpilotStar />
              <TrustpilotStar />
            </div>
            <p className='trustpilot-card-title'>{headline}</p>
            <p className='trustpilot-card-text'>{text}</p>
          </div>
          <div className='card-bottom-div'>
            <p className='trustpilot-card-name'>{name}</p>
            <p className='trustpilot-card-date'>{date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TrustpilotCard;
