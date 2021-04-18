import React, { useEffect } from 'react'
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
  Input,
  Button,
  FormHelperText,
  UseDisclosureProps
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'

interface CreateTransactionRequestBody {
    name: string;
    value: number;
    type: string;
}

interface TransactionCreateFormProps {
    type: string;
    cardId: string;
}

interface CreateTransactionResponse {
    success: boolean;
}

interface CreateTransactionData {
    cardId: string;
    data: CreateTransactionRequestBody;
}

const createTransaction = async ({ cardId, data }: CreateTransactionData) : Promise<CreateTransactionResponse> => {
  const response = await axios.post<CreateTransactionResponse>(`/api/cards/${cardId}/transactions`, data)
  return response.data
}

const TransactionCreateForm: React.FC<UseDisclosureProps & TransactionCreateFormProps> = ({ isOpen, onClose, type, cardId }) => {
  const {
    register, handleSubmit, formState: { errors }, reset
  } = useForm<CreateTransactionRequestBody>()
  const queryClient = useQueryClient()
  const transMutation = useMutation(createTransaction, {
    onSuccess: () => {
      queryClient.invalidateQueries('cards')
    }
  })

  const handleClose = () => {
    reset()
    onClose()
  }

  useEffect(() => {
    if (transMutation.isSuccess) {
      handleClose()
    }
  }, [transMutation.isSuccess])

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent mt="25px" mb="0px">
        <ModalHeader>Create Transaction</ModalHeader>
        <ModalCloseButton onClick={handleClose} />
        <ModalBody>
          <FormControl mb="15px">
            <FormLabel textTransform="uppercase">Name</FormLabel>
            <Input {...register('name', { required: true, maxLength: 100 })} />
            {errors.name && <FormHelperText color="red.300">{ errors.name }</FormHelperText> }
          </FormControl>
          <FormControl mb="15px">
            <FormLabel textTransform="uppercase">Value</FormLabel>
            <Input {...register('value', { required: true, min: 1 })} />
            {errors.value && <FormHelperText color="red.300">{ errors.value }</FormHelperText> }
          </FormControl>
          <FormControl id="schedule" mb="15px">
            <FormLabel textTransform="uppercase">What kind?</FormLabel>
            <Select {...register('type')}>
              <option value="neg">{ type === 'atm' ? 'WITHDRAWAL' : 'COST' }</option>
              <option value="pos">{ type === 'atm' ? 'DEPOSIT' : 'PAYMENT' }</option>
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            isLoading={transMutation.isLoading}
            bgColor="red.500"
            mr={3}
            onClick={handleSubmit(async data => await transMutation.mutate({ cardId, data }))}
            color="white"
          >Create</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default TransactionCreateForm
