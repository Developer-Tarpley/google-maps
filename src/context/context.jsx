

import React, { createContext, useContext, useState } from 'react';

// Create a new context
const DistanceContext = createContext();

// Custom hook to use the distance context
export const useDistance = () => useContext(DistanceContext);

// Distance provider component
export const DistanceProvider = ({ children }) => {
  const [distance, setDistance] = useState('');
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedAdditionalServices, setSelectedAdditionalServices] = useState([]);
  const [selectedLockoutService, setSelectedLockoutService] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  // Function to update the distance value
  const updateDistance = (newDistance) => {
    setDistance(newDistance);
  };

  return (
    <DistanceContext.Provider value={{
      distance, updateDistance,
      showQuoteModal, setShowQuoteModal,
      selectedService, setSelectedService,
      selectedAdditionalServices, setSelectedAdditionalServices,
      selectedLockoutService, setSelectedLockoutService,
      totalCost, setTotalCost

    }}>
      {children}
    </DistanceContext.Provider>
  );
};
