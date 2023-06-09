import React, { createContext, useContext, useReducer } from 'react';

// Создаем контекст хранилища
const StoreContext = createContext();

// Создаем обертку для хранилища
export const StoreProvider = ({ reducer, initialState, children }) => (
  <StoreContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StoreContext.Provider>
);

// Hook для доступа к состоянию и действиям хранилища
export const useStore = () => useContext(StoreContext);