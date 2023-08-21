import React from 'react';

const TicketDropDown = ({ selectedTickets }) => {
  return (
    <div className="ticket-dropdown">
      <div className="selected-tickets">
        Selected Tickets: {selectedTickets.join(', ')}
      </div>
    </div>
  );
};

export default TicketDropDown;
