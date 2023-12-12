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
import Dropdown from '../components/Dropdown';
import FAQimg from '../components/FAQimg';

export default function Fillers() {
  return (
    <>
      <Navigation />
      <section>
        <Hero2
          title='Filler'
          text='Filler bidrager til yngre udseende med mere karakter og hjælper med at genoprette ansigtsvolumen uden et kirurigsk indgreb. Ved at tilføje hage og kind mere fylde og former, fremhæver en filler behandling ansigtskonturer. Resultatet er et yngre udseende med mere karakter.'
          imageUrl='/site-images/Filler-s1.webp'
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
          text={
            <>
              <ul>
                <li>Tear Though</li>
                <li>Kindben</li>
                <li>Midtkind</li>
                <li>Hage</li>
                <li>Kæbelinje</li>
                <li>Nasolabialfolder</li>
                <li>Læber</li>
                <li>Næse</li>
              </ul>
              <p>
                Behandlingen kan med fordel kombineres med andre
                skønhedsbehandlinger såsom botox og skinbooster.
              </p>
              <br />
              <p>
                På behandlingsdagen er det vigtigt at du ikke dyrker sport, går
                i svømmehal eller sauna og du må ikke opholde dig i solen eller
                gå solarium.
              </p>
            </>
          }
          imageUrl='/site-images/Filler-s2.webp'
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
        <div className='filler-faq'>
          <FAQimg
            imageUrl1='/site-images/FAQ-1.webp'
            alt1='førbillede'
            imageUrl2='/site-images/FAQ-2.webp'
            alt2='efter billede'
          />
          <div className='filler-faq-text'>
            <h1>FAQ</h1>
            <h4>Få svar på dine spørgsmål</h4>
            <div className='filler-faq-dropdown'>
              <Dropdown
                title='Hvad skal man være opmærksom på efter filler?'
                content='Du må ikke anvende make-up samme dag, men skal give huden ro og rense den inden du går i seng. 
                På behandlingsdagen skal du undgå at dyrke sport, gå i sauna eller svømmehallen. 
                Du bør undgå at gå direkte i solen 1-2 dage efter'
              />
              <Dropdown
                title='Er der noget man ikke må inden behandling?'
                content='Du må ikke tage blodfortyndende medicin, fiskeolie samt kosttilskud 10 dage før din behandling.
                du må ikke drikke alkohol eller spise NSAID piller (f.eks. Ibuprofen) dagen før din behandling.
                Har du tendens til forkølelsessår, anbefaler vi, at du tager forebyggende medicin indtil huden er helet (minimum 3 dages behandling). 
                Du skal starte med medicinen 24 timer før din filler behandling. Recepten får du via egen læge '
              />
              <Dropdown
                title='Hvornår skal man massere filler?'
                content='De første 2 døgn efter behandlingen skal du ikke masere eller gnide på det behandlede område (med mindre at anden instruks gives af behandleren).'
              />
              <Dropdown
                title='Kan filler rykke sig?'
                content='I nogle tilfælde - typisk med læber- kan filleren flytte sig og placere sig i huden (også kaldet for filler migration). 
                Her ville man, i de fleste tilfælde, anbefale få filleren opløst.'
              />
              <Dropdown
                title='Hvilken type filler holder længst?'
                content='Juvéderm har en længere holdbarhed en Restylane, selvom de begge har en midlertidig effect.'
              />
              <Dropdown
                title='Hvor lang tid er man hævet efter behandling?'
                content='Ved læbeforstørrelse kan hævelsen stå på i nogle dage. 
              Læberne kan også være lidt ujævne i denne periode således,
              at det endelige resultat ikke ses umiddelbart efter behandlingen'
              />
              <Dropdown
                title='Hvornår må jeg træne efter filler?'
                content='Du skal undgå træning det første døgn efter behandlingen.'
              />
            </div>
          </div>
        </div>
      </section>
      <CustomFooter />
    </>
  );
}
