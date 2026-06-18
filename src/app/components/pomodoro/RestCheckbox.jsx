"use client";
export default function RestCheckbox({ checked, onChange }) {
  return (
    <div>
      <label className="text-gray-100">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        Configurar tempo de descanso?
      </label>
    </div>
  );
}
