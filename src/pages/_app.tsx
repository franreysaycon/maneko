import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import React from "react"
import theme from "../theme"
import { QueryClient, QueryClientProvider } from "react-query"
import { Provider } from "next-auth/client"
import Head from "next/head"
import "typeface-poppins"

const queryClient = new QueryClient()

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme} resetCSS>
    <QueryClientProvider client={queryClient}>
      <Provider session={pageProps.session}>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link href="/apple-touch-icon" rel="apple-touch-icon" />
          <link href="/manifest.json" rel="manifest" />
          <title>Maneko - Track Your PH Accounts</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  </ChakraProvider>
)

export default App
