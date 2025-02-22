import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
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

export default appWithTranslation(MyApp);