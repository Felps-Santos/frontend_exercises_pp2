interface BotaoProps {
  texto: string;
  variante: "primario" | "perigo";
  onClick: () => void;
}

function Botao({ texto, variante, onClick }: BotaoProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded px-4 py-2 text-white ${variante === "primario" ? "bg-teal-600 hover:bg-teal-700" : "bg-red-600 hover:bg-red-700"}`}
    >
      {texto}
    </button>
  );
}

export default Botao;
