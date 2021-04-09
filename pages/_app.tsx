import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import React from 'react'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
    <ChakraProvider resetCSS>
        <Component {...pageProps} />
    </ChakraProvider>
)

export default App
