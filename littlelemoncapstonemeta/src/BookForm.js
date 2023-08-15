import React, { useState, Component  , useEffect} from 'react';
import {
    FormControl,Input, Button,
    FormLabel,Select,
    FormErrorMessage,
    FormHelperText,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react';



  import SuccessMessage from './SuccessMessage';

const availableTimes = ['17:00','18:00','19:00','20:00','21:00','22:00']




function BookForm()
{
    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('');
    const [guests, setGuests] = useState('1');
    const [occassion, setOccassion] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);


function handleOnSubmit(e)
{
    setIsSuccess(true);
}

return (



    <div>
    <form >
   <FormControl isRequired>
   <FormLabel htmlFor="res-date">Choose date</FormLabel>
   <Input data-testid = "res-date" type="date" id="res-date" value = {resDate} onChange={(e)=>{setResDate(e.target.value)}} placeholder='Pick a date' />
   </FormControl>
   
   <FormControl isRequired>
   <FormLabel htmlFor="res-time">Choose time</FormLabel>
   <Select id="res-time" value = {resTime} onChange={(e)=>{setResTime(e.target.value)}}>
   {
   availableTimes.map((slot) => (
    <option>{slot}</option>
   )
   )  
   };
   </Select>
   </FormControl>

<FormControl isRequired>
<FormLabel htmlFor="guests">Number of guests</FormLabel> 
<FormHelperText>Min. 1 Max. 10</FormHelperText>

   <NumberInput
   defaultValue={1} min={1} max={10}
 id="guests" value = {guests} onChange={(e)=>{setGuests(e)}} 
 >

<NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>


 </NumberInput>


</FormControl>

<FormControl isRequired>
   <FormLabel htmlFor="occasion">Occasion</FormLabel>
   <Select id="occasion" value = {occassion} onChange={(e)=>{setOccassion(e.target.value)}}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </Select>
</FormControl>

<FormControl>
<Button   colorScheme='blue' onClick={handleOnSubmit}  >Make Your reservation</Button>
</FormControl>


{(isSuccess) ? <SuccessMessage /> : <div></div>}
</form>
</div>
)

}
export default BookForm