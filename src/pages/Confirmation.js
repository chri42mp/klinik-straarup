import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { SecondaryButton } from '../components/Buttons';
import DiscountBanner from '../components/DiscountBanner';
import CustomFooter from '../components/CustomFooter';
import Loader from '../components/Loader';
import './Confirmation.scss';
import { Helmet } from 'react-helmet';

export default function Confirmation() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 2000;

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bekræftelse af køb</title>
        <meta
          name='description'
          content='Denne side bekræfter et køb på webshoppen'
        />
      </Helmet>

      <Navigation />
      {loading ? (
        <div className='delay'>
          <Loader />
          <p>Du sendes nu videre til sikker betaling</p>
        </div>
      ) : (
        <>
          <div className='confirmation-textbox'>
            <h1>Tak for din ordre!</h1>
            <h5>Vi glæder os til at sende den!</h5>
            <p>
              Vi har sendt dig en bekræftelse på mail og sender ordren afsted
              hurtigst muligt. Tak fordi du handlede hos os! Har du forresten
              set at vi også tilbyder skønhedsbehandlinger i vores klinik?
            </p>
            <div className='confirmation-btn'>
              <SecondaryButton text='Besøg klinikken' link='/' />
            </div>
          </div>
          <DiscountBanner />
        </>
      )}
      <CustomFooter />
    </>
  );
}
