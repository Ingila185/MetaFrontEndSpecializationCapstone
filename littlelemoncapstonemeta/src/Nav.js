import {Container, Image, Divider, Stack,  Flex, HStack } from '@chakra-ui/react'
import {Route, Routes, Link} from 'react-router-dom';
import BookPage from './BookPage';

function Navbar()
{
    return (

        <div>
<Flex bg = "#8C9894"  flexDirection={'column'} justifyContent='space-evenly' >

    <Stack direction="row" spacing={20}> 
    <Flex alignItems='flex-end' maxHeight='10%' maxWidth='10%'  >
    <Image src = "header.png"  />
    </Flex>

        <nav>
            <HStack spacing={20}>
    <Link   to = "/">Home</Link>   
    <Link  to = "/">About</Link>
    <Link  to = "/">Menu</Link>
    <Link   to = "/book">Reservations</Link>
    <Link   to = "/">Order Online</Link>
    <Link   to = "/">Login</Link>
    </HStack>
    </nav>
    </Stack>
   
   <Divider></Divider>

 
    </Flex>

<Routes>
<Route  path = "/book" element= {<BookPage />} />
</Routes>

</div>
   
   
   )
}

export default Navbar;
