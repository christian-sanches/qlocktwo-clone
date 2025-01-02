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
      {/* <select name="hour" id="hour" onChange={(e) => setCurrentTime(new Date(currentTime.setHours(parseInt(e.target.value))))}>
        {[...Array(24).keys()].map((hour) => (
          <option key={hour} value={hour}>{hour}</option>
        ))}
      </select>
      <select name="minute" id="minute" onChange={(e) => setCurrentTime(new Date(currentTime.setMinutes(parseInt(e.target.value))))}>
        {[...Array(60).keys()].map((minute) => (
          <option key={minute} value={minute}>{minute}</option>
        ))}
      </select> */}
      {children}
    </TimeContext.Provider>
  );
};