"use client";
export default function StartButton({ onClick }) {
  return (
    <button type="submit" onClick={onClick} className="text-gray-100">
      Iniciar
    </button>
  );
}
