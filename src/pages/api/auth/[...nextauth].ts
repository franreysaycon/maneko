import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  database: {
    type: "mongodb",
    url: process.env.DATABASE_URL,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferMaxEntries: 0,
  },
})
