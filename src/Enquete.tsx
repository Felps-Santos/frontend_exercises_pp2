import { useState } from "react";

interface EnqueteProps {
  pergunta: string;
  opcaoA: string;
  opcaoB: string;
}

function Enquete({ pergunta, opcaoA, opcaoB }: EnqueteProps) {
  const [votosA, setVotosA] = useState(0);
  const [votosB, setVotosB] = useState(0);
  const lideranca = votosA === votosB ? "Empate" : `Na frente: ${votosA > votosB ? opcaoA : opcaoB}`;

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4">
      <h3 className="font-semibold">{pergunta}</h3>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => setVotosA((n) => n + 1)} className="rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">{opcaoA} ({votosA})</button>
        <button type="button" onClick={() => setVotosB((n) => n + 1)} className="rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">{opcaoB} ({votosB})</button>
      </div>
      <p>{lideranca}</p>
      <button type="button" onClick={() => { setVotosA(0); setVotosB(0); }} className="self-start rounded border border-slate-300 px-4 py-2 hover:bg-slate-100">Zerar votos</button>
    </div>
  );
}

export default Enquete;
