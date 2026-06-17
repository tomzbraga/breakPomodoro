import Image from "next/image";
import TimerForm from "./components/TimerForm";

export default function Home() {
  return (
    <main>
      <h1>Configuracoes do Pomodoro</h1>
      <TimerForm />
    </main>
  );
}
