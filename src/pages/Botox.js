import React from 'react';
import Navigation from '../components/Navigation';
import './Botox.scss';
import SingleBanner from '../components/SingleBanner';
import TextboxBanner from '../components/TextboxBanners';
import LongArrowRightIcon from '../assets/icons/LongArrowRightIcon';
import FullBanner from '../components/FullBanner';
import BeforeAndAfter from '../components/BeforeAndAfter';
import CustomFooter from '../components/CustomFooter';
import DiscountBanner from '../components/DiscountBanner';

export default function Botox() {
  return (
    <>
      <Navigation />
      <section>
        <SingleBanner
          title='Botox'
          text='Udover at reducere rynker og give en pænere hud kan botox også hjælpe på medicinske problematikker som migræne, skæren tænder, muskelsmerter i kæber og reducering af sved.'
          imageUrl='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
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
          text='
          Glabella/Mellem bryn
          Pande
          Smilerynker
          Brynløft
          Hagekløft
          Bunnylines
          Gummysmile
          Lipflip/Rygerynker
          Nedadgående mundvige
          Kæbelinje
          Masseter/Tyggemuskel
          Stramme halsbånd
          Næse
          Behandlingen kan med fordel kombineres med andre skønhedsbehandlinger såsom filler og skinbooster. 
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

      <CustomFooter />
    </>
  );
}
