import React from 'react';
import Navigation from '../components/Navigation';
import TextboxBanner from '../components/TextboxBanners';
import './About.scss';
import CustomFooter from '../components/CustomFooter';
import FullBanner from '../components/FullBanner';

export default function About() {
  return (
    <>
      <div className='about'>
        <Navigation />
        <section className='about-s1'>
          <h1>Om klinikken</h1>
          <p>
            Klinik straarup er en kosmetisk og medicinsk klinik, beliggende i
            Glostrup.
          </p>
        </section>
        <section>
          <FullBanner
            title='Klinik Straarup'
            subtitle='Passion for æstetik '
            text=' Vi har passion for æstetik, og holder os altid, opdateret på
          nyeste viden inden for den kosmetiske verden. Vi ønsker at give
          vores kunder naturlige, og smukke resulater, der får dem til at
          føle sig, som den bedste udgave ad sig selv. Vi bruger de bedste
          produkter på markedet, som Restylane og Vistabel. 
          Vores konsultationer er gratis og uforpligende. Og giver
          dig som kunde, og din behandler mulighed for at, sammen
          tilrettelægge en plan, for at opnå dine ønsker. 
          Vores mål er at udføre behandlinger med naturlige og
          subtile resultater, som vi kan stå inde for.
          '
            imageUrl='/webshop-images/2018-kit-aggressive-anti-aging-program.webp'
            alt='toner'
            reverse={false}
          />
        </section>
        <section className='about-s2'>
          <div className='s2-img'>
            <img
              className='hero-image'
              src='/webshop-images/2018-kit-skin-normalizing.webp'
              alt='normalizing skin kit'
            />
          </div>
          <div className='s2-text'>
            <h2>Klinik Straarup</h2>
            <h5>Passion for æstetik</h5>
            <p>
              Vi har passion for æstetik, og holder os altid, opdateret på
              nyeste viden inden for den kosmetiske verden. Vi ønsker at give
              vores kunder naturlige, og smukke resulater, der får dem til at
              føle sig, som den bedste udgave ad sig selv. Vi bruger de bedste
              produkter på markedet, som Restylane og Vistabel. <br />
              <br /> Vores konsultationer er gratis og uforpligende. Og giver
              dig som kunde, og din behandler mulighed for at, sammen
              tilrettelægge en plan, for at opnå dine ønsker. <br />
              <br /> Vores mål er at udføre behandlinger med naturlige og
              subtile resultater, som vi kan stå inde for.
            </p>
          </div>
        </section>
        <section className='about-s3'>
          <h1>Mød vores behandlere</h1>
          <h5>Hos Klinik Straarup er vi professionelle</h5>
          <p>
            Hos os vægter vi kvalitet og sikkerhed meget højt. Vi er altid
            opdateret på nyeste viden indenfor den kosmetiske verden og tilbyder
            en bred vifte af behandinger.
          </p>
        </section>
        <section className='about-s4'>
          <TextboxBanner
            title='Maria Straarup'
            text='Maria er ejer af klinikken. Hun er uddannet sygeplejerske og kosmetisk sygeplejerske, og har arbejdet mange år i den kosmetiske branche. Hun er perfektionist til fingerspidserne og går op i at skabe naturlige resultater til hendes kunder.'
            imageUrl='/webshop-images/gbl-calming-toner.webp'
            alt='Billede af Maria'
            reverse={true}
          />
          <TextboxBanner
            title='Jakob Nielsen'
            text='Jakob er virksomhedsansvarlig læge og uddannet på Københavns og Aarhus universitet i hh. 2005 og 2007. 
          Han har 8 års klinisk erfaring og i klinikken vil du møde Jakob til konsultation omkring botox og karklerosering. '
            imageUrl='/webshop-images/gbl-complexion-clearing-masque-original.webp'
            alt='Billede af Jakob'
            reverse={false}
          />
        </section>
        <section>
          <h1>Webshop</h1>
        </section>
        <section className='about-s5'>
          <div className='s5-text'>
            <h2>Patientsikkerhed</h2>
            <h5>
              Klinik Straarup er registreret hos styrelsen for patientsikkerhed
            </h5>
            <p>
              Udførelsen af kosmetisk behandling er reguleret i bekendtgørelse
              nr. 1245 af 24. oktober 2007 om kosmetisk behandling. Ved
              kosmetisk behandling er der tale om behandling, som udelukkede
              foregår, fordi patienten ønsker behandling af kosmetiske årsager.
              På Styrelsen for Patientsikkerheds hjemmeside kan du finde
              bekendtgørelsen.
              <br />
              <br />I bekendtgørelsens regulering indgår, at klinikken og dennes
              personer der udfører kosmetiske behandlinger, er registeret af
              Styrelsen for Patientsikkerhed, dvs. at det er personer der
              lovmæssigt opfylder kriterierne for at udføre kosmetiske
              behandlinger. Klinik Straarup er registeret jf. reglerne herom.{' '}
              <br />
              <br /> Som registeret klinik modtages der med jævne mellemrum
              anmeldte og uanmeldte besøg fra embedslægerne. Efter hvert besøg
              udformes en inspektionsrapport, denne er at finde offentligt
              tilgængeligt på Styrelsen for Patientsikkerheds
              hjemmeside.www.stps.dk
            </p>
          </div>
          <div className='s5-img'>
            <img
              className='hero-image'
              src='/webshop-images/2018-kit-skin-normalizing.webp'
              alt='normalizing skin kit'
            />
          </div>
        </section>
        <section></section>
      </div>
      <CustomFooter />
    </>
  );
}
