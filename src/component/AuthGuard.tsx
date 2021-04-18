import React from 'react'
import { useSession } from 'next-auth/client'

interface AuthGuardProps {
  children: React.ReactNode
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const [session] = useSession()

  if (!session) {
    return <></>
  }

  return <div>{children}</div>
}

export default AuthGuard
