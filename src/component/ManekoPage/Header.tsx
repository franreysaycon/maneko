import { Box, chakra, Text } from "@chakra-ui/react"
import React from "react"
import { Menu } from "react-feather"

interface HeaderProps {
  onSidebarOpen: () => void
}

const ChakraMenu = chakra(Menu)

const Header: React.FC<HeaderProps> = ({ onSidebarOpen }) => (
  <Box display="flex" alignItems="center" mb="3" p="6" pb="0">
    <ChakraMenu color="white" size={35} onClick={onSidebarOpen} />
    <Text
      fontSize="3xl"
      color="white"
      marginLeft="35px"
      position="relative"
      top="-2px"
    >
      maneko
    </Text>
  </Box>
)

export default Header
