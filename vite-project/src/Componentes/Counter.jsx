import { useState } from "react";

function Counter() {
  // Define um estado chamado 'count' e uma função 'setCount' para atualizá-lo.
  const [count, setCount] = useState(0); // O estado inicial de 'count' é 0.

  // Função para incrementar o valor de 'count' em 1.
  function increment() {
    setCount(count => count + 1); // Atualiza o estado 'count' usando o valor atual.
  }

  // Função para decrementar o valor de 'count' em 1.
  function decrement() {
    setCount(count => count - 1); // Atualiza o estado 'count' usando o valor atual.
  }

  return (
    <div> {/* Cria um contêiner div para o componente */}
      <h1>Contador: {count}</h1> {/* Exibe o valor atual de 'count' */}
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default Counter; 
