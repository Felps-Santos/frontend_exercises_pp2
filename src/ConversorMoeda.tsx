import { useState } from "react";

interface ConversorMoedaProps {
  moeda: string;
  taxa: number;
}

function ConversorMoeda({ moeda, taxa }: ConversorMoedaProps) {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  function converter() {
    const reais = Number(valor);
    setResultado(valor.trim() !== "" && Number.isFinite(reais) && reais >= 0 ? reais * taxa : null);
  }

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4">
      <h3 className="font-semibold">Reais para {moeda}</h3>
      <input type="number" min="0" step="0.01" placeholder="Valor em R$" aria-label={`Valor em reais para ${moeda}`} value={valor} onChange={(e) => { setValor(e.target.value); setResultado(null); }} className="rounded border border-slate-300 px-3 py-2" />
      <button type="button" onClick={converter} className="rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">Converter</button>
      {resultado !== null && <p>{resultado.toFixed(2)} {moeda}</p>}
    </div>
  );
}

export default ConversorMoeda;
