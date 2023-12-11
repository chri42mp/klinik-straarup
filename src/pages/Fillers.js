import React from 'react';
import Navigation from '../components/Navigation';
import './Fillers.scss';
import Hero2 from '../components/Hero2';
import TextboxBanner from '../components/TextboxBanners';
import LongArrowRightIcon from '../assets/icons/LongArrowRightIcon';
import FullBanner from '../components/FullBanner';
import BeforeAndAfter from '../components/BeforeAndAfter';
import CustomFooter from '../components/CustomFooter';
import DiscountBanner from '../components/DiscountBanner';
import Accordion from '../components/Accordion';
import FAQimg from '../components/FAQimg';

export default function Fillers() {
  return (
    <>
      <Navigation />
      <section>
        <Hero2
          title='Filler'
          text='Filler bidrager til yngre udseende med mere karakter og hjælper med at genoprette ansigtsvolumen uden et kirurigsk indgreb. Ved at tilføje hage og kind mere fylde og former, fremhæver en filler behandling ansigtskonturer. Resultatet er et yngre udseende med mere karakter.'
          imageUrl='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
          alt='Calming toner'
          buttonText='Book online'
          onButtonClick={() => console.log('Button clicked!')}
          reverse={false}
        />
      </section>
      <section>
        <FullBanner
          title='Behandling med filler'
          subtitle='Hos Klinik Straarup behandler vi disse områder: '
          text='
          Tear Though
          Kindben
          Midtkind
          Hage
          Kæbelinje
          Nasolabialfolder
          Læber
          Næse
          Behandlingen kan med fordel kombineres med andre skønhedsbehandlinger såsom botox og skinbooster.
          På behandlingsdagen er det vigtigt at du ikke dyrker sport, går i svømmehal eller sauna og du må ikke opholde dig i solen eller gå solarium
          '
          imageUrl='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
          alt='toner'
          reverse={true}
        />
      </section>
      <section>
        <BeforeAndAfter
          title='Før og efter behandling'
          imageUrl1='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
          alt1='førbillede'
          imageUrl2='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
          alt2='efter billede'
        />
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
      <section>
        <DiscountBanner />
      </section>
      <section>
        <div className='filler-faq'>
          <FAQimg
            imageUrl1='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
            alt1='førbillede'
            imageUrl2='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
            alt2='efter billede'
          />
          <div className='filler-faq-text'>
            <h1>FAQ</h1>
            <h4>Få svar på dine spørgsmål</h4>
            <div>
              <Accordion title='Hvad skal man være opmærksom på efter filler?' />
            </div>

            <Accordion
              title='Er der noget man ikke må inden behandling?'
              content='testing'
            />
            <Accordion title='Hvornår må man gå i bad efter filler?' />
            <Accordion title='Hvornår skal man massere filler?' />
            <Accordion title='Kan filler rykke sig?' />
            <Accordion title='Hvilken type filler holder længst?' />
            <Accordion title='Hvor lang tid er man hævet efter behandling?' />
            <Accordion title='Hvornår må jeg træne efter filler?' />
          </div>
        </div>
      </section>
      <CustomFooter />
    </>
  );
}
