import React from 'react';
import Navigation from '../components/Navigation';
import TextboxBanner from '../components/TextboxBanners';
import './About.scss';
import CustomFooter from '../components/CustomFooter';
import FullBanner from '../components/FullBanner';
import WebshopBanner from '../components/WebshopBanner';
import { Helmet } from 'react-helmet';
import { SecondaryButton } from '../components/Buttons';

export default function About() {
  return (
    <>
      <Helmet>
        <title>Om klinik Straarup</title>
        <meta
          name='description'
          content='Klinik Straarup er en skønhedsklinik, der tilbyder botox, filler etc'
        />
      </Helmet>
      <div className='about'>
        <Navigation />
        <section className='max-content'>
          <div className='about-s1'>
            <h1>Om klinikken</h1>
            <p>
              Klinik straarup er en kosmetisk og medicinsk klinik, beliggende i
              Glostrup.
            </p>
          </div>
        </section>

        <FullBanner
          title='Klinik Straarup'
          subtitle='Passion for æstetik '
          text={
            <>
              <br />
              <p>
                Vi har passion for æstetik, og holder os altid, opdateret på
                nyeste viden inden for den kosmetiske verden. Vi ønsker at give
                vores kunder naturlige, og smukke resulater, der får dem til at
                føle sig, som den bedste udgave ad sig selv. Vi bruger de bedste
                produkter på markedet, som Restylane og Vistabel.
              </p>
              <br />
              <p>
                Vores konsultationer er gratis og uforpligende. Og giver dig som
                kunde, og din behandler mulighed for at, sammen tilrettelægge en
                plan, for at opnå dine ønsker.
              </p>
              <br />
              <p>
                Vores mål er at udføre behandlinger med naturlige og subtile
                resultater, som vi kan stå inde for.
              </p>
            </>
          }
          imageUrl='/site-images/About-s2.webp'
          alt='toner'
          reverse={false}
        />

        <section className='max-content'>
          <div className='about-s3'>
            <h1>Mød vores behandlere</h1>
            <h5>Hos Klinik Straarup er vi professionelle</h5>
            <p>
              Hos os vægter vi kvalitet og sikkerhed meget højt. Vi er altid
              opdateret på nyeste viden indenfor den kosmetiske verden og
              tilbyder en bred vifte af behandinger.
            </p>
          </div>
        </section>
        <section className='about-s4'>
          <TextboxBanner
            title='Maria Straarup'
            text='Maria er ejer af klinikken. Hun er uddannet sygeplejerske og kosmetisk sygeplejerske, og har arbejdet mange år i den kosmetiske branche. Hun er perfektionist til fingerspidserne og går op i at skabe naturlige resultater til hendes kunder.'
            imageUrl='/site-images/About-maria.webp'
            alt='Billede af Maria'
            reverse={true}
          />
          <TextboxBanner
            title='Jakob Nielsen'
            text='Jakob er virksomhedsansvarlig læge og uddannet på Københavns og Aarhus universitet i hh. 2005 og 2007. 
            Han har 8 års klinisk erfaring og i klinikken vil du møde Jakob til konsultation omkring botox og karklerosering. '
            imageUrl='/site-images/jakob.png'
            alt='Billede af Jakob'
            reverse={false}
          />
        </section>
        <div className='about-full-banner-bgcolor'>
          <FullBanner
            title='Patientsikkerhed'
            subtitle='Klinik Straarup er registreret hos styrelsen for patientsikkerhed'
            text={
              <>
                <br />
                <p>
                  Udførelsen af kosmetisk behandling er reguleret i
                  bekendtgørelse nr. 1245 af 24. oktober 2007 om kosmetisk
                  behandling. Ved kosmetisk behandling er der tale om
                  behandling, som udelukkede foregår, fordi patienten ønsker
                  behandling af kosmetiske årsager. På Styrelsen for
                  Patientsikkerheds hjemmeside kan du finde bekendtgørelsen.
                </p>
                <br />
                <p>
                  I bekendtgørelsens regulering indgår, at klinikken og dennes
                  personer der udfører kosmetiske behandlinger, er registeret af
                  Styrelsen for Patientsikkerhed, dvs. at det er personer der
                  lovmæssigt opfylder kriterierne for at udføre kosmetiske
                  behandlinger. Klinik Straarup er registeret jf. reglerne
                  herom.
                </p>
                <br />
                <p>
                  Som registeret klinik modtages der med jævne mellemrum
                  anmeldte og uanmeldte besøg fra embedslægerne. Efter hvert
                  besøg udformes en inspektionsrapport, denne er at finde
                  offentligt tilgængeligt på Styrelsen for Patientsikkerheds
                  hjemmeside.www.stps.dk
                </p>
              </>
            }
            imageUrl='/site-images/FAQ-2.webp'
            alt='normalizing skin kit'
            reverse={true}
          />
        </div>
        <section className='max-content'>
          <div className='visit-webshop-banner'>
            <WebshopBanner headline='Vi har fået en webshop' />
            <div className='visit-webshop-btn'>
              <SecondaryButton text='Besøg webshop' link='/webshop' />
            </div>
          </div>
        </section>
      </div>
      <CustomFooter />
    </>
  );
}
