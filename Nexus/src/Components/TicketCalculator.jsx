import React from 'react';

const TicketCalculator = ({ selectedTickets }) => {
  const ticketPrice = 25; // You can adjust this as needed

  const calculateTotal = () => {
    const total = selectedTickets.length * ticketPrice;
    return total;
  };

  return (
    <div className="ticket-calculator">
      <div className="cart-icon">
        {/* Display your shopping cart icon here */}
        {/* <img src="path/to/shopping-cart-icon" alt="Cart Icon" /> */}
      </div>
      <div className="total-amount">
        Total: ${calculateTotal()}
      </div>
    </div>
  );
};

export default TicketCalculator;
