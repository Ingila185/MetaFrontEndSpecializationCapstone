import './App.css';
import Header from './Header';
import Navbar from './Nav';
import Main from './Main';
import Footer from './Footer';
import { VStack, Flex } from '@chakra-ui/react';

function App() {
  return (

    <>
    <div className =  "bodyClass">
    <VStack>
  <Header />
  {/*<Navbar />*/}
  <Main />
  </VStack> 
  </div>
  <Footer />

    </>

  )
 
}

export default App;
