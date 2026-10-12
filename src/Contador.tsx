import { useState } from "react";

interface ContadorProps {
  passo: number;
}

function Contador({ passo }: ContadorProps) {
  const [n, setN] = useState(0);

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
      <span className="font-medium">Passo {passo} — Cliques: {n}</span>
      <button type="button" onClick={() => setN((atual) => Math.max(0, atual - passo))} className="rounded bg-slate-600 px-4 py-2 text-white hover:bg-slate-700">−</button>
      <button type="button" onClick={() => setN((atual) => atual + passo)} className="rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">+</button>
      <button type="button" onClick={() => setN(0)} className="rounded border border-slate-300 px-4 py-2 hover:bg-slate-100">Zerar</button>
    </div>
  );
}

export default Contador;
