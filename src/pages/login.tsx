import React from 'react'
import { signIn } from 'next-auth/client'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { Box, Text } from '@chakra-ui/react'

const LoginPage: React.FC = () => (
  <Box d="flex" h ="100%" alignItems="center" justifyContent="center" flexDir="column">
    <Text color="white" fontSize="6xl" m="0" lineHeight="0.9">maneko</Text>
    <Text color="white" fontSize="xl" mb="3">Track your accounts and budget.</Text>
    <GoogleLoginButton onClick={() => signIn('google', { callbackUrl: process.env.NEXT_PUBLIC_NEXTAUTH_URL })} style={{ width: '250px' }}/>
  </Box>
)

export default LoginPage
