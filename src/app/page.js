import Image from "next/image";
import TimerForm from "./components/pomodoro/TimerForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-100 mb-4">
          Configurações do Pomodoro
        </h1>
        <TimerForm />
      </div>
    </main>
  );
}
