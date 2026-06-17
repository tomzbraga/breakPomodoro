"use client";
export default function InputTimer({ value, onChange, error }) {
  return (
    <div>
      <label htmlFor="timer">Tempo de prática (minutos):</label>
      <input
        id="timer"
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ex: 25"
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}
