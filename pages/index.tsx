import React from 'react';
import AuthGuard from '../component/common/AuthGuard';

const HelloWorld: React.FC = () => (
  <AuthGuard>Hello World</AuthGuard>
);

export default HelloWorld;
