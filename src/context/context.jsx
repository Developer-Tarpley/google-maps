

import React, { createContext, useContext, useState } from 'react';

// Create a new context
const DistanceContext = createContext();

// Custom hook to use the distance context
export const useDistance = () => useContext(DistanceContext);

// Distance provider component
export const DistanceProvider = ({ children }) => {
  const [distance, setDistance] = useState('');

  // Function to update the distance value
  const updateDistance = (newDistance) => {
    setDistance(newDistance);
  };

  return (
    <DistanceContext.Provider value={{ distance, updateDistance }}>
      {children}
    </DistanceContext.Provider>
  );
};
