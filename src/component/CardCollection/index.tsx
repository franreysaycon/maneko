import { Box } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import Card from './Card'
import { CardT } from './types'

interface CardCollectionProps {
  cards: CardT[];
}

const MotionBox = motion(Box)

const swipePower = (offset: number, absDistance: number): number => {
  return (offset / absDistance) * 100;
}

const CardCollection: React.FC<CardCollectionProps> = ({ cards }) => {
  const controls = useAnimation();
  const [curIndex, setCurIndex] = useState<number>(0)

  const handleDragEnd = async (_, { offset }) => {
    const power = swipePower(offset.x, 330);
    if (power > 60 && curIndex -1 !== -1) {
      await controls.start({
        x: -345*(curIndex-1),
      })
      setCurIndex(s => s - 1)
    } else if (power < -60 && curIndex + 1 < cards.length) {
      await controls.start({
        x: -345*(curIndex+1),
      })
      setCurIndex(s => s + 1)
    }
  };

  return (
    <Box d="flex" justifyContent="center">
      <Box
        w="330px"
        h="200px"
        overflow="hidden"
        pos="relative"
        transform="translateZ(0)"
      >
        <MotionBox
          display="flex"
          position="relative"
          height="200px"
          drag="x"
          dragDirectionLock
          dragConstraints={{ left: 0, right: 0 }}
          dragMomentum={false}
          animate={controls}
          transition={{
            x: { type: "spring", stiffness: 600, damping: 100},
          }}
          onDragEnd={handleDragEnd}
          layout
          css={{
            ">div": {
              marginRight: '15px'
            },
            ">div:last-child": {
              marginRight: '0px'
            }
          }}
        >
            { cards.map( card => <Card key={card.id} {...card} /> )}
        </MotionBox>
      </Box>
    </Box>
  )
}

CardCollection.defaultProps = {
  cards: []
}

export default CardCollection
