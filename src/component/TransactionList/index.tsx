import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { PlusCircle } from 'react-feather'
import useScroll from '../../hooks/useScroll'
import { TransactionT } from '../CardCollection/types'
import Transaction from './Transaction'
import TransactionCreateForm from './TransactionCreateForm'

interface TransactionListProps {
    transactions: TransactionT[];
    cardType: string;
    cardId: string;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, cardType, cardId }) => {
  const transForm = useDisclosure()
  const [scrolling, setScrolling] = useScroll()

  return (
        <Box d="flex" flexDir="column" h="100%" minH="md">
            <Box d="flex" justifyContent="space-between" alignItems="center" mb="2">
            <Text textTransform="uppercase" fontSize="sm" color="white">Card Transactions</Text>
                <PlusCircle color="white" size={20} onClick={transForm.onOpen} />
            </Box>
            <Box
                h="100%"
                d="flex"
                overflowY="scroll"
                flexDir="column"
                css={{
                  '> div': { marginBottom: '10px' },
                  '> div:last-child': { marginBottom: '0px' }
                }}
                onScroll={() => setScrolling(true)}
            >
                {
                    transactions.map(trans => <Transaction key={trans._id} {...trans} cardType={cardType} scrolling={scrolling} />)
                }
            </Box>
            <TransactionCreateForm cardId={cardId} type={cardType} isOpen={transForm.isOpen} onClose={transForm.onClose} />
        </Box>
  )
}

TransactionList.defaultProps = {
  transactions: []
}

export default TransactionList
