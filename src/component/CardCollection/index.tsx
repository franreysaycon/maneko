import { Box, Text, useDisclosure } from "@chakra-ui/react"
import { motion, useAnimation } from "framer-motion"
import React, { useLayoutEffect, useRef, useState } from "react"
import { PlusCircle } from "react-feather"
import TransactionList from "../TransactionList"
import Card from "./Card"
import CardForm from "./CardForm"
import { CardT } from "./types"

interface CardCollectionProps {
  cards: CardT[]
}

const CARD_MARGIN_PX = 15
const MotionBox = motion(Box)

const swipePower = (offset: number, absDistance: number): number => {
  return (offset / absDistance) * 100
}

const createPosition = (index: number, width: number, length: number): number =>
  -1 * width * (index + 1) -
  CARD_MARGIN_PX * (index - 1) +
  (index === length - 2 ? CARD_MARGIN_PX * 2 : 0)

const CardCollection: React.FC<CardCollectionProps> = ({ cards }) => {
  const controls = useAnimation()
  const [curIndex, setCurIndex] = useState<number>(0)
  const [editCardId, setEditCardId] = useState<string>("")
  const cardForm = useDisclosure()
  const cardRef = useRef<HTMLDivElement>()
  const positions = useRef<number[]>([0])

  const openEdit = (id) => {
    setEditCardId(id)
    cardForm.onOpen()
  }

  const closeForm = () => {
    if (editCardId) {
      setEditCardId("")
    }
    cardForm.onClose()
  }

  const handleDragEnd = async (_, { offset }) => {
    const power = swipePower(offset.x, 300)
    if (power > 60 && curIndex - 1 !== -1) {
      await controls.start({
        x: positions.current[curIndex - 1],
      })
      setCurIndex((s) => s - 1)
    } else if (power < -60 && curIndex + 1 < cards.length) {
      await controls.start({
        x: positions.current[curIndex + 1],
      })
      setCurIndex((s) => s + 1)
    }
  }

  useLayoutEffect(() => {
    for (let i = 0; i < cards.length; i++) {
      positions.current.push(
        createPosition(i, cardRef.current.offsetWidth, cards.length)
      )
    }
  }, [cards.length])

  return (
    <Box d="flex" flexDir="column" maxH="100%" h="100%">
      <Box d="flex" justifyContent="space-between" alignItems="center" mb="2">
        <Text textTransform="uppercase" fontSize="sm" color="white">
          Your Accounts
        </Text>
        <PlusCircle color="white" size={20} onClick={cardForm.onOpen} />
      </Box>
      <Box w="100%" h="170px" overflow="hidden" pos="relative" mb="2">
        <MotionBox
          d="flex"
          pos="relative"
          h="170px"
          drag="x"
          dragDirectionLock
          dragConstraints={{ left: 0, right: 0 }}
          dragMomentum={false}
          animate={controls}
          transition={{
            x: { type: "spring", stiffness: 600, damping: 100 },
          }}
          onDragEnd={handleDragEnd}
          layout
          css={{
            ">div": {
              marginRight: CARD_MARGIN_PX,
            },
            ">div:last-child": {
              marginRight: 0,
            },
          }}
        >
          {cards.map((card) => (
            <Card key={card._id} {...card} editCard={openEdit} ref={cardRef} />
          ))}
        </MotionBox>
      </Box>
      <TransactionList
        transactions={cards[curIndex].transactions}
        cardId={cards[curIndex]._id}
        cardType={cards[curIndex].type}
      />
      <CardForm
        isOpen={cardForm.isOpen}
        onClose={closeForm}
        editCard={
          editCardId ? cards.find((card) => card._id === editCardId) : null
        }
      />
    </Box>
  )
}

CardCollection.defaultProps = {
  cards: [],
}

export default CardCollection
