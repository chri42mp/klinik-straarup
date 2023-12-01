import React from 'react';
import { Link } from 'react-router-dom';
import './CustomFooter.scss';
import KsLogoGold from '../assets/logos/KsLogoGold';
import FacebookIcon from '../assets/icons/FacebookIcon';
import InstagramIcon from '../assets/icons/InstagramIcon';
<script
  type='text/javascript'
  src='//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
  async
></script>;

const CustomFooter = () => {
  return (
    <footer className='custom-footer'>
      <div className='top-div-footer'>
        <div className='col1'>
          <div
            className='trustpilot-widget'
            data-locale='da-DK'
            data-template-id='56278e9abfbbba0bdcd568bc'
            data-businessunit-id='650d67597a3cc2a49edb1e74'
            data-style-height='52px'
            data-style-width='100%'
          >
            <Link to='https://dk.trustpilot.com/review/klinikstraarup.dk'>
              Trustpilot
            </Link>
          </div>
        </div>
        <div className='col2'>
          <div>
            <h4>Kontakt</h4>
            <h5>E-mail</h5>

            <Link to='mailto:info@klinikstraarup.dk'>
              info@klinikstraarup.dk
            </Link>
            <h5>Telefon nr.</h5>
            <Link to='tel:+4540562064'>+4540562064</Link>
            <h5>SoMe</h5>
            <Link href='https://www.instagram.com/klinikstraarup/'>
              <InstagramIcon />
            </Link>
            <Link href='https://www.facebook.com/klinikstraarup'>
              <FacebookIcon />
            </Link>
          </div>
          <div>
            <h5>Adresse</h5>
            <Link href='https://www.google.com/maps/search/?api=1&query=%22Klinik%20Straarup%2C%20Br%C3%B8ndbyvestervej%2023%20st%20th%20%2C%202600%20Glostrup%2C%20Denmark%22'>
              <p>Klinik Straarup</p>
              <p>Brøndbyvestervej 23 st th</p>
              <p>2600 Glostrup </p>
              <p>Denmark</p>
            </Link>
          </div>
        </div>
      </div>
      <div className='bottom-div-footer'>
        <div className='bottom-div-links'>
          <p>Cookiepolitik</p>
          <p>Privatlivspolitik</p>
          <p>Sitemap</p>
        </div>
        <div className='footer-logo'>
          <KsLogoGold className='ks-logo-gold' />
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
