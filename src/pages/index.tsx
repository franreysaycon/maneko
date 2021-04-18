import React from 'react';
import ManekoPage from '../component/ManekoPage';
import CardCollection from '../component/CardCollection';
import AuthGuard from '../component/AuthGuard';

const CARDS = [
  {
    id: '1',
    bgColor: 'red.100',
  },
  {
    id: '2',
    bgColor: 'green.100',
  },
  {
    id: '3',
    bgColor: 'blue.100',
  }
]

const HelloWorld: React.FC = () => (
  <AuthGuard>
    <ManekoPage>
      <CardCollection cards={CARDS} />
    </ManekoPage>
  </AuthGuard>
);

export default HelloWorld;
