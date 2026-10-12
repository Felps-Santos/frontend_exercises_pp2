import { useState } from "react";

const campo = "w-full rounded border border-slate-300 px-3 py-2";

function Imc() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState<number | null>(null);

  function calcular() {
    const p = Number(peso);
    const a = Number(altura);
    if (p > 0 && a > 0) {
      setImc(p / (a * a));
    } else {
      setImc(null);
    }
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4">
      <input type="number" min="0" placeholder="Peso (kg)" aria-label="Peso em quilos" value={peso} onChange={(e) => { setPeso(e.target.value); setImc(null); }} className={campo} />
      <input type="number" min="0" step="0.01" placeholder="Altura (m)" aria-label="Altura em metros" value={altura} onChange={(e) => { setAltura(e.target.value); setImc(null); }} className={campo} />
      <button type="button" onClick={calcular} className="rounded bg-teal-600 py-2 text-white hover:bg-teal-700">Calcular</button>
      {imc !== null && <p>IMC: {imc.toFixed(1)}</p>}
    </div>
  );
}

export default Imc;
