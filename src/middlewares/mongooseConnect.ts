import mongoose from 'mongoose'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const mongooseConnect = (handler: NextApiHandler): NextApiHandler => async (req: NextApiRequest, res: NextApiResponse) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res)
  }
  await mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true
  })
  return handler(req, res)
}

export default mongooseConnect
