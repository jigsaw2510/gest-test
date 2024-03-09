import React, { useEffect } from 'react';

const StockHistory = () => {
  useEffect(() => {
    // Get the current date and time
    const currentDate = new Date();

    // Format the date and time
    const formattedDate = `${currentDate.getHours()}:${currentDate.getMinutes()}, ${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts
};

export default StockHistory;
