import { NextApiHandler } from "next"
import { getSession } from "next-auth/client"
import mongooseConnect from "../../../../../middlewares/mongooseConnect"
import CardModel from "../../../../../models/CardModel"
import UserModel from "../../../../../models/UserModel"

interface DeleteTransactionParams {
  cardId: string
  userId: string
  transId: string
}

type deleteTransactionFn = (data: DeleteTransactionParams) => Promise<void>

const deleteTransaction: deleteTransactionFn = async ({
  cardId,
  userId,
  transId,
}) => {
  const card = await CardModel.findOne({ _id: cardId, userId })
  const dTransaction = card.transactions.find((ct) => `${ct._id}` === transId)
  card.transactions = card.transactions.filter((ct) => `${ct._id}` !== transId)
  if (dTransaction.type === "neg") {
    card.balance += dTransaction.value
  } else {
    card.balance -= dTransaction.value
  }

  await card.save()
}

const CardSpecTransactionHandler: NextApiHandler = async (
  req,
  res
): Promise<void> => {
  const session = await getSession({ req })
  const user = await UserModel.findOne({ email: session.user.email }).lean()
  const cardId = req.query.id as string
  const transId = req.query.tid as string

  switch (req.method) {
    case "DELETE": {
      await deleteTransaction({ userId: user.id, cardId, transId })
      return res.json({ tid: transId })
    }
    default: {
      throw Error("Method not supported.")
    }
  }
}

export default mongooseConnect(CardSpecTransactionHandler)
