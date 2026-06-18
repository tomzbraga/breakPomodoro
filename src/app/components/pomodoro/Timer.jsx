"use client";

import { useState, useEffect } from "react";

export default function Timer({ config }) {
  const { timer, restEnabled, restTime } = config;
  const [timeLeft, setTimeLeft] = useState(timer * 60);
  const [isRest, setIsRest] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) return prev - 1;
        if (!isRest && restEnabled) {
          setIsRest(true);
          return restTime * 60;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRest, restEnabled, restTime]);

  return <></>;
}
