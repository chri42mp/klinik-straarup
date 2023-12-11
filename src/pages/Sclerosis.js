import React from 'react';
import Navigation from '../components/Navigation';
import './Sclerosis.scss';
import Hero2 from '../components/Hero2';
import TextboxBanner from '../components/TextboxBanners';
import LongArrowRightIcon from '../assets/icons/LongArrowRightIcon';
import FullBanner from '../components/FullBanner';
import BeforeAndAfter from '../components/BeforeAndAfter';
import CustomFooter from '../components/CustomFooter';
import DiscountBanner from '../components/DiscountBanner';
import Accordion from '../components/Accordion';
import FAQimg from '../components/FAQimg';

export default function Sclerosis() {
  return (
    <>
      <Navigation />
      <section>
        <Hero2
          title='Sklerosering'
          text='Karspængninger er et udbredt kosmetisk problem, som kan afhjælpes med indsprøjtning af skleroseringsvæske.
          For at opnå et flot resultat, skal du forvente at komme til flere behandlinger.'
          imageUrl='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
          alt='Calming toner'
          buttonText='Book online'
          onButtonClick={() => console.log('Button clicked!')}
          reverse={false}
        />
      </section>
      <section>
        <FullBanner
          title='Behandling af sklerosering'
          subtitle='Hvad kan du forvente af behandlingen?'
          text='
          Efter første behandling kan du forvente en reduktion af karsprængninger på op til 70%.
          De kar, du har fået behandlet, er nedbrudte og kommer ikke tilbage. Du kan faktisk se karrene forsvinde med det samme under behandlingen. 
          Har du tendens til at danne karsprængninger, skal du dog forvente, at der kommer nye til med tiden. 
          Til behandlingen medfølger kompressionsstrømper ved behov.
          Det endelige resultat ses 2-3 måneder efter behandlingen. For at opnå et flot resultat, og især hvis du har mange / store områder med karsprængninger, 
          skal du ofte forvente at skulle komme til mere end én enkelt behandling.     '
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
        <div className='sclerosis-faq'>
          <FAQimg
            imageUrl1='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
            alt1='førbillede'
            imageUrl2='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
            alt2='efter billede'
          />
          <div className='sclerosis-faq-text'>
            <h1>FAQ</h1>
            <h4>Få svar på dine spørgsmål</h4>
            <Accordion title='Er botox farligt?' />
            <Accordion
              title='Hvor længe holder en behandling med botox? '
              content='testing'
            />
            <Accordion title='Hvornår kan jeg se resultatet af en behandling?' />
            <Accordion title='Må man bruge makeup samme dag efter behandling?' />
            <Accordion title='Hvor længe må man ikke lægge ned efter botox?' />
          </div>
        </div>
      </section>

      <CustomFooter />
    </>
  );
}
