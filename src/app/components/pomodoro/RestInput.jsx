"use client";
export default function RestInput({ value, onChange, enabled, error }) {
  if (!enabled) return null; // só aparece se checkbox estiver marcado

  return (
    <div>
      <label htmlFor="rest" className="text-gray-100">
        Tempo de descanso (minutos):
      </label>
      <input
        id="rest"
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={!enabled}
        className="w-full p-2 bg-gray-900 text-gray-100 border border-gray-700 rounded focus:outline-none focus:border-indigo-500"
      />
      {enabled && error && <span className="text-red-300">{error}</span>}
    </div>
  );
}
