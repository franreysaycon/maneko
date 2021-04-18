import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import React from "react"
import theme from "../theme"
import "typeface-poppins"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme} resetCSS>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </ChakraProvider>
)

export default App
