import { useState } from "react";

interface CartaoProdutoProps {
  nome: string;
  preco: number;
}

function CartaoProduto({ nome, preco }: CartaoProdutoProps) {
  const [curtidas, setCurtidas] = useState(0);

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <h3 className="font-bold">{nome}</h3>
      <p className="my-2">R$ {preco.toFixed(2)}</p>
      <button type="button" onClick={() => setCurtidas((n) => n + 1)} className="rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">Curtir</button>
      <p className="mt-2 text-sm text-slate-600">Curtidas: {curtidas}</p>
    </div>
  );
}

export default CartaoProduto;
