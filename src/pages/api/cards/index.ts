import { DocumentType } from "@typegoose/typegoose"
import { LeanDocument } from "mongoose"
import { NextApiHandler } from "next"
import { getSession } from "next-auth/client"
import mongooseConnect from "../../../middlewares/mongooseConnect"
import CardModel, { CardC } from "../../../models/CardModel"
import UserModel from "../../../models/UserModel"

interface CreateCardRequestBody {
  type: string
  balance: number
  name: string
  issuer: string
}

interface CreateCardProper extends CreateCardRequestBody {
  userId: string
}
interface CreateCardResponse extends CreateCardRequestBody {
  id: string
}

const getCards = async (
  userId: string
): Promise<LeanDocument<DocumentType<CardC>>[]> => {
  const cards = await CardModel.find({ userId }).lean()
  return cards
}

const createCard = async ({
  userId,
  type,
  balance,
  name,
  issuer,
}: CreateCardProper): Promise<CreateCardResponse> => {
  const newCard = new CardModel()
  newCard.type = type
  newCard.balance = balance
  newCard.name = name
  newCard.issuer = issuer
  newCard.userId = userId
  newCard.transactions = []
  const savedCard = await newCard.save()

  return {
    id: savedCard.id,
    type,
    balance,
    name,
    issuer,
  }
}

const CardApiHandler: NextApiHandler = async (req, res): Promise<void> => {
  const session = await getSession({ req })
  const user = await UserModel.findOne({ email: session.user.email }).lean()

  switch (req.method) {
    case "GET": {
      return res.json(await getCards(user.id))
    }
    case "POST": {
      const data = req.body as CreateCardRequestBody
      return res.json(await createCard({ ...data, userId: user.id }))
    }
    default: {
      throw Error("Method not supported.")
    }
  }
}

export default mongooseConnect(CardApiHandler)
