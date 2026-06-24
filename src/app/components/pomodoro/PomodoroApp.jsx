"use client";

import { useState } from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

export default function PomodoroApp() {
  const [isRunning, setIsRunning] = useState(false);
  const [config, setConfig] = useState(null);

  const handleStart = (formData) => {
    setConfig(formData);
    setIsRunning(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md rounded-xl p-8">
        {!isRunning ? (
          <TimerForm onStart={handleStart} />
        ) : (
          <Timer config={config} />
        )}
      </div>
    </div>
  );
}
