import React from 'react';
import AuthPage from '../component/AuthPage';
import AuthGuard from '../component/common/AuthGuard';

const HelloWorld: React.FC = () => (
  <AuthGuard>
    <AuthPage>
      Hello World
    </AuthPage>
  </AuthGuard>
);

export default HelloWorld;
