import { Heading } from '@chakra-ui/react';
import Pages from './components/Pages';
import { VStack, IconButton, useColorMode, Link, HStack, StackDivider } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from './GlobalState'

function App() {



  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <DataProvider>
      <Router>
        <VStack p={4}>
          <HStack divider={<StackDivider />}>
            <Link alignSelf='flex-start' href="/">Home</Link>
            <Link alignSelf='flex-start' href="/team">My Team</Link>
          </HStack>
          <IconButton
            icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
            isRound='true'
            size='lg'
            alignSelf='flex-end'
            onClick={toggleColorMode}
          />
          <Heading
            mb='8'
            fontWeight='extrabold'
            size='2xl'
            bgGradient='linear(to-r, green.800, green.300, orange.500)'
            bgClip='text'
          >
            Pokemon Game
          </Heading>

          <Pages />

        </VStack>
      </Router>
    </DataProvider>
  );
}

export default App;
