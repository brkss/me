import '../styles/globals.css'
import { Box, ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Header, Footer } from '../src/components/';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Box maxH={'100vh'} h={'100vh'}>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</Box>
		</ChakraProvider>
	)
}
