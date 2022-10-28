import { ChakraProvider } from '@chakra-ui/react';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <ChakraProvider>
      <SignIn />
    </ChakraProvider>
  );
}

export default App;
