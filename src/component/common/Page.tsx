import React from 'react'
import { Box } from '@chakra-ui/react'

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => (
  <Box d="flex" flexDir="column" minH="100vh" h="100vh" bgColor="purple.900">{children}</Box>
)

export default Page
