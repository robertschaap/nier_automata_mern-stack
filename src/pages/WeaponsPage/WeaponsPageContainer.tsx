import React from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Main } from 'components/Main';
import { MenuList } from 'components/MenuList';
import { StatusPanel } from 'components/StatusPanel';

const items = [
  { label: 'Weapons', info: '87%' },
  { label: 'Weapon Set 1' },
  { label: 'Weapon Set 2' },
];

export const WeaponsPageContainer: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header title="Weapons" />
      <Main spacing="space-between">
        <MenuList items={items} />
        <StatusPanel />
      </Main>
      <Footer text="Change equipped weapons" />
    </div>
  );
};
