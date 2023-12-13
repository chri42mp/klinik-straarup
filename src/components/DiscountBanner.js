import React from 'react';
import './DiscountBanner.scss';
import { SecondaryButton } from './Buttons';

const DiscountBanner = () => {
  return (
    <div className='discount-banner'>
      <div className='discount-banner-text'>
        <h2>10% rabat</h2>
        <p>
          Som loyalitetskunde hos Klinik Straarup modtager du 10% på hver
          behandling efter den første. Opret en kundeprofil hos os og bestil en
          gratis tid til konsultation i dag.
        </p>
      </div>
      <div>
        <SecondaryButton text='Opret kundeprofil' link={'/login'} />
      </div>
    </div>
  );
};

export default DiscountBanner;
