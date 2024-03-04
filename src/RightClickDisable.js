// Filename: RightClickDisable.js

import React, { useEffect } from 'react';

const RightClickDisable = () => {
  useEffect(() => {
    // Disable right-click on the entire document
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return <></>; // You can return an empty fragment or any other React element
};

export default RightClickDisable;
