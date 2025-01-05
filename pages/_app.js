// pages/_app.js
import '../styles/globals.css';
import CustomCursor from '../components/CustomCursor';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <CustomCursor />
    </ChakraProvider>
  );
}

export default MyApp;