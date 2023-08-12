import BookTable from './BookTable';
import {  Flex } from '@chakra-ui/react';


function Main ()
{
    return (


        <Flex flex = "1" flexDirection='column' >
        <main>
            <BookTable />
        </main>
        </Flex>
    ) 
}

export default Main;
