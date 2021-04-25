import React from "react"
import ManekoPage from "../component/ManekoPage"
import CardCollection from "../component/CardCollection"
import AuthGuard from "../component/AuthGuard"
import axios from "axios"
import { CardT } from "../component/CardCollection/types"
import { useQuery } from "react-query"
import { getSession } from "next-auth/client"

const getCards = async (): Promise<CardT[]> => {
  const response = await axios.get<CardT[]>("/api/cards")
  return response.data
}

const Homepage: React.FC = () => {
  const { isLoading, data } = useQuery("cards", getCards)

  return (
    <AuthGuard>
      <ManekoPage>
        <CardCollection cards={data} loading={isLoading} />
      </ManekoPage>
    </AuthGuard>
  )
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  return { props: { session } }
}

export default Homepage
