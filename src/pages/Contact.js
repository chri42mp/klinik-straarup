import React from 'react';
import Navigation from '../components/Navigation';
import ContactForm from '../components/ContactForm';
import CustomFooter from '../components/CustomFooter';
import DiscountBanner from '../components/DiscountBanner';
import './Contact.scss';

export default function Contact() {
  return (
    <>
      <Navigation />
      <section className='contact-s1'>
        <h1>Kontakt os</h1>
        <p>
          Vi står altid klar til at vejlede dig. Udfyld vores kontaktformular,
          ring til os eller kom forbi klinikken.
        </p>
      </section>
      <ContactForm />

      <DiscountBanner />
      <CustomFooter />
    </>
  );
}
