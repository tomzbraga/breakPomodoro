"use client";

import InputTimer from "./InputTimer";
import RestCheckbox from "./RestCheckbox";
import RestInput from "./RestInput";
import StartButton from "./StartButton";
import { useState } from "react";

export default function TimerForm({ onStart }) {
  const [timer, setTimer] = useState("");
  const [restEnabled, setRestEnabled] = useState(false);
  const [restTime, setRestTime] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!timer) newErrors.timer = "Obrigatório";
    if (restEnabled && !restTime) newErrors.restTime = "Obrigatório";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Configuracoes: ", { timer, restEnabled, restTime });
      onStart({ timer, restEnabled, restTime });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputTimer value={timer} onChange={setTimer} error={errors.timer} />
      <RestCheckbox value={restEnabled} onChange={setRestEnabled} />
      <RestInput
        value={restTime}
        onChange={setRestTime}
        enabled={restEnabled}
        error={errors.restTime}
      />
      <StartButton />
    </form>
  );
}
