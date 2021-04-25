import { useDisclosure } from "@chakra-ui/hooks"
import { Box, Text } from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import { PlusCircle } from "react-feather"
import { useMutation, useQueryClient } from "react-query"
import useScroll from "../../hooks/useScroll"
import { CardT, TransactionT } from "../CardCollection/types"
import Transaction from "./Transaction"
import TransactionCreateForm from "./TransactionCreateForm"
import TransactionSkeleton from "./TransactionSkeleton"

interface TransactionListProps {
  transactions: TransactionT[]
  cardType: string
  cardId: string
  loading: boolean
}

interface DeleteTransactionParams {
  cardId: string
  transId: string
}

interface DeleteTransactionResponse {
  tid: string
}

const deleteTransaction = async (
  data: DeleteTransactionParams
): Promise<DeleteTransactionResponse> => {
  return await axios.delete<unknown, DeleteTransactionResponse>(
    `/api/cards/${data.cardId}/transactions/${data.transId}`
  )
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  cardType,
  cardId,
  loading,
}) => {
  const transForm = useDisclosure()
  const [scrolling, setScrolling] = useScroll()
  const queryClient = useQueryClient()
  const deleteTransMutation = useMutation<
    DeleteTransactionResponse,
    unknown,
    DeleteTransactionParams
  >(deleteTransaction, {
    onMutate: async (data) => {
      await queryClient.cancelQueries("cards")

      const currentCards = queryClient.getQueryData("cards")

      queryClient.setQueryData<CardT[]>("cards", (cards) => {
        const tempCards = [...cards]
        const cardIndex = tempCards.findIndex((card) => card._id === cardId)
        tempCards[cardIndex].transactions = transactions.filter(
          (trans) => trans._id !== data.transId
        )
        return tempCards
      })

      return { currentCards }
    },
    onError: (_error, _trans, context) => {
      // @ts-ignore
      queryClient.setQueryData("todos", context.currentCards)
    },
    onSettled: () => {
      queryClient.invalidateQueries("cards")
    },
  })

  const deleteTrans = (transId: string) => {
    deleteTransMutation.mutate({ cardId, transId })
  }

  return (
    <Box d="flex" flexDir="column">
      <Box d="flex" justifyContent="space-between" alignItems="center" mb="2">
        <Text textTransform="uppercase" fontSize="sm" color="white">
          Card Transactions
        </Text>
        {!loading && (
          <PlusCircle color="white" size={20} onClick={transForm.onOpen} />
        )}
      </Box>
      {loading ? (
        <TransactionSkeleton />
      ) : (
        <Box
          h="380px"
          d="flex"
          overflowY="scroll"
          flexDir="column"
          css={{
            "> div": { marginBottom: "10px" },
            "> div:last-child": { marginBottom: "0px" },
          }}
          onScroll={() => setScrolling(true)}
        >
          {transactions.map((trans) => (
            <Transaction
              key={trans._id}
              {...trans}
              cardType={cardType}
              scrolling={scrolling}
              deleteTransaction={deleteTrans}
            />
          ))}
        </Box>
      )}
      <TransactionCreateForm
        cardId={cardId}
        type={cardType}
        isOpen={transForm.isOpen}
        onClose={transForm.onClose}
      />
    </Box>
  )
}

TransactionList.defaultProps = {
  transactions: [],
}

export default TransactionList
