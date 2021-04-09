import React from 'react'
import { signIn } from 'next-auth/client'
import { GoogleLoginButton } from 'react-social-login-buttons'

const LoginPage: React.FC = () => (
  <GoogleLoginButton onClick={() => signIn('google', { callbackUrl: process.env.NEXT_PUBLIC_NEXTAUTH_URL })} />
)

export default LoginPage
