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
              <h4>Trustpilot</h4>
            </Link>
            <div className='trustpilot-star'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='40'
                viewBox='0 -960 960 960'
                width='40'
              >
                <path d='m384-294 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122ZM233-80l93-304L80-560h304l96-320 96 320h304L634-384l93 304-247-188L233-80Zm247-369Z' />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='40'
                viewBox='0 -960 960 960'
                width='40'
              >
                <path d='m384-294 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122ZM233-80l93-304L80-560h304l96-320 96 320h304L634-384l93 304-247-188L233-80Zm247-369Z' />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='40'
                viewBox='0 -960 960 960'
                width='40'
              >
                <path d='m384-294 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122ZM233-80l93-304L80-560h304l96-320 96 320h304L634-384l93 304-247-188L233-80Zm247-369Z' />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='40'
                viewBox='0 -960 960 960'
                width='40'
              >
                <path d='m384-294 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122ZM233-80l93-304L80-560h304l96-320 96 320h304L634-384l93 304-247-188L233-80Zm247-369Z' />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='40'
                viewBox='0 -960 960 960'
                width='40'
              >
                <path d='m384-294 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122ZM233-80l93-304L80-560h304l96-320 96 320h304L634-384l93 304-247-188L233-80Zm247-369Z' />
              </svg>
            </div>
            <p>Rated 4.0/5.0</p>
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
            <h4>Adresse</h4>
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
