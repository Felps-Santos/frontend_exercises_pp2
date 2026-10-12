import Card from "./Card";
import Contador from "./Contador";
import Imc from "./Imc";
import Botao from "./Botao";
import CartaoProduto from "./CartaoProduto";
import TarefaCard from "./TarefaCard";
import ConversorMoeda from "./ConversorMoeda";
import Enquete from "./Enquete";

const produtos = [
  { nome: "Teclado", preco: 149.9 },
  { nome: "Mouse", preco: 79.5 },
  { nome: "Monitor", preco: 899 },
];

function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <header>
          <h1 className="font-semibold text-teal-700">
            Paradigmas de Programação II
          </h1>
        </header>

        <section className="flex flex-col gap-3" aria-labelledby="exemplos">
          <h2 id="exemplos" className="text-2xl font-bold">
            Exemplos da aula
          </h2>
          <Card title="Estudar" description="Ler cap. 4" />
          <Card title="Exercício" description="Fazer a lista" />
          <h3 className="font-semibold">Contador (evoluído no exercício 2)</h3>
          <Contador passo={1} />
          <h3 className="font-semibold">Calculadora de IMC</h3>
          <Imc />
        </section>

        <section className="flex flex-col gap-3" aria-labelledby="ex1">
          <h2 id="ex1" className="text-2xl font-bold">
            Exercício 1 — Botão reutilizável
          </h2>
          <div className="flex flex-wrap gap-3">
            <Botao
              texto="Salvar"
              variante="primario"
              onClick={() => alert("Salvo!")}
            />
            <Botao
              texto="Excluir"
              variante="perigo"
              onClick={() => alert("Excluído!")}
            />
            <Botao
              texto="Enviar"
              variante="primario"
              onClick={() => alert("Enviado!")}
            />
          </div>
        </section>

        <section className="flex flex-col gap-3" aria-labelledby="ex2">
          <h2 id="ex2" className="text-2xl font-bold">
            Exercício 2 — Contadores com passos diferentes
          </h2>
          <Contador passo={1} />
          <Contador passo={5} />
        </section>

        <section className="flex flex-col gap-3" aria-labelledby="ex3">
          <h2 id="ex3" className="text-2xl font-bold">
            Exercício 3 — Produtos e curtidas
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {produtos.map((produto) => (
              <CartaoProduto
                key={produto.nome}
                nome={produto.nome}
                preco={produto.preco}
              />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3" aria-labelledby="ex4">
          <h2 id="ex4" className="text-2xl font-bold">
            Exercício 4 — Cartão de tarefa
          </h2>
          <TarefaCard titulo="Estudar React" />
          <TarefaCard titulo="Fazer exercícios" />
          <TarefaCard titulo="Revisar props" />
        </section>

        <section className="flex flex-col gap-3" aria-labelledby="ex5">
          <h2 id="ex5" className="text-2xl font-bold">
            Exercício 5 — Conversor de moeda
          </h2>
          <p className="text-sm text-slate-600">
            Taxas fixas de exemplo fornecidas pelo professor; não são cotações
            atuais.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <ConversorMoeda moeda="USD" taxa={0.18} />
            <ConversorMoeda moeda="EUR" taxa={0.16} />
          </div>
        </section>

        <section className="flex flex-col gap-3" aria-labelledby="ex6">
          <h2 id="ex6" className="text-2xl font-bold">
            Exercício 6 — Enquete
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Enquete
              pergunta="Melhor linguagem?"
              opcaoA="TypeScript"
              opcaoB="Python"
            />
            <Enquete
              pergunta="Melhor editor?"
              opcaoA="VS Code"
              opcaoB="WebStorm"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
