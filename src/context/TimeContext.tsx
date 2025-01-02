import React, { PropsWithChildren, useEffect, useState } from 'react';
import { TimeContext } from '../hooks/useTime';

// Provider do contexto
export const TimeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TimeContext.Provider value={currentTime}>
      {children}
    </TimeContext.Provider>
  );
};