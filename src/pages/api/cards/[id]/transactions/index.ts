import { NextApiHandler } from "next"
import { getSession } from "next-auth/client"
import mongooseConnect from "../../../../../middlewares/mongooseConnect"
import CardModel, { TransactionC } from "../../../../../models/CardModel"
import UserModel from "../../../../../models/UserModel"

interface CreateTransactionRequestBody {
  name: string
  value: number
  type: string
}

interface CreateTransactionParams {
  cardId: string
  userId: string
  data: CreateTransactionRequestBody
}

type createTransactionFn = (data: CreateTransactionParams) => Promise<void>

const createTransaction: createTransactionFn = async ({
  cardId,
  userId,
  data,
}) => {
  const card = await CardModel.findOne({ _id: cardId, userId })
  card.transactions = [...card.transactions, data as TransactionC]
  if (data.type === "neg") {
    card.balance -= data.value
  } else {
    card.balance += data.value
  }
  await card.save()
}

const CardTransactionHandler: NextApiHandler = async (
  req,
  res
): Promise<void> => {
  const session = await getSession({ req })
  const user = await UserModel.findOne({ email: session.user.email }).lean()
  const cardId = req.query.id as string

  switch (req.method) {
    case "POST": {
      const data = req.body as CreateTransactionRequestBody
      await createTransaction({ data, userId: user.id, cardId })
      return res.json({ success: true })
    }
    default: {
      throw Error("Method not supported.")
    }
  }
}

export default mongooseConnect(CardTransactionHandler)
