import { useState, useEffect } from 'react';

export function useTimeBasedBackground(lightImg, darkImg) {
  const [isDayMode, setIsDayMode] = useState(true);

  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      setIsDayMode(hour >= 6 && hour < 18);
    };

    checkTime();
    // Recheck toutes les minutes (au cas où on passe la frontière 6h/18h)
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return isDayMode ? lightImg : darkImg;
}