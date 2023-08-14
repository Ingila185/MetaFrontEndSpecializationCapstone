import React, { useState, Component} from 'react';

const availableTimes = ['17:00','18:00','19:00','20:00','21:00','22:00']
function getTimeSlot()
{
    return (
        availableTimes.map((slot)=>
        (
            <option>{slot}</option>

        ))
    )
}


function BookForm()
{
    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occassion, setOccassion] = useState('');


function handleOnSubmit(e)
{
    e.preventDefault();

    console.log("Submitted" + resTime);
}



return (



    <div>
    <form onSubmit={handleOnSubmit}>


   <label htmlFor="res-date">Choose date</label>
   <input type="date" id="res-date" value = {resDate} onChange={(e)=>{setResDate(e.target.value)}} />
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time" value = {resTime} onChange={(e)=>{setResTime(e.target.value)}}>
   {
   availableTimes.map((slot) => (
    <option>{slot}</option>
   )
   )  
   };

     
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" value = {guests} onChange={(e)=>{setGuests(e.target.value)}} />
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion" value = {occassion} onChange={(e)=>{setOccassion(e.target.value)}}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation" />
</form>
</div>
)
}
export default BookForm