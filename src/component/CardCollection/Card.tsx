import { Box } from '@chakra-ui/react'
import React from 'react'
import { CardT } from './types'

const Card: React.FC<CardT> = ({ bgColor }) => (
  <Box d="flex" flex="1 0 100%" h="200px" borderRadius="xl" bgColor={bgColor}>
    Card
  </Box>
)

export default Card
