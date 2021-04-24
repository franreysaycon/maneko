import { NextApiHandler } from "next"
import { getSession } from "next-auth/client"
import mongooseConnect from "../../../../middlewares/mongooseConnect"
import CardModel from "../../../../models/CardModel"
import UserModel from "../../../../models/UserModel"

interface EditCardRequestBody {
  type: string
  balance: number
  name: string
  issuer: string
}

interface EditCardResponse extends EditCardRequestBody {
  cardId: string
  userId: string
}

const editCard = async ({
  cardId,
  userId,
  type,
  balance,
  name,
  issuer,
}: EditCardResponse): Promise<EditCardResponse> => {
  const card = await CardModel.findById(cardId)
  card.type = type
  card.balance = balance
  card.name = name
  card.issuer = issuer
  card.userId = userId
  card.transactions = []
  await card.save()

  return {
    cardId,
    userId,
    type,
    balance,
    name,
    issuer,
  }
}

const CardSpecHandler: NextApiHandler = async (req, res): Promise<void> => {
  const session = await getSession({ req })
  const user = await UserModel.findOne({ email: session.user.email }).lean()
  const cardId = req.query.id as string

  switch (req.method) {
    case "PUT": {
      const data = req.body as EditCardRequestBody
      const response = await editCard({ ...data, cardId, userId: user.id })
      return res.json(response)
    }
    default: {
      throw Error("Method not supported.")
    }
  }
}

export default mongooseConnect(CardSpecHandler)
