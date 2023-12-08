import React from 'react';
import Navigation from '../components/Navigation';
import './Fillers.scss';
import SingleBanner from '../components/SingleBanner';

export default function Fillers() {
  return (
    <>
      <Navigation />
      <div>
        <SingleBanner
          title='Getting skin ready'
          subtitle='subheader'
          text='En sund hud starter med det grundlæggende. Hjælp din hud tilbage til en sund, afbalancerede tilstand for en klar teint, uanset hudtype.'
          imageUrl='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
          alt='Calming toner'
          buttonText='text'
          onButtonClick={() => console.log('Button clicked!')}
          reverse={false}
        />
      </div>
    </>
  );
}
