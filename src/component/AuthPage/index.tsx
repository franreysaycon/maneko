import { Box } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Page from '../common/Page'
import Header from './Header'
import Sidebar from './Sidebar'

interface AuthPageProps {
  children: React.ReactNode;
}

const AuthPage: React.FC<AuthPageProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Page>
      <Header onSidebarOpen={() => setSidebarOpen(true)} />
      <Box w="100%" p="3" overflowY="scroll">
        { children }
      </Box>
      <AnimatePresence>
        { sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
      </AnimatePresence>
    </Page>
  )
}

export default AuthPage
