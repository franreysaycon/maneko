import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { CardT } from './types'

const ISSUER_COLORS = {
  'bpi_atm': '#B20001',
  'bpi_cc': '#2B4162',
  'bdo_atm': '#003375',
  'ing_atm': '#ff6201',
}

const Card: React.FC<CardT> = ({ type, balance, name, issuer }) => (
  <Box d="flex" flexDir="column" p="3" flex="1 0 100%" maxWidth="280px" h="170px" borderRadius="xl" bgColor={ISSUER_COLORS[issuer]}>
    <Box d="flex" textTransform="uppercase" fontSize="sm" color="white">{type}</Box>
    <Box d="flex" h="100%" flexDir="column" justifyContent="center">
      {type === 'credit card' && <Text textTransform="uppercase" fontSize="sm" color="white">outstanding balance</Text> }
      <Text color="white" fontSize="xl">{`PHP ${balance}`}</Text>
    </Box>
    <Box d="flex" textTransform="uppercase" justifyContent="space-between">
      <Text textTransform="uppercase" fontSize="sm" color="white">{name}</Text>
      <Text textTransform="uppercase" fontSize="sm" color="white">{issuer.split('_')[0]}</Text>
    </Box>
  </Box>
)

export default Card
