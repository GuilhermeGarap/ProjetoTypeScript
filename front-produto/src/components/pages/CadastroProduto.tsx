import axios from "axios";
import { useState } from "react";
import { Produto } from "../../models/produto.model";

function CadastrarProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  function enviar() {

    let produto : Produto = new Produto();
    produto.nome = nome;
    produto.preco = Number.parseInt(preco);

    axios
      .post("http://localhost:3001", produto)
      .then((resposta) => {
        //Executar algo quando a requisição for bem sucedida(Código HTTP na faixa do 200)
      console.log(resposta.data.produto);
      })
      .catch((erro) => {
        //Executar algo quando a requisição não for bem sucedida(Código HTTP na faixa do 400 e 500)
        console.log(erro);
      });
  }

  return (
    <div>
      <h1>Cadastrar Produto</h1>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          onChange={(event: any) => setNome(event.target.value)}
        />
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="text"
          onChange={(event: any) => setPreco(event.target.value)}
        />
      </div>
      <div>
        <button onClick={enviar}>Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastrarProduto;
