import React from 'react';
import Navigation from '../components/Navigation';
import './Skinbooster.scss';
import Hero2 from '../components/Hero2';
import TextboxBanner from '../components/TextboxBanners';
import LongArrowRightIcon from '../assets/icons/LongArrowRightIcon';
import FullBanner from '../components/FullBanner';
import BeforeAndAfter from '../components/BeforeAndAfter';
import CustomFooter from '../components/CustomFooter';
import DiscountBanner from '../components/DiscountBanner';
import Dropdown from '../components/Dropdown';
import FAQimg from '../components/FAQimg';
import { Helmet } from 'react-helmet';

export default function Skinbooster() {
  return (
    <>
      <Helmet>
        <title>Skinbooster behandlingsside</title>
        <meta
          name='description'
          content='Denne side beskriver behandlinger for skinbooster'
        />
      </Helmet>
      <Navigation />

      <Hero2
        title='Skinbooster'
        text='Din hud vil elske dig for behandlinger med skinbooster. Skinbooster vil opstramme slap hud, reducere rynker, forbedre hudtonen og elasticiteten samt forbedre den generelle hudtilstand, på hals, decollete, hænder og ansigt.'
        imageUrl='/site-images/Skinbooster-s1.webp'
        alt='Calming toner'
        buttonText='Book online'
        onButtonClick={() =>
          window.open(
            'https://klinikstraarup.app4.geckobooking.dk/site/booking.php?show=new_booking&icCode=0aad36965f0f2ec512837c390542ebc2b8929&bId=8929&PHPSESSID=3d232c3793cd5f580a36db375318b752&dTpl=1',
            '_blank',
            'noreferrer'
          )
        }
        reverse={false}
      />

      <FullBanner
        title='Behandling med skinbooster'
        subtitle='Hvad kan du forvente af behandlingen?'
        text={
          <>
            <br />
            <p>
              Behandlingen stimulerer produktionen af nyt kollagen og
              genopretter niveauet af naturlig hyaluronsyre i huden ved at
              modvirke nedbrydningsprocessen.
            </p>
            <br />
            <p>
              Ydermere er produktet designet til at omstrukturere og forstærke
              den ekstracellulære matrix revitaliserende hud, der er dehydreret
              og beskadiget af aldring og soleksponering.
            </p>
            <br />
            <p>
              På behandlingsdagen er det vigtigt at du ikke bruger makeup eller
              creme før tidligst 6 timer efter behandlingen og helst gerne først
              dagen efter.
            </p>
          </>
        }
        imageUrl='/site-images/Skinbooster-s2.webp'
        alt='toner'
        reverse={false}
      />

      <BeforeAndAfter
        title='Før og efter behandling'
        imageUrl1='/site-images/skinbooster-før.png'
        alt1='førbillede'
        imageUrl2='/site-images/skinbooster-efter.png'
        alt2='efter billede'
      />

      <TextboxBanner
        title='Værd at vide'
        text='Du vil opleve let rødme på grund af de mange fine stik i huden og eventuelt blå mærker i forbindelse med din behandling, dette er ufarligt! Ved mistake om komplikationer kan klinikken altid kontaktes på telefonen.'
        imageUrl='/site-images/Textboxbanner-1.webp'
        alt='Calming toner'
        buttonText='Kontakt klinikken'
        buttonIcon={<LongArrowRightIcon />}
        onButtonClick={() => console.log('Button clicked!')}
        reverse={true}
      />
      <TextboxBanner
        title='Prisliste'
        text='Husk at vi tilbyder gratis konsultationer på alle vores behandlinger'
        imageUrl='/site-images/Textboxbanner-2.webp'
        alt='Clearing mask'
        buttonText='Se priser'
        buttonIcon={<LongArrowRightIcon />}
        onButtonClick={() => console.log('Button clicked!')}
        reverse={false}
      />

      <DiscountBanner />

      <section className='max-content'>
        <div className='skinbooster-faq'>
          <FAQimg
            imageUrl1='/site-images/FAQ-1.webp'
            alt1='førbillede'
            imageUrl2='/site-images/FAQ-2.webp'
            alt2='efter billede'
          />
          <div className='skinbooster-faq-text'>
            <h1>FAQ</h1>
            <h2>Få svar på dine spørgsmål</h2>
            <div className='skinbooster-faq-dropdown'>
              <Dropdown
                title='Hvad er forskellen på skinbooster og filler?'
                content='Man kan genvinde vitalitet i huden ved hjælp af skinbooster behandlingen, hvor filler lægges meget overfladisk i huden for at give fugt og fylde.'
              />
              <Dropdown
                title='Hvor ofte skal man have skinbooster? '
                content='Vi anbefaler 3 behandlinger med 2-4 ugers interval mellem hver behandling.'
              />
              <Dropdown
                title='Hvordan virker skinbooster?'
                content='Når den indføres med en skinbooster behandling, fungere hyaluronsyren som en intens fugtgiver, der trænger dybt ind i hyden og giver den ekstra hydrering.'
              />
              <Dropdown
                title='Hvad er der i en skinbooster?'
                content='Skinbooster består af 2 % stabiliseret hyaluronsyre og 98% vand.'
              />
            </div>
          </div>
        </div>
      </section>

      <CustomFooter />
    </>
  );
}
