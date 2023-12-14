import React from 'react';
import './ContactForm.scss';
import { SecondaryButton } from './Buttons';
import PhoneIcon from '../assets/icons/PhoneIcon';
import MailIcon from '../assets/icons/MailIcon';
import LocationIcon from '../assets/icons/LocationIcon';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  return (
    <form className='contact-form'>
      <div className='contact-input'>
        <div className='contact-heading'>
          <h1>Kontakt</h1>
          <h5>Vi står altid klar til at hjælpe dig</h5>
        </div>
        <div>
          <label for='firstname'>Navn</label>
          <input id='firstname'></input>
        </div>
        <div>
          <label for='lastname'>Efternavn</label>
          <input id='lastname'></input>
        </div>
        <div>
          <label for='comment'>Kommentar</label>
          <input id='comment'></input>
        </div>
        <div className='send-btn'>
          <SecondaryButton text='Send' />
        </div>
      </div>

      <div className='contact-info-container'>
        <div className='contact-info'>
          <Link to='https://www.google.com/maps/search/?api=1&query=%22Klinik%20Straarup%2C%20Br%C3%B8ndbyvestervej%2023%20st%20th%20%2C%202600%20Glostrup%2C%20Denmark%22'>
            <LocationIcon />
            <h5>Adresse</h5>
            <p>Brøndbyvestervej 23 st th</p>
            <p>2600 Glostrup </p>
            <p>Denmark</p>
          </Link>
        </div>
        <div className='contact-info'>
          <Link to='tel:+4540562064'>
            <PhoneIcon />
            <h5>Telefon</h5>+4540562064
          </Link>
        </div>
        <div className='contact-info'>
          <Link to='mailto:info@klinikstraarup.dk'>
            <MailIcon />
            <h5>Email</h5>
            info@klinikstraarup.dk
          </Link>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
