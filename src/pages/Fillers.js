import React from 'react';
import Navigation from '../components/Navigation';
import './Fillers.scss';
import SingleBanner from '../components/SingleBanner';
import TextboxBanner from '../components/TextboxBanners';
import LongArrowRightIcon from '../assets/icons/LongArrowRightIcon';
import CustomFooter from '../components/CustomFooter';

export default function Fillers() {
  return (
    <>
      <Navigation />
      <section>
        <SingleBanner
          title='Filler'
          text='Filler bidrager til yngre udseende med mere karakter og hjælper med at genoprette ansigtsvolumen uden et kirurigsk indgreb. Ved at tilføje hage og kind mere fylde og former, fremhæver en filler behandling ansigtskonturer. Resultatet er et yngre udseende med mere karakter.'
          imageUrl='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
          alt='Calming toner'
          buttonText='Book online'
          onButtonClick={() => console.log('Button clicked!')}
          reverse={false}
        />
      </section>
      <section></section>
      <section>
        <h1>Før og efter behandling</h1>
        <div>
          <img
            src='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
            alt='something'
          />
          <img
            src='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
            alt='some'
          />
        </div>
      </section>
      <section>
        <TextboxBanner
          title='Værd at vide'
          text='Du kan opleve rødme, hævelse, ømhed og blå mærker i forbindelse med din behandling, dette er ufarligt! Ved mistake om komplikationer kan klinikken altid kontaktes på telefonen. '
          imageUrl='/webshop-images/gbl-calming-toner.webp'
          alt='Calming toner'
          buttonText='Kontakt klinikken'
          buttonIcon={<LongArrowRightIcon />}
          onButtonClick={() => console.log('Button clicked!')}
          reverse={true}
        />
        <TextboxBanner
          title='Prisliste'
          text='Husk at vi tilbyder gratis konsultationer på alle vores behandlinger'
          imageUrl='/webshop-images/gbl-complexion-clearing-masque-original.webp'
          alt='Clearing mask'
          buttonText='Se priser'
          buttonIcon={<LongArrowRightIcon />}
          onButtonClick={() => console.log('Button clicked!')}
          reverse={false}
        />
      </section>
      <CustomFooter />
    </>
  );
}
