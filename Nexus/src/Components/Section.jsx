// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// // import './App.css';

// const Section = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [selectedTickets, setSelectedTickets] = useState(0);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     // Implement logic to fetch available slots for the selected date if necessary
//   };

//   const handleSlotClick = (slot) => {
//     setSelectedSlot(slot);
//     // Implement logic to fetch available tickets for the selected slot if necessary
//   };

//   const handleTicketChange = (event) => {
//     setSelectedTickets(event.target.value);
//   };

//   const calculateTotalPrice = () => {
//     // Assuming each ticket costs $25
//     const ticketPrice = 25;
//     return selectedTickets * ticketPrice;
//   };

//   return (
//     <div className="App">
//         <div>
//             <h1>{selectedSlot}</h1>
//         </div>
//       <div className="date-picker">
//         <DatePicker selected={selectedDate} onChange={handleDateChange} />
//       </div>
//       {selectedDate && (
//         <div className="time-slots">
//           {/* Replace this with your actual time slots data */}
//           <div onClick={() => handleSlotClick('Slot 1')}>Slot 1</div>
//           <div onClick={() => handleSlotClick('Slot 2')}>Slot 2</div>
//           <div onClick={() => handleSlotClick('Slot 3')}>Slot 3</div>
//         </div>
//       )}
//       {selectedSlot && (
//         <div className="ticket-selection">
//           <select onChange={handleTicketChange}>
//             {/* Replace this with your actual ticket options */}
//             <option value={0}>Select number of tickets</option>
//             <option value={1}>1 ticket</option>
//             <option value={2}>2 tickets</option>
//             <option value={3}>3 tickets</option>
//             {/* Add more options as needed */}
//           </select>
//           <div className="total-price">
//             Total: ${calculateTotalPrice().toFixed(2)}
//           </div>
//         </div>
//       )}
//       {/* Place your shopping cart icon here */}
//     </div>
//   );
// };

// export default Section;




/*////////////////////////////////////////////////////////////  */




/* ///////////////////////////////// */

// import React from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "../Components/Style.css";

// const TimePicker = ({ value, onChange, disabledTimes }) => {
//   const timeSlots = [
//     "12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM",
//     "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
//     "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"
//   ];

//   const isDisabled = (time) => disabledTimes.includes(time);

//   return (
//     <div className="time-picker">
//       {timeSlots.map((time) => (
//         <label key={time} className={isDisabled(time) ? "disabled" : ""}>
//           <input
//             type="radio"
//             name="timeSlot"
//             value={time}
//             checked={value === time}
//             onChange={() => onChange(time)}
//             disabled={isDisabled(time)}
//           />
//           {time}
//         </label>
//       ))}
//     </div>
//   );
// };

// const Section = () => {
//   const [selectedDate, setSelectedDate] = React.useState(null);
//   const [selectedTime, setSelectedTime] = React.useState(null);

//   // Object to map dates to their respective time slots
//   const timeSlotsByDate = {
//     "2023-07-20": ["9:00 AM", "1:00 PM", "5:00 PM"],
//     "2023-07-21": ["10:00 AM", "2:00 PM", "6:00 PM"],
//     // Add more date-time slot mappings as needed
//   };
//   console.log(selectedDate)
//   const handleDateChange = (date) => {
//     setSelectedDate(date);
    
//     // Reset the selected time when the date changes
//     setSelectedTime(null);
//   };

//   const handleTimeChange = (time) => {
//     setSelectedTime(time);
//   };

//   const availableTimeSlots = selectedDate ? timeSlotsByDate[selectedDate.toLocaleDateString()] || [] : [];
//   const disabledTimes = availableTimeSlots.filter((time) => time !== selectedTime);

//   return (
//     <div>
         
//       <DatePicker selected={selectedDate} onChange={handleDateChange} />
//       {selectedDate && (
//         <div>
//           <p>Selected day: {selectedDate.toDateString()}</p>
         
//           <p>Select a time slot for {selectedDate.toLocaleDateString()}</p>
//           <TimePicker value={selectedTime} onChange={handleTimeChange} disabledTimes={disabledTimes} />
//           {selectedTime && (
//             <p>Selected time: {selectedTime}</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Section;


/* ///////////////////////////////////////// */

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./Style.css"

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const ticketPrice = 25; // You can adjust this as needed

  // Dummy data for available tickets
  const availableTickets = ['Ticket A', 'Ticket B', 'Ticket C'];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    setSelectedTickets([]);
  };

  const handleSelectSlot = (slotNumber) => {
    setSelectedSlot(slotNumber);
    setSelectedTickets([]);
  };

  const handleSelectTicket = (event) => {
    const selectedTicket = event.target.value;
    setSelectedTickets([...selectedTickets, selectedTicket]);
  };

  const calculateTotal = () => {
    const total = selectedTickets.length * ticketPrice;
    return total;
  };

  return (
    <div className="app-container">
      <div className="date-picker">
        <h3>Select a Date:</h3>
        <DatePicker selected={selectedDate} onChange={handleDateChange} inline={true}/>
      </div>
      {selectedDate && (
        <div className="slots-container">
          <h3>Select a Slot:</h3>
          <div className="slot">
            <button
              className={`slot-button ${selectedSlot === 1 ? 'active' : ''}`}
              onClick={() => handleSelectSlot(1)}
            >
              Slot 1
            </button>
            <div className="tickets-dropdown">
              {selectedSlot === 1 &&
                availableTickets.map((ticket) => (
                  <div key={ticket} className="ticket-option">
                    {ticket}
                  </div>
                ))}
            </div>
          </div>
          {/* Add more slots here */}
        </div>
      )}
      {selectedSlot && (
        <div className="ticket-dropdown">
          <h3>Select Tickets:</h3>
          <select onChange={handleSelectTicket}>
            <option value="">Select Ticket</option>
            {availableTickets.map((ticket) => (
              <option key={ticket} value={ticket}>
                {ticket}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="ticket-calculator">
        <div className="cart-icon">
          {/* Display your shopping cart icon here */}
          {/* <img src="path/to/shopping-cart-icon" alt="Cart Icon" /> */}
        </div>
        <div className="total-amount">
          Total: ${calculateTotal()}
        </div>
      </div>
    </div>
  );
};

export default App;
