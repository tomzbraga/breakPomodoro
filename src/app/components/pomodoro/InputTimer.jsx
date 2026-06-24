"use client";
export default function InputTimer({ value, onChange, error }) {
  return (
    <div>
      <label htmlFor="timer" className="text-gray-100">
        Tempo de prática (minutos):
      </label>
      <input
        id="timer"
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 bg-gray-900 text-gray-100 border border-gray-700 rounded focus:outline-none focus:border-indigo-500"
      />
      {error && <span className="text-red-300">{error}</span>}
    </div>
  );
}
