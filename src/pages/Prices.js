import React from 'react';
import Navigation from '../components/Navigation';
import Hero2 from '../components/Hero2';
import DiscountBanner from '../components/DiscountBanner';
import CustomFooter from '../components/CustomFooter';

export default function Prices() {
  return (
    <>
      <Navigation />
      <section>
        <Hero2
          title='Prisliste'
          text='Prisen på en behandling hos Klinik Straarup afhænger af den type behandling du ønsker. Book en gratis konsultation hvis du er i tvivl, så guider vi dig til en bedste løsning for dig. '
          imageUrl='/site-images/Skinbooster-s1.webp'
          alt='Calming toner'
          buttonText='Book nu'
          onButtonClick={() => console.log('Button clicked!')}
          reverse={false}
        />
      </section>
      <section>
        <DiscountBanner />
      </section>
      <CustomFooter />
    </>
  );
}
