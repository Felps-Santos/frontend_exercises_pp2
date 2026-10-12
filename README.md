# frontend-pp2

Projeto completo baseado nos 31 slides de **Introdução ao Frontend — Paradigmas de Programação II**.

## Pré-requisitos

- Node.js 20.19+ ou 22.12+ (recomendado: Node 22 LTS ou Node 24)
- npm

## Rodar no VS Code / PowerShell / CMD

Abra esta pasta `frontend-pp2` no VS Code e execute:

```bash
npm install
npm run dev
```

Acesse o endereço informado no terminal (normalmente `http://localhost:5173/`). Para parar o servidor, pressione Ctrl+C.

Para checar build de produção:

```bash
npm run build
npm run preview
```

O build gera a pasta `dist/`.

## Ordem dos slides e arquivos

| Slides | Etapa | Arquivo |
| --- | --- | --- |
| 11–14 | Vite React-TS, configuração do Tailwind 4 | `package.json`, `vite.config.ts`, `src/index.css` |
| 16 | Primeiro componente / Hello, PP2 | `src/App.tsx` |
| 17–18 | Props do Card e uso no App | `src/Card.tsx`, `src/App.tsx` |
| 19 | Contador com useState | `src/Contador.tsx` (evoluído conforme exercício 2) |
| 20–22 | Calculadora de IMC, input controlado | `src/Imc.tsx` |
| 23 | Reunir exemplos | `src/App.tsx` |
| 25 | Exercício 1: Botão | `src/Botao.tsx` |
| 26 | Exercício 2: Contador passo, +, −, zerar | `src/Contador.tsx` |
| 27 | Exercício 3: Produtos, curtidas, bônus map | `src/CartaoProduto.tsx` |
| 28 | Exercício 4: Tarefas, bônus borda verde | `src/TarefaCard.tsx` |
| 29 | Exercício 5: Conversores USD/EUR | `src/ConversorMoeda.tsx` |
| 30 | Exercício 6: Enquetes, bônus zerar votos | `src/Enquete.tsx` |

## Observações

- O exercício 2 **substitui/evolui** o Contador original, como o professor exige; por isso não existe arquivo de contador duplicado.
- O `App.tsx` mostra os exemplos e todos os exercícios funcionando na mesma página.
- **Sem backend:** conforme os slides, `/tasks` e `/categories` só serão integrados em outra aula.
- Os valores das taxas (USD `0.18`, EUR `0.16`) são **valores didáticos dos slides**, não taxas em tempo real.
- O Tailwind 4 funciona com `@tailwindcss/vite` e `@import "tailwindcss";` sem arquivo `tailwind.config.js`.
- Não inclua `node_modules` na entrega: `npm install` recria automaticamente a pasta com as dependências.

## Conferência funcional manual

1. Clique nos 3 botões do exercício 1: cada um mostra seu próprio alert.
2. Clique nos contadores com passos 1 e 5: aumentam/diminuem separadamente, nunca abaixo de zero e zeram.
3. Curta cada produto: os totais são independentes; preços exibem duas casas.
4. Conclua/desfaça cada tarefa: texto riscado e borda verde ao concluir.
5. Converta `100` reais: `18.00 USD` e `16.00 EUR`, independentemente.
6. Vote nas enquetes: total por opção, líder/empate e botão para zerar.
7. No IMC, experimente peso `70` e altura `1.75`: IMC `22.9`.
