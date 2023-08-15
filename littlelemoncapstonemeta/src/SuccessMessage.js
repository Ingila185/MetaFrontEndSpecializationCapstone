import {Alert, Box, AlertIcon, CloseButton, AlertDescription, AlertTitle} from '@chakra-ui/react';

function SuccessMessage(){

return (
<Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
Success
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
Your Table has been reserved.   </AlertDescription>
</Alert>
)
}

export default SuccessMessage;