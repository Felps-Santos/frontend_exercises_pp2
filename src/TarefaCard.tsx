import { useState } from "react";

interface TarefaCardProps {
  titulo: string;
}

function TarefaCard({ titulo }: TarefaCardProps) {
  const [concluida, setConcluida] = useState(false);

  return (
    <div className={`flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-white p-4 ${concluida ? "border-green-500" : "border-slate-200"}`}>
      <span className={concluida ? "text-slate-400 line-through" : "text-slate-900"}>{titulo}</span>
      <button type="button" onClick={() => setConcluida((valor) => !valor)} className="rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">{concluida ? "Desfazer" : "Concluir"}</button>
    </div>
  );
}

export default TarefaCard;
