import React from 'react';
import AuthPage from '../component/AuthPage';
import CardCollection from '../component/CardCollection';
import AuthGuard from '../component/common/AuthGuard';

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
    <AuthPage>
      <CardCollection cards={CARDS} />
    </AuthPage>
  </AuthGuard>
);

export default HelloWorld;
