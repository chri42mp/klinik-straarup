import React from 'react';
import Navigation from '../components/Navigation';
import CustomFooter from '../components/CustomFooter';
import TextboxBanner from '../components/TextboxBanners';
import DiscountBanner from '../components/DiscountBanner';
import LongArrowRightIcon from '../assets/icons/LongArrowRightIcon';
import Hero from '../components/Hero';

export default function Frontpage() {
  return (
    <>
      <Navigation />

      <section>
        <Hero
          title='Velkommen til Klinik Straarup'
          subtitle='Kosmetiske behandlinger med naturlige og subtile resultater'
          text='Vi rådgiver inden vi behandler! Alle behandlinger kræver en konsultation og 48 timers betænkningstid i henhold til Styrelsen for patientsikkerhed.'
          imageUrl='/site-images/Filler-s2.webp'
          alt='Calming toner'
          buttonText='Book online'
          onButtonClick={() =>
            window.open(
              'https://klinikstraarup.app4.geckobooking.dk/site/booking.php?show=new_booking&icCode=0aad36965f0f2ec512837c390542ebc2b8929&bId=8929&PHPSESSID=3d232c3793cd5f580a36db375318b752&dTpl=1',
              '_blank',
              'noreferrer'
            )
          }
        />
      </section>
      <section>
        <DiscountBanner />
      </section>
      <section>
        <TextboxBanner
          title='Behandlinger'
          text='Hos Klinik Straarup tilbyder vi en række kosmetiske behandlinger såsom botox, fillers og permanent hårfjerning m.m.  '
          imageUrl='/site-images/Frontpage-textboxbanner.webp'
          alt='Calming toner'
          buttonText='Se vores priser'
          buttonIcon={<LongArrowRightIcon />}
          onButtonClick={() => console.log('Button clicked!')}
          reverse={true}
        />
        <TextboxBanner
          title='Patientsikkerhed'
          text='Vi er registreret ved Styrelsen for Patientsikkerhed og hos os vægter vi kvalitet og sikkerhed meget højt.'
          imageUrl='/site-images/Frontpage-textboxbanner2.webp'
          alt='Clearing mask'
          buttonText='Læs mere om klinikken'
          buttonIcon={<LongArrowRightIcon />}
          onButtonClick={() => console.log('Button clicked!')}
          reverse={false}
        />
      </section>

      <CustomFooter />
    </>
  );
}
