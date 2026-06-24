"use client";

import { useState, useEffect } from "react";

export default function Timer({ config }) {
  const { timer, restEnabled, restTime } = config;
  const [timeLeft, setTimeLeft] = useState(timer * 60);
  const [isRest, setIsRest] = useState(false);

  // useEffect executa a "lógica do componente" quando
  // ele é carregado.
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

  return (
    <div className="text-gray-100">
      {isRest ? <h1>Intervalo</h1> : <h1>Prática</h1>}
      <p>{timeLeft}</p>
    </div>
  );
}
