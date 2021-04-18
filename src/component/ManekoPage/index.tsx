import { Box } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"
import React, { useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"

interface AuthPageProps {
  children: React.ReactNode
}

const AuthPage: React.FC<AuthPageProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Box w="100vw" minH="100vh" bgColor="purple.900" p="5">
        <Header onSidebarOpen={() => setSidebarOpen(true)} />
        <Box w="100%" p="3" overflowY="scroll" overflowX="hidden">
          {children}
        </Box>
      </Box>
      <AnimatePresence>
        {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
      </AnimatePresence>
    </>
  )
}

export default AuthPage
