import React from 'react';
import Navigation from '../components/Navigation';
import './Laser.scss';
import Hero2 from '../components/Hero2';
import TextboxBanner from '../components/TextboxBanners';
import LongArrowRightIcon from '../assets/icons/LongArrowRightIcon';
import FullBanner from '../components/FullBanner';
import CustomFooter from '../components/CustomFooter';
import DiscountBanner from '../components/DiscountBanner';
import Dropdown from '../components/Dropdown';
import FAQimg from '../components/FAQimg';

export default function Laser() {
  return (
    <>
      <Navigation />
      <section>
        <Hero2
          title='Permanent hårfjerning'
          text='Vi laver permanent hårfjerning med en XXP laser hvor lyset fra laseren ledes ned gennem hårsækken og afgiver sin energi til pigmentet i hårroden.
          Det kræver i gennemsnit 6-8 behandlinger at blive op imod 90 % hårfri.'
          imageUrl='/site-images/Laser-s1.webp'
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
          text={
            <>
              <ul>
                <li>Helt ansigt/nakke</li>
                <li>Armhuler/brazil</li>
                <li>Halve ben/armhuler</li>
                <li>Halve ben/brazil</li>
                <li>Halve ben /armhuler/brazil</li>
                <li>Hele ben/armhuler</li>
                <li>Hele ben/brazil</li>
                <li> Hele ben/armhuler/brazil</li>
              </ul>
              <p>
                Hvis du er træt af, at fjerne uønskede hår med barbering eller
                voks. Og vil du gerne slippe for indgroede hår, jordbærben og
                irriteret hud. Så er permanent hårfjerning noget for dig.
              </p>
            </>
          }
          imageUrl='/site-images/Laser-s2.webp'
          alt='toner'
          reverse={false}
        />
      </section>
      <section>
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
        <div className='laser-faq'>
          <FAQimg
            imageUrl1='/site-images/FAQ-1.webp'
            alt1='førbillede'
            imageUrl2='/site-images/FAQ-2.webp'
            alt2='efter billede'
          />
          <div className='laser-faq-text'>
            <h1>FAQ</h1>
            <h4>Få svar på dine spørgsmål</h4>
            <div className='laser-faq-dropdown'>
              <Dropdown
                title='Hvor længe holder hårfjerning med laser?'
                content='Det er meget individuelt, hvor længe en behandling holder. 
                Nogle vil opleve det holder i op til 10 år, hvor andre kan have brug for opfølgende behandlinger. 
                Alle vil dog opleve en kraftig reduktion i hårvæksten i de behandlede områder'
              />
              <Dropdown
                title='Hvor mange behandlinger kræver permanent hårfjerning?'
                content='Det kræver som oftest 6-8 behandlinger at blive permanent hårfri med et behandlingsinterval på 6-8uger.'
              />
              <Dropdown
                title='Gør det ondt at få laser?'
                content='Ved behandling mærkes laserlyset som små stik i huden. Det kan mærkes men er ikke særlig ubehageligt. '
              />
              <Dropdown
                title='Hvor lang tid skal der gå mellem hver behandling?'
                content='Det anbefales at der går 4-12 uger mellem hver behandling på samme område.'
              />
            </div>
          </div>
        </div>
      </section>

      <CustomFooter />
    </>
  );
}
