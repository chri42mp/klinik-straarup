import React from 'react';
import Navigation from '../components/Navigation';
import Togglebuttons from '../components/Togglebutton';
import CustomFooter from '../components/CustomFooter';

export default function Frontpage() {
  return (
    <>
      <Navigation />
      <h1>Frontpage</h1>
      <Togglebuttons />
      <CustomFooter />
    </>
  );
}
