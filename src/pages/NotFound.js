import React from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';

export default function NotFound() {
  return (
    <>
      <Navigation />
      <Hero
        title='404 Error'
        subtitle='Page not found'
        text={
          <>
            <p>
              Vi kan desværre ikke finde den side du leder efter! <br />
              Du kan prøve at gå tilbage eller trykke på knappen for at komme
              til forsiden.
            </p>
          </>
        }
        imageUrl='/site-images/Filler-s2.webp'
        alt='Calming toner'
        buttonText='Forsiden'
        link={'/'}
      />
    </>
  );
}
