import React from 'react';
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
    <footer className='customFooter'>
      <div className='topDivFooter'>
        <div className='col1'>
          <div
            className='trustpilot-widget'
            data-locale='da-DK'
            data-template-id='56278e9abfbbba0bdcd568bc'
            data-businessunit-id='650d67597a3cc2a49edb1e74'
            data-style-height='52px'
            data-style-width='100%'
          >
            <a href='https://dk.trustpilot.com/review/klinikstraarup.dk'>
              Trustpilot
            </a>
          </div>
        </div>
        <div className='col2'>
          <div>
            <h4>Kontakt</h4>
            <h5>E-mail</h5>

            <a href='mailto:info@klinikstraarup.dk'>info@klinikstraarup.dk</a>
            <h5>Telefon nr.</h5>
            <a href='tel:+4540562064'>+4540562064</a>
            <h5>SoMe</h5>
            <a href='https://www.instagram.com/klinikstraarup/'>
              <InstagramIcon />
            </a>
            <a href='https://www.facebook.com/klinikstraarup'>
              <FacebookIcon />
            </a>
          </div>
          <div>
            <h5>Adresse</h5>
            <a href='https://www.google.com/maps/search/?api=1&query=%22Klinik%20Straarup%2C%20Br%C3%B8ndbyvestervej%2023%20st%20th%20%2C%202600%20Glostrup%2C%20Denmark%22'>
              <p>Klinik Straarup</p>
              <p>Brøndbyvestervej 23 st th</p>
              <p>2600 Glostrup </p>
              <p>Denmark</p>
            </a>
          </div>
        </div>
      </div>
      <div className='bottomDivFooter'>
        <div className='bottomDivLinks'>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div className='footerLogo'>
          <KsLogoGold className='ks-logo-gold' />
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
