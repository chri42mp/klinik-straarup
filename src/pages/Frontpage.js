import React from 'react';
import Navigation from '../components/Navigation';
import Switch from '../components/Switch';

export default function Frontpage() {
  return (
    <>
      <Navigation />
      <h1>Frontpage</h1>
      <Switch isDisabled={false} />
    </>
  );
}
