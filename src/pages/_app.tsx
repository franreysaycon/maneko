import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import React from "react"
import theme from "../theme"
import { QueryClient, QueryClientProvider } from "react-query"
import { Provider } from "next-auth/client"
import "typeface-poppins"

const queryClient = new QueryClient()

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme} resetCSS>
    <QueryClientProvider client={queryClient}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  </ChakraProvider>
)

export default App
