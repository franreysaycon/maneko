import React from 'react';
import ManekoPage from '../component/ManekoPage';
import CardCollection from '../component/CardCollection';
import AuthGuard from '../component/AuthGuard';
import { CardT } from '../component/CardCollection/types';

const CARDS = [
  {
    id: '1',
    type: 'atm',
    balance: 10000,
    name: 'savings account',
    issuer: 'bpi_atm',
  },
  {
    id: '2',
    type: 'credit card',
    balance: 12000,
    name: 'xxxx-xxxx-5469',
    issuer: 'bpi_cc',
  },
  {
    id: '3',
    type: 'atm',
    balance: 150000,
    name: 'savings account',
    issuer: 'ing_atm',
  },
  {
    id: '4',
    type: 'atm',
    balance: 60000,
    name: 'payroll account',
    issuer: 'bdo_atm'
  },
  {
    id: '5',
    type: 'atm',
    balance: 60000,
    name: 'payroll account',
    issuer: 'bdo_atm'
  }
] as CardT[]

const HelloWorld: React.FC = () => (
  <AuthGuard>
    <ManekoPage>
      <CardCollection cards={CARDS} />
    </ManekoPage>
  </AuthGuard>
);

export default HelloWorld;
