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

interface CreateCardRequestBody {
  type: string
  balance: number
  name: string
  issuer: string
}

interface CreateCardResponse extends CreateCardRequestBody {
  id: string
}

const postCard = async (
  data: CreateCardRequestBody
): Promise<CreateCardResponse> => {
  return await axios.post<CreateCardRequestBody, CreateCardResponse>(
    "/api/cards",
    data
  )
}

const CardForm: React.FC<UseDisclosureProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreateCardRequestBody>()
  const queryClient = useQueryClient()
  const cardMutation = useMutation(postCard, {
    onSuccess: () => {
      queryClient.invalidateQueries("cards")
    },
  })

  useEffect(() => {
    if (cardMutation.isSuccess) {
      onClose()
    }
  }, [cardMutation.isSuccess])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt="25px" mb="0px">
        <ModalHeader>Create Account</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>
          <FormControl mb="3">
            <FormLabel textTransform="uppercase">Transaction Type</FormLabel>
            <Select {...register("type")}>
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
            />
            {errors.name && (
              <FormHelperText color="red.300">{errors.name}</FormHelperText>
            )}
          </FormControl>
          <FormControl mb="3">
            <FormLabel textTransform="uppercase">
              {watch("type") === "credit card"
                ? "Outstanding Balance"
                : "Current Balance"}
            </FormLabel>
            <Input type="number" {...register("balance", { required: true })} />
            {errors.name && (
              <FormHelperText color="red.300">{errors.name}</FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <FormLabel textTransform="uppercase">Issuer</FormLabel>
            <Select {...register("issuer")}>
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
            isLoading={cardMutation.isLoading}
            bgColor="blue.500"
            mr={3}
            onClick={handleSubmit(
              async (data) => await cardMutation.mutate(data)
            )}
            color="white"
            textTransform="uppercase"
          >
            Create Card
          </Button>
          <Button
            disabled={cardMutation.isLoading}
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
