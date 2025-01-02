import { createContext, useContext } from 'react';

// Criação do contexto
export const TimeContext = createContext<Date | undefined>(undefined);

// Hook para usar o contexto
export const useTime = () => {
  const context = useContext(TimeContext);
  if (context === undefined) {
    throw new Error('useTime must be used within a TimeProvider');
  }
  return context;
};