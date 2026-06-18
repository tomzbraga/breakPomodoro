"use client";

import { useState } from "react";
import TimerForm from "./TimerForm";

export default function PomodoroApp() {
  const [isRunning, setIsRunning] = useState(false);
  const [config, setConfig] = useState(null);

  const handleStart = (formData) => {
    setConfig(formData);
    setIsRunning(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-500 via-pink-500 to-purple-600">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        {!isRunning ? (
          <TimerForm onStart={handleStart} />
        ) : (
          <Timer config={config} />
        )}
      </div>
    </div>
  );
}
