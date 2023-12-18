import React from 'react';
import Navigation from '../components/Navigation';
import Hero2 from '../components/Hero2';
import DiscountBanner from '../components/DiscountBanner';
import CustomFooter from '../components/CustomFooter';
import './Prices.scss';
import { Helmet } from 'react-helmet';

export default function Prices() {
  return (
    <>
      <Helmet>
        <title>Prisliste</title>
        <meta
          name='description'
          content='Denne side viser en prisliste over behandlinger'
        />
      </Helmet>
      <Navigation />
      <Hero2
        title='Prisliste'
        text='Prisen på en behandling hos Klinik Straarup afhænger af den type behandling du ønsker. Book en gratis konsultation hvis du er i tvivl, så guider vi dig til en bedste løsning for dig. '
        imageUrl='/site-images/prisliste.jpg'
        alt='Calming toner'
        buttonText='Book nu'
        onButtonClick={() => console.log('Button clicked!')}
        reverse={false}
      />
      <DiscountBanner />
      <section className='max-content'>
        <div className='price-category'>
          <h1>Konsultationer</h1>
          <div className='price-container'>
            <div className='price'>
              <p>Alle konsultationer</p>
              <p>0,00 DKK</p>
            </div>
            <div className='price'>
              <p>Konsultation filler</p>
            </div>
            <div className='price'>
              <p>Læge kondultation botox</p>
            </div>
            <div className='price'>
              <p>Læge konsultation sklerosering</p>
            </div>
            <div className='price'>
              <p>Konsultation laser</p>
            </div>
            <div className='price'>
              <p>Konsultation skinbooster</p>
            </div>
          </div>
        </div>
        <div className='price-category'>
          <h1>Behandling med Botox</h1>
          <div className='price-container'>
            <div className='price'>
              <p>1 område</p>
              <p>1200 DKK</p>
            </div>
            <div className='price'>
              <p>2 område</p>
              <p>1900 DKK</p>
            </div>
            <div className='price'>
              <p>3 område</p>
              <p>2500 DKK</p>
            </div>
            <div className='price'>
              <p>4 område</p>
              <p>3000 DKK</p>
            </div>
            <div className='price'>
              <p>Masseter/tyggemuskler</p>
              <p>1800 DKK</p>
            </div>
            <div className='price'>
              <p>Platysma/stramme halsbånd</p>
              <p>1800 DKK</p>
            </div>
            <div className='price'>
              <p>Gummy smile</p>
              <p>600 DKK</p>
            </div>
            <div className='price'>
              <p>Lip flip/ryge rynker</p>
              <p>600 DKK</p>
            </div>
            <div className='price'>
              <p>Brynløft</p>
              <p>600 DKK</p>
            </div>
            <div className='price'>
              <p>Bunnylines</p>
              <p>600 DKK</p>
            </div>
            <div className='price'>
              <p>Nedadgående mundviger</p>
              <p>600 DKK</p>
            </div>
            <div className='price'>
              <p>Hage</p>
              <p>600 DKK</p>
            </div>
            <div className='price'>
              <p>14 dages kontrol</p>
              <p>0,00 DKK</p>
            </div>
          </div>
        </div>
        <div className='price-category'>
          <h1>Behandling med filler</h1>
          <div className='price-container'>
            <div className='price'>
              <p>0.5 ml</p>
              <p>1200 DKK</p>
            </div>
            <div className='price'>
              <p>1 ml</p>
              <p>1800 DKK</p>
            </div>
            <div className='price'>
              <p>2 ml</p>
              <p>3200 DKK</p>
            </div>
            <div className='price'>
              <p>3 ml</p>
              <p>4400 DKK</p>
            </div>
            <div className='price'>
              <p>4 ml</p>
              <p>5400 DKK</p>
            </div>
          </div>
        </div>
        <div className='price-category'>
          <h1>Opløsning af filler</h1>
          <div className='price-container'>
            <div className='price'>
              <p>Første behandling</p>
              <p>1500 DKK</p>
            </div>
            <div className='price'>
              <p>Efterfølgende behandlinger</p>
              <p>1000 DKK</p>
            </div>
          </div>
        </div>

        <div className='price-category'>
          <h1>Behandling med sklerosering</h1>
          <div className='price-container'>
            <div className='price'>
              <p>Få kar</p>
              <p>1800 DKK</p>
            </div>
            <div className='price'>
              <p>Mange kar</p>
              <p>2500 DKK</p>
            </div>
            <div className='price'>
              <p>Efterfølgende behandling</p>
              <p>1500 DKK</p>
            </div>
          </div>
        </div>

        <div className='price-category'>
          <h1>Skinbooster</h1>
          <div className='price-container'>
            <div className='price'>
              <p>Ejal 40 1 område</p>
              <p>1800 DKK</p>
            </div>
            <div className='price'>
              <p>Ejal 40 2 områder</p>
              <p>3600 DKK</p>
            </div>
            <div className='price'>
              <p>Ejal 40 3 områder</p>
              <p>4500 DKK</p>
            </div>
            <div className='price'>
              <p>Seventy Hyal 1 område</p>
              <p>1800 DKK</p>
            </div>
            <div className='price'>
              <p>Seventy Hyal 2 områder</p>
              <p>3600 DKK</p>
            </div>
            <div className='price'>
              <p>Seventy Hyal 3 områder</p>
              <p>4500 DKK</p>
            </div>
          </div>
        </div>

        <div className='price-category'>
          <div>
            <h1>Laser pakker</h1>
          </div>
          <div className='price-container'>
            <div className='price'>
              <p>Helt ansigt/nakke</p>
              <p>700 DKK</p>
            </div>
            <div className='price'>
              <p>Armhuler/brazil</p>
              <p>900 DKK</p>
            </div>
            <div className='price'>
              <p>Halve ben/armhuler</p>
              <p>1100 DKK</p>
            </div>
            <div className='price'>
              <p>Halve ben/brazil</p>
              <p>1500 DKK</p>
            </div>
            <div className='price'>
              <p>Halve ben/armhuler/brazil</p>
              <p>1800 DKK</p>
            </div>
            <div className='price'>
              <p>Hele ben/armhuler</p>
              <p>1800 DKK</p>
            </div>
            <div className='price'>
              <p>Hele ben/brazil</p>
              <p>2000 DKK</p>
            </div>
            <div className='price'>
              <p>Hele ben/armhuler/brazil</p>
              <p>2200 DKK</p>
            </div>
          </div>
        </div>

        <div className='price-category'>
          <h1>Laser enkelte områder</h1>
          <div className='price-container'>
            <div className='price'>
              <p>Hage</p>
              <p>250 DKK</p>
            </div>
            <div className='price'>
              <p>Overlæbe</p>
              <p>250 DKK</p>
            </div>
            <div className='price'>
              <p>Kinder</p>
              <p>250 DKK</p>
            </div>
            <div className='price'>
              <p>Hals</p>
              <p>400 DKK</p>
            </div>
            <div className='price'>
              <p>Skuldre</p>
              <p>700 DKK</p>
            </div>
            <div className='price'>
              <p>Armhuler</p>
              <p>350 DKK</p>
            </div>
            <div className='price'>
              <p>Halve arme</p>
              <p>450 DKK</p>
            </div>
            <div className='price'>
              <p>Hele arme</p>
              <p>800 DKK</p>
            </div>
            <div className='price'>
              <p>Bryst</p>
              <p>800 DKK</p>
            </div>
            <div className='price'>
              <p>Brystvorter</p>
              <p>300 DKK</p>
            </div>
            <div className='price'>
              <p>Mave</p>
              <p>800 DKK</p>
            </div>
            <div className='price'>
              <p>Navle og ned</p>
              <p>300 DKK</p>
            </div>
            <div className='price'>
              <p>Bikinilinje</p>
              <p>450 DKK</p>
            </div>
            <div className='price'>
              <p>Brazil</p>
              <p>700 DKK</p>
            </div>
            <div className='price'>
              <p>Hel ryg</p>
              <p>1000 DKK</p>
            </div>
            <div className='price'>
              <p>Lænd</p>
              <p>350 DKK</p>
            </div>
            <div className='price'>
              <p>Baller</p>
              <p>550 DKK</p>
            </div>
            <div className='price'>
              <p>Baglår</p>
              <p>550 DKK</p>
            </div>
            <div className='price'>
              <p>Halve ben</p>
              <p>1000 DKK</p>
            </div>
            <div className='price'>
              <p>hele ben</p>
              <p>1600 DKK</p>
            </div>
          </div>
        </div>

        <div className='price-category'>
          <h1>Zo Skin Health</h1>
          <div className='price-container'>
            <div className='price'>
              <p>Stimulation peel introtilbud</p>
              <p>700 DKK</p>
            </div>
            <div className='price'>
              <p>Konsultation til hudpleje</p>
              <p>0,00 DKK</p>
            </div>
          </div>
        </div>
      </section>
      <CustomFooter />
    </>
  );
}
