import React, { useState } from "react"
import { Box, Button, Text } from "@chakra-ui/react"
import { useLongPress } from "use-long-press"
import { motion } from "framer-motion"
import { TransactionT } from "../CardCollection/types"

interface TransactionProps extends TransactionT {
  cardType: string
  deleteTransaction?: (id: string) => void
  scrolling: boolean
}

const TYPE_MAPPING = {
  atm: {
    neg: "withdrawal",
    pos: "deposity",
  },
  "credit card": {
    neg: "transaction",
    pos: "payment",
  },
}

const DeleteBox = motion(Box)
const TransactionContainer = motion(Box)

const COLOR_MAP = {
  neg: "red.500",
  pos: "green.500",
}

const Transaction: React.FC<TransactionProps> = ({
  _id,
  type,
  createdAt,
  name,
  value,
  deleteTransaction,
  scrolling,
  cardType,
}) => {
  const [openDelete, setOpenDelete] = useState(false)

  const bind = useLongPress(
    () => {
      if (!scrolling) {
        setOpenDelete(true)
      }
    },
    {
      threshold: 500,
    }
  )
  const deleteThis = () => {
    deleteTransaction(_id)
  }

  return (
    <TransactionContainer
      bgColor="white"
      pos="relative"
      borderRadius="15px"
      d="flex"
      flexDir="column"
      p="15px"
      h="fit-content"
      {...bind}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <Box d="flex" justifyContent="space-between">
        <Text fontSize="xs" textTransform="uppercase">
          {createdAt.split("T")[0]}
        </Text>
        <Text fontSize="xs" textTransform="uppercase">
          {TYPE_MAPPING[cardType][type]}
        </Text>
      </Box>
      <Box d="flex" justifyContent="space-between">
        <Text
          color={COLOR_MAP[type]}
          textTransform="uppercase"
          fontWeight="bold"
        >
          {name}
        </Text>
        <Text
          color={COLOR_MAP[type]}
          fontSize="lg"
          fontWeight="bold"
          textTransform="uppercase"
        >{`(${type === "neg" ? "-" : "+"}) php ${value}`}</Text>
      </Box>
      {openDelete && (
        <DeleteBox
          borderRadius="15px"
          left="0"
          bgColor="rgba(0, 0, 0, 0.6)"
          pos="absolute"
          zIndex={1}
          top="0"
          w="100%"
          h="100%"
          d="flex"
          alignItems="center"
          justifyContent="space-evenly"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeIn",
            duration: 0.2,
          }}
        >
          <Button
            colorScheme="red"
            bgColor="red.500"
            onClick={deleteThis}
            color="white"
          >
            Delete
          </Button>
          <Button
            colorScheme="ghost"
            outline="0"
            onClick={() => setOpenDelete(false)}
          >
            Cancel
          </Button>
        </DeleteBox>
      )}
    </TransactionContainer>
  )
}

export default Transaction
