import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import LoginIcon from '../assets/icons/LoginIcon';
import BasketIcon from '../assets/icons/BasketIcon';
import ArrowDownIcon from '../assets/icons/ArrowDownIcon';
import ArrowUpIcon from '../assets/icons/ArrowUpIcon';
import { PrimaryButton } from './Buttons';
import MenuIcon from '../assets/icons/MenuIcon';

export default function Navigation() {
  const [isSubmenuVisible, setSubmenuVisble] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleSubmenuClicked = () => {
    setSubmenuVisble(!isSubmenuVisible);
    console.log('Submenu clicked!');
  };

  return (
    <div className='max-content'>
      <nav className='navigation'>
        <div className='brand-name '>
          <Link to='/'>
            <img
              className='logo-mobile'
              src='/KS-logo-element_gold.png'
              alt='klinik strarup logo'
              loading='lazy'
            />
            <img
              className='logo-web'
              src='/KS-logo_gold.png'
              alt='klinik strarup logo'
              loading='lazy'
            />
          </Link>
        </div>
        <div className='nav-icons'>
          <Link to='/login'>
            <span className='visually-hidden'>Gå til login</span>
            <LoginIcon />
          </Link>
          <Link to='/basket'>
            <span className='visually-hidden'>Gå til kurv</span>
            <BasketIcon />
          </Link>
          <button
            className='hamburger'
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <MenuIcon />
            {/* hamburger svg code... */}
          </button>
        </div>
        <div
          className={
            isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
          }
        >
          <ul>
            {/* className='mobile-menu' */}
            <li
              className={`treatments ${isSubmenuVisible ? 'active' : ''}`}
              onClick={handleSubmenuClicked}
            >
              <div className='align-icon'>
                Behandlinger
                {isSubmenuVisible ? (
                  <ArrowUpIcon className='arrow-up-icon' />
                ) : (
                  <ArrowDownIcon className='arrow-down-icon' />
                )}
              </div>
              {isSubmenuVisible && (
                <ul className='submenu'>
                  <li>
                    <Link to='/fillers'>Filler</Link>
                  </li>
                  <li>
                    <Link to='/botox'>Botox</Link>
                  </li>
                  <li>
                    <Link to='/laser'>Hårfjerning</Link>
                  </li>
                  <li>
                    <Link to='/sclerosis'>Sklerosering</Link>
                  </li>
                  <li>
                    <Link to='/skinbooster'>Skinbooster</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to='/prices'>Priser</Link>
            </li>
            <li>
              <Link to='/webshop'>Webshop</Link>
            </li>
            <li>
              <Link to='/about'>Om</Link>
            </li>
            <li>
              <Link to='/contact'>Kontakt</Link>
            </li>
            <li className='align-btn'>
              <div>
                <PrimaryButton
                  text='Book'
                  link='https://klinikstraarup.app4.geckobooking.dk/site/booking.php?show=new_booking&icCode=0aad36965f0f2ec512837c390542ebc2b8929&bId=8929&PHPSESSID=91de8387fb2e35d7bdb8891fa2fba8aa&aDIfH=1&dTpl=1'
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
