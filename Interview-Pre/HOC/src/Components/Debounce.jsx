import React, { useState, useCallback } from 'react';

const Debounce = () => {
  const [count, setCount] = useState(0);
  const [searchText, setSearchText] = useState('');

  // Update the searchText state whenever the input changes
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  // Debounce function
  const debounce = useCallback((func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }, []);

  // Function to be debounced
  const handleChange = () => {
    console.log(`Calling ${count}`);
    setCount(count + 1);
  };

  // Create a debounced version of the 'handleChange' function with a delay of 1000 milliseconds (1 second)
  const debouncedChange = debounce(handleChange, 3000);

  // Call the debounced version of 'handleChange' when the input changes
  const handleDebouncedChange = () => {
    debouncedChange();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type here..."
        value={searchText}
        onChange={handleInputChange}
        onKeyUp={handleDebouncedChange}
      />
    </div>
  );
};

export default Debounce;
