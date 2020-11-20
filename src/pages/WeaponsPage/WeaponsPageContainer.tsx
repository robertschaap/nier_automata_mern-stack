import React from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

export const WeaponsPageContainer: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header title="Weapons" />
      <div>WeaponsPage</div>
      <Footer text="Change equipped weapons" />
    </div>
  );
};