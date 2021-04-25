import { Box, Text } from "@chakra-ui/react"
import React from "react"

const NoCard: React.FC = () => (
  <Box
    d="flex"
    w="inherit"
    h="inherit"
    alignItems="center"
    justifyContent="center"
    flexDir="column"
  >
    <Text fontSize="xs" color="white">
      No accounts was added yet.
    </Text>
    <Text fontSize="xs" color="white">
      Click (+) to create a new account.
    </Text>
  </Box>
)

export default NoCard
