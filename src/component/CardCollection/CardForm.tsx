import React, { useEffect } from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Select,
  Button,
  FormHelperText,
  Input,
  UseDisclosureProps,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query"
import axios from "axios"
import { CardT } from "./types"

interface CreateCardRequestBody {
  type: string
  balance: number
  name: string
  issuer: string
}

interface EditCardRequestBody {
  cardData: CreateCardRequestBody
  id: string
}
interface CreateCardResponse extends CreateCardRequestBody {
  id: string
}

interface EditCardResponse extends CreateCardRequestBody {
  cardId: string
}

interface CardFormProps extends UseDisclosureProps {
  editCard: CardT | null
}

const postCard = async (
  data: CreateCardRequestBody
): Promise<CreateCardResponse> => {
  return await axios.post<CreateCardRequestBody, CreateCardResponse>(
    "/api/cards",
    data
  )
}

const putCard = async (
  data: EditCardRequestBody
): Promise<EditCardResponse> => {
  return await axios.put<CreateCardRequestBody, EditCardResponse>(
    `/api/cards/${data.id}`,
    data.cardData
  )
}

const CardForm: React.FC<CardFormProps> = ({ isOpen, onClose, editCard }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreateCardRequestBody>()
  const queryClient = useQueryClient()
  const createCardMutation = useMutation(postCard, {
    onSuccess: () => {
      queryClient.invalidateQueries("cards")
    },
  })
  const editCardMutation = useMutation(putCard, {
    onSuccess: () => {
      queryClient.invalidateQueries("cards")
    },
  })

  useEffect(() => {
    if (createCardMutation.isSuccess || editCardMutation.isSuccess) {
      onClose()
    }
  }, [createCardMutation.isSuccess, editCardMutation.isSuccess])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt="25px" mb="0px">
        <ModalHeader>
          {editCard ? "Edit Account" : "Create Account"}
        </ModalHeader>
        <ModalCloseButton onClick={onClose} outline="0" />
        <ModalBody>
          <FormControl mb="3">
            <FormLabel textTransform="uppercase">Transaction Type</FormLabel>
            <Select
              {...register("type")}
              defaultValue={editCard && editCard.type}
            >
              <option value="atm">ATM</option>
              <option value="credit card">CREDIT CARD</option>
            </Select>
          </FormControl>
          <FormControl mb="3">
            <FormLabel textTransform="uppercase">
              Name of Card/Account
            </FormLabel>
            <Input
              type="text"
              {...register("name", { required: true, maxLength: 100 })}
              defaultValue={editCard && editCard.name}
            />
            {errors.name && (
              <FormHelperText color="red.300">{errors.name}</FormHelperText>
            )}
          </FormControl>
          <FormControl mb="3">
            <FormLabel textTransform="uppercase">
              {watch("type") === "credit card" ||
              editCard.type === "credit card"
                ? "Outstanding Balance"
                : "Current Balance"}
            </FormLabel>
            <Input
              type="number"
              {...register("balance", { required: true })}
              defaultValue={editCard && editCard.balance}
            />
            {errors.name && (
              <FormHelperText color="red.300">{errors.name}</FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <FormLabel textTransform="uppercase">Issuer</FormLabel>
            <Select
              {...register("issuer")}
              defaultValue={editCard && editCard.issuer}
            >
              <option value="bdo_atm">BDO SAVINGS ACCOUNT</option>
              <option value="bpi_cc">BPI CREDIT CARD</option>
              <option value="bpi_atm">BPI SAVING ACCOUNT</option>
              <option value="ing_atm">ING SAVINGS ACCOUNT</option>
              <option value="union_atm">UNIONBANK SAVINGS ACCOUNT</option>
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            isLoading={createCardMutation.isLoading}
            bgColor="blue.500"
            mr={3}
            onClick={handleSubmit(async (data) => {
              return editCard
                ? await editCardMutation.mutate({
                    cardData: data,
                    id: editCard._id,
                  })
                : await createCardMutation.mutate(data)
            })}
            color="white"
            textTransform="uppercase"
          >
            {editCard ? "Edit Card" : "Create Card"}
          </Button>
          <Button
            disabled={createCardMutation.isLoading}
            bgColor="red.500"
            mr={3}
            onClick={onClose}
            color="white"
            textTransform="uppercase"
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CardForm
