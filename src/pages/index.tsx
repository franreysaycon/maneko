import React from 'react';
import ManekoPage from '../component/ManekoPage';
import CardCollection from '../component/CardCollection';
import AuthGuard from '../component/AuthGuard';
import axios from 'axios';
import { CardT } from '../component/CardCollection/types';
import { useQuery } from 'react-query';
import { Spinner, Box } from '@chakra-ui/react';

const getCards = async (): Promise<CardT[]> => {
  const response =  await axios.get<CardT[]>('/api/cards')
  return response.data
}

const Homepage: React.FC = () => {

  const { isLoading, data } = useQuery('cards', getCards)

  return (
    <AuthGuard>
      <ManekoPage>
        { isLoading ? 
            <Box w="100%" h="100%" d="flex" alignItems="center" justifyContent="center">
              <Spinner color="white" />
            </Box>
          :
          <CardCollection cards={data} />
        }
      </ManekoPage>
    </AuthGuard>
  )
};

export default Homepage;
