import React from 'react';
import Navigation from '../components/Navigation';
import './Laser.scss';
import SingleBanner from '../components/SingleBanner';
import TextboxBanner from '../components/TextboxBanners';
import LongArrowRightIcon from '../assets/icons/LongArrowRightIcon';
import FullBanner from '../components/FullBanner';
import BeforeAndAfter from '../components/BeforeAndAfter';
import CustomFooter from '../components/CustomFooter';
import DiscountBanner from '../components/DiscountBanner';

export default function Laser() {
  return (
    <>
      <Navigation />
      <section>
        <SingleBanner
          title='Permanent hårfjerning'
          text='Vi laver permanent hårfjerning med en XXP laser hvor lyset fra laseren ledes ned gennem hårsækken og afgiver sin energi til pigmentet i hårroden.
          Det kræver i gennemsnit 6-8 behandlinger at blive op imod 90 % hårfri.'
          imageUrl='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
          alt='Calming toner'
          buttonText='Book online'
          onButtonClick={() => console.log('Button clicked!')}
          reverse={false}
        />
      </section>
      <section>
        <FullBanner
          title='Behandling med laser'
          subtitle='Du kan vælge at få laser på enkelte områder eller vælge en af vores pakker:'
          text='
            Helt ansigt/nakke
            Armhuler/brazil
            Halve ben/armhuler
            Halve ben/brazil
            Halve ben /armhuler/brazil
            Hele ben/armhuler
            Hele ben/brazil
            Hele ben/armhuler/brazil
            Hvis du er træt af, at fjerne uønskede hår med barbering eller voks.
            Og vil du gerne slippe for indgroede hår, jordbærben og irriteret hud. Så er permanent hårfjerning noget for dig.
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
