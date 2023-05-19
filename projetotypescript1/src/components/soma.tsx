import { useState } from "react";

function Soma(){

    const [num1, setNum1] = useState<any>();
    const [num2, setNum2] = useState<any>();
    const [resultado, setResultado] = useState<any>();



    function clicarNoButton() {
        setResultado(Number(num1)+Number(num2));
        //Number.parseInt ou Number.parseFloat
    }

    function escreverCaixaTexto1(event: any) {
        setNum1(event.target.value);
        console.log(num1);
    }

    function escreverCaixaTexto2(event: any) {
        setNum2(event.target.value);
        console.log(num2);
    }

    


    return (<>
    <h2>Função de Soma:</h2>
        <div>
            <label>Número 1:</label>
            <br></br>
            <input type="number" onChange={escreverCaixaTexto1} />
        </div>
        <div>
            <label>Número 2:</label>
            <br></br>
            <input type="number" onChange={escreverCaixaTexto2}/>
        </div>
        <div>
        <br></br>
            <button onClick={clicarNoButton}>Somar</button>
            <span> Resultado: {resultado}</span>
        </div>
    </>);

}

//Criar duas caixas de texto
//Criar um botão
//Somar os dois valores
//Exibir em alert e depois no HTML

export default Soma;

