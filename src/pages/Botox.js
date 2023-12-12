import React from 'react';
import Navigation from '../components/Navigation';
import './Botox.scss';
import Hero2 from '../components/Hero2';
import TextboxBanner from '../components/TextboxBanners';
import LongArrowRightIcon from '../assets/icons/LongArrowRightIcon';
import FullBanner from '../components/FullBanner';
import BeforeAndAfter from '../components/BeforeAndAfter';
import CustomFooter from '../components/CustomFooter';
import DiscountBanner from '../components/DiscountBanner';
import Dropdown from '../components/Dropdown';
import FAQimg from '../components/FAQimg';

export default function Botox() {
  return (
    <>
      <Navigation />
      <section>
        <Hero2
          title='Botox'
          text='Udover at reducere rynker og give en pænere hud kan botox også hjælpe på medicinske problematikker som migræne, skæren tænder, muskelsmerter i kæber og reducering af sved.'
          imageUrl='/site-images/Botox-s1.webp'
          alt='Calming toner'
          buttonText='Book online'
          onButtonClick={() => console.log('Button clicked!')}
          reverse={false}
        />
      </section>
      <section>
        <FullBanner
          title='Behandling med botox'
          subtitle='Hos Klinik Straarup behandler vi disse områder: '
          text={
            <>
              <ul>
                <li>Glabella/Mellem bryn</li>
                <li>Pande</li>
                <li>Smilerynker</li>
                <li>Brynløft</li>
                <li>Hagekløft</li>
                <li>Bunnylines</li>
                <li>Gummysmile</li>
                <li>Lipflip/Rygerynker</li>
                <li>Nedadgående mundvige</li>
                <li>Kæbelinje</li>
                <li>Masseter/Tyggemuskel</li>
                <li>Stramme halsbånd</li>
                <li>Næse</li>
              </ul>
              <p>
                Behandlingen kan med fordel kombineres med andre
                skønhedsbehandlinger såsom filler og skinbooster.
              </p>
              <br />
              <p>
                På behandlingsdagen er det vigtigt at du ikke dyrker sport, går
                i svømmehal eller sauna og du må ikke opholde dig i solen eller
                gå solarium
              </p>
            </>
          }
          imageUrl='/site-images/Botox-s2.webp'
          alt='toner'
          reverse={false}
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
          imageUrl='/site-images/Textboxbanner-1.webp'
          alt='Calming toner'
          buttonText='Kontakt klinikken'
          buttonIcon={<LongArrowRightIcon />}
          onButtonClick={() => console.log('Button clicked!')}
          reverse={false}
        />
        <TextboxBanner
          title='Prisliste'
          text='Husk at vi tilbyder gratis konsultationer på alle vores behandlinger'
          imageUrl='/site-images/Textboxbanner-2.webp'
          alt='Clearing mask'
          buttonText='Se priser'
          buttonIcon={<LongArrowRightIcon />}
          onButtonClick={() => console.log('Button clicked!')}
          reverse={true}
        />
      </section>
      <section>
        <DiscountBanner />
      </section>
      <section>
        <div className='botox-faq'>
          <FAQimg
            imageUrl1='/site-images/FAQ-1.webp'
            alt1='førbillede'
            imageUrl2='/site-images/FAQ-2.webp'
            alt2='efter billede'
          />
          <div className='botox-faq-text'>
            <h1>FAQ</h1>
            <h4>Få svar på dine spørgsmål</h4>
            <div className='botox-faq-dropdown'>
              <Dropdown
                title='Er botox farligt?'
                content='I de små mængder der bliver benyttet er botox ufarligt. '
              />
              <Dropdown
                title='Hvor længe holder en behandling med botox? '
                content='Effekten varer oftest, ved første behandling, 3-6 måneder.'
              />
              <Dropdown
                title='Hvornår kan jeg se resultatet af en behandling?'
                content='Som udgangspunkt går der mellem 3-10 dage, før du ser det endelige resultat.'
              />
              <Dropdown
                title='Må man bruge makeup samme dag efter behandling?'
                content='Det er bedst ikke at anvende make-up samme dag, men at holde huden helt ren efter behandlingen'
              />
              <Dropdown
                title='Hvor længe må man ikke lægge ned efter botox?'
                content='Du må ikke massere, ligge ned, eller tage hovedet ned mellem benene før 3-4 timer for at undgå at medicinen flytter sig til andre muskler'
              />
            </div>
          </div>
        </div>
      </section>
      <CustomFooter />
    </>
  );
}
