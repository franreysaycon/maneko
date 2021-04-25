import { Box } from "@chakra-ui/react"
import { AnimatePresence } from "framer-motion"
import React, { useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"

interface MakePageProps {
  children: React.ReactNode
}

const MakePage: React.FC<MakePageProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Box w="100vw" h="100%" overflowY="hidden" bgColor="purple.900">
        <Header onSidebarOpen={() => setSidebarOpen(true)} />
        <Box w="100%" h="100%" maxH="100%" overflowY="hidden" p="6" pt="0">
          {children}
        </Box>
      </Box>
      <AnimatePresence>
        {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
      </AnimatePresence>
    </>
  )
}

export default MakePage
