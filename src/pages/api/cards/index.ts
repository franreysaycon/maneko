import { NextApiHandler } from "next"
import { getSession } from "next-auth/client"
import mongooseConnect from "../../../middlewares/mongooseConnect"
import CardModel from "../../../models/CardModel"
import UserModel from "../../../models/UserModel"

const CardApiHandler: NextApiHandler = async (req, res): Promise<void> => {
    const session = await getSession({ req })
    const user = await UserModel.findOne({ email: session.user.email }).lean()
    const cards = await CardModel.find({ userId: user._id }).lean()
    res.json(cards)
}

export default mongooseConnect(CardApiHandler)
