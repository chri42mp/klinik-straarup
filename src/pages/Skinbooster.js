import React from 'react';
import Navigation from '../components/Navigation';
import './Skinbooster.scss';
import SingleBanner from '../components/SingleBanner';
import TextboxBanner from '../components/TextboxBanners';
import LongArrowRightIcon from '../assets/icons/LongArrowRightIcon';
import FullBanner from '../components/FullBanner';
import BeforeAndAfter from '../components/BeforeAndAfter';
import CustomFooter from '../components/CustomFooter';
import DiscountBanner from '../components/DiscountBanner';

export default function Skinbooster() {
  return (
    <>
      <Navigation />
      <section>
        <SingleBanner
          title='Skinbooster'
          text='Din hud vil elske dig for behandlinger med skinbooster. Skinbooster vil opstramme slap hud, reducere rynker, forbedre hudtonen og elasticiteten samt forbedre den generelle hudtilstand, på hals, decollete, hænder og ansigt.'
          imageUrl='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
          alt='Calming toner'
          buttonText='Book online'
          onButtonClick={() => console.log('Button clicked!')}
          reverse={false}
        />
      </section>
      <section>
        <FullBanner
          title='Behandling med skinbooster'
          subtitle='Hvad kan du forvente af behandlingen?'
          text='
          Behandlingen stimulerer produktionen af nyt kollagen og genopretter niveauet af naturlig hyaluronsyre i huden ved at modvirke nedbrydningsprocessen.
          Ydermere er produktet designet til at omstrukturere og forstærke den ekstracellulære matrix revitaliserende hud, der er dehydreret og beskadiget af aldring og soleksponering.
          På behandlingsdagen er det vigtigt at du ikke bruger makeup eller creme før tidligst 6 timer efter behandlingen og helst gerne først dagen efter. '
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
          text='Du vil opleve let rødme på grund af de mange fine stik i huden og eventuelt blå mærker i forbindelse med din behandling, dette er ufarligt! Ved mistake om komplikationer kan klinikken altid kontaktes på telefonen.'
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

      <CustomFooter />
    </>
  );
}
