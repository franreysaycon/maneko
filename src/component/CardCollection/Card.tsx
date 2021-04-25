import { Box, chakra, Text } from "@chakra-ui/react"
import React, { forwardRef } from "react"
import { Edit } from "react-feather"
import { CardT } from "./types"

const ISSUER_COLORS = {
  bpi_atm: "#B20001",
  bpi_cc: "#2B4162",
  bdo_atm: "#003375",
  ing_atm: "#ff6201",
  union_atm: "#f79300",
}

interface CardProps extends CardT {
  editCard: () => void
}

const ChakraEdit = chakra(Edit)

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ _id, type, balance, name, issuer, editCard }, ref) => (
    <Box
      d="flex"
      flexDir="column"
      p="3"
      flex="1 0 100%"
      h="170px"
      borderRadius="xl"
      bgColor={ISSUER_COLORS[issuer]}
      ref={ref}
    >
      <Box d="flex" justifyContent="space-between">
        <Box d="flex" textTransform="uppercase" fontSize="sm" color="white">
          {type}
        </Box>
        <ChakraEdit color="white" size={15} onClick={editCard} />
      </Box>
      <Box d="flex" h="100%" flexDir="column" justifyContent="center">
        {type === "credit card" && (
          <Text textTransform="uppercase" fontSize="sm" color="white">
            outstanding balance
          </Text>
        )}
        <Text color="white" fontSize="xl">{`PHP ${balance}`}</Text>
      </Box>
      <Box d="flex" textTransform="uppercase" justifyContent="space-between">
        <Text textTransform="uppercase" fontSize="sm" color="white">
          {name}
        </Text>
        <Text textTransform="uppercase" fontSize="sm" color="white">
          {issuer.split("_")[0]}
        </Text>
      </Box>
    </Box>
  )
)

Card.displayName = "Card"

export default Card
