import {Container, Image, Divider, Stack, Link, Flex } from '@chakra-ui/react'

function Navbar()
{
    return (
<Flex bg = "#8C9894"  flexDirection={'column'} justifyContent='space-evenly' >

    <Stack direction="row" spacing={20}> 
    <Flex alignItems='flex-end' maxHeight='10%' maxWidth='10%'  >
    <Image src = "header.png"  />
    </Flex>

    <Link width = "auto"  href = "#">Home</Link>
    <Link width = "auto"  href = "#">About</Link>
    <Link width = "auto"  href = "#">Menu</Link>
    <Link width = "auto"  href = "#">Reservations</Link>
    <Link width = "auto"  href = "#">Order</Link>
    <Link width = "auto"  href = "#">Login</Link>
     
    </Stack>

   <Divider></Divider>
    </Flex>
   
   
   )
}

export default Navbar;
