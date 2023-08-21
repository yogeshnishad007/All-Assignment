import React from 'react';

const TicketSlot = ({ slotNumber, availableTickets, onSelect }) => {
  const handleClick = () => {
    onSelect(slotNumber);
  };

  return (
    <div className="slot" onClick={handleClick}>
      Slot {slotNumber}
      <div className="tickets-dropdown">
        {availableTickets.map((ticket) => (
          <div key={ticket} className="ticket-option">
            {ticket}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketSlot;
