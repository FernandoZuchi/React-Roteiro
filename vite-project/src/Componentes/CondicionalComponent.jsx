import { useState } from "react";


function ConditionalComponent() {
 const [show, setShow] = useState(false); // Define um estado chamado "show" e a função "setShow" para atualizá-lo


 return (
   <div>
     <button onClick={() => setShow(!show)}>
       {show ? "Esconder" : "Mostrar"} Mensagem {/* O texto do botão muda conforme o estado de 'show' */}
     </button>

     {/* Renderiza o parágrafo condicionalmente, baseado no valor de 'show' */}
     {show && <p>Esta é uma mensagem condicional!</p>}
   </div>
 );
}


export default ConditionalComponent;