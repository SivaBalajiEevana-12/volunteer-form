import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import VolunteerForm from './VolunteerForm';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <VolunteerForm/>
    </ChakraProvider>
  );
}

export default App;
