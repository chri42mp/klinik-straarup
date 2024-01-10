import './TrustpilotBanner.scss';
import React, { useState, useEffect } from 'react';
import TrustpilotCard from './TrustpilotCard';
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon';
import ArrowRightIcon from '../assets/icons/ArrowLeftIcon';
import LongArrowRightIcon from '../assets/icons/LongArrowRightIcon';
import { Link } from 'react-router-dom';

const TrustpilotBanner = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  // Next/previous controls
  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => prevIndex + n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName('mySlides');

    if (n > slides.length) {
      setSlideIndex(1);
      return;
    }
    if (n < 1) {
      setSlideIndex(slides.length);
      return;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[n - 1].style.display = 'block';
  };

  return (
    <div className='max-content'>
      <div className='Trustpilot-banner'>
        <div className='Trustpilot-banner-title'>
          <h1>Læs hvad vores kunder synes om os</h1>
        </div>

        <div className='slideshow-container'>
          {/* <!-- Full-width images with number and caption text --> */}
          <div className='mySlides fade'>
            <TrustpilotCard
              headline='Altid i trygge hænder hos Maria!'
              text='Vanvittig flot og renlig klinik! Ejer Maria er virkelig sød, 
              imødekommende og meget snaksaglig! Jeg føler mig tryg og i gode hænder, 
              når jeg kommer hos hende! Kan varmt anbefales!'
              name='Stine'
              date='19.09.2023'
            />
          </div>

          <div className='mySlides fade'>
            <TrustpilotCard
              headline='Maria er enormt dygtig'
              text='Maria er enormt dygtig, professionel og tillidsvækkende. 
              Jeg føler mig altid tryg, når jeg er i hendes hænder'
              name='Therese'
              date='22.09.2023'
            />
          </div>

          <div className='mySlides fade'>
            <TrustpilotCard
              headline='Virkelig dygtig til sit arbejde'
              text='Virkelig dygtig til sit arbejde.
              Hyggeligt sted og sød og professionel behandling.'
              name='Cindy'
              date='01.09.2023'
            />
          </div>

          {/* <!-- Next and previous buttons --> */}
          <a className='prev' onClick={() => plusSlides(-1)}>
            <ArrowRightIcon width='50px' height='30px' />
          </a>
          <a className='next' onClick={() => plusSlides(1)}>
            <ArrowLeftIcon width='50px' height='30px' />
          </a>
        </div>
        <div>
          <Link
            className='trustpilot-bottom'
            to='https://dk.trustpilot.com/review/klinikstraarup.dk'
            target='_blank'
            rel='noopener noreferrer'
          >
            <p>Se alle vores anmeldelser</p>
            <LongArrowRightIcon width='30px' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrustpilotBanner;
