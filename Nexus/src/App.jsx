// import React, { useState } from 'react';
// import TicketSlot from "./Components/TicketSlot";
// import TicketDropDown from "./Components/TicketDropDown";
// import TicketCalculator from "./Components/TicketCalculator";

// const App = () => {
//   const [selectedTickets, setSelectedTickets] = useState([]);

//   const handleSelectTicket = (slotNumber) => {
//     // Implement your logic to get available tickets for the selected slot
//     const availableTickets = ['Ticket A', 'Ticket B', 'Ticket C'];
//     setSelectedTickets([...selectedTickets, ...availableTickets]);
//   };

//   return (
//     <div className="app-container">
//       <div className="slots-container">
//         <TicketSlot
//           slotNumber={1}
//           availableTickets={['Ticket A', 'Ticket B', 'Ticket C']}
//           onSelect={handleSelectTicket}
//         />
//         {/* Add more TicketSlot components for other slots */}
//       </div>
//       <div className="info-container">
//         <TicketDropDown selectedTickets={selectedTickets} />
//         <TicketCalculator selectedTickets={selectedTickets} />
//       </div>
//     </div>
//   );
// };

// export default App;


import Section from "./Components/Section"

const App =()=>{

     return(
      <>
            <Section/>
      </>
     )
}
export default App