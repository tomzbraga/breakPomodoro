"use client";
export default function RestInput({ value, onChange, enabled, error }) {
  if (!enabled) return null; // só aparece se checkbox estiver marcado

  return (
    <div>
      <label htmlFor="rest">Tempo de descanso (minutos):</label>
      <input
        id="rest"
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ex: 5"
        disabled={!enabled}
      />
      {enabled && error && <span className="text-red-700">{error}</span>}
    </div>
  );
}
