import React, { useEffect } from "react"
import { useSession } from "next-auth/client"
import { useRouter } from "next/router"
import { Box, Spinner } from "@chakra-ui/react"

interface AuthGuardProps {
  children: React.ReactNode
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const [session, loading] = useSession()
  const router = useRouter()

  const isLoggedIn = session && session.user

  const renderSessionLoad = () => (
    <Box d="flex" flex="1" h="100%" alignItems="center" justifyContent="center">
      {loading && <Spinner color="white" size="xl" />}
    </Box>
  )

  useEffect(() => {
    if (!isLoggedIn && !loading) {
      router.push("/login")
    }
  }, [isLoggedIn, loading, router])

  return (
    <Box bgColor="purple.900" d="flex" minH="100vh" h="100vh" maxH="100vh">
      {isLoggedIn ? children : renderSessionLoad()}
    </Box>
  )
}

export default AuthGuard
