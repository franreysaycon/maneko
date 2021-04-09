import React from 'react'
import { Box } from '@chakra-ui/react'

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => (
  <Box w="100vw" minH="100vh" h="100vh" padding="1" bgColor="purple.900">{children}</Box>
)

export default Page
