import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import React from 'react'
import Page from '../component/common/Page'
import theme from '../theme'
import 'typeface-poppins'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme} resetCSS>
    <Page>
      <Component {...pageProps} />
    </Page>
  </ChakraProvider>
)

export default App
