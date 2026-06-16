"use client";

import InputTimer from "./InputTimer";
import RestCheckbox from "./RestCheckbox";
import RestInput from "./RestInput";
import StartButton from "./StartButton";
import { useState } from "react";

export default function TimerForm() {
  const [timer, setTimer] = useState("");
  const [restEnabled, setRestEnabled] = useState(false);
  const [restTime, setRestTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Configuracoes: ", { timer, restEnabled, restTime });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputTimer value={timer} onChange={setTimer} />
      <RestCheckbox value={restEnabled} onChange={setRestEnabled} />
      <RestInput
        value={restTime}
        onChange={setRestTime}
        enabled={restEnabled}
      />
      <StartButton />
    </form>
  );
}
