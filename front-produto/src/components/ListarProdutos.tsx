import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function ListarProdutos() {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios
      .get("http://localhost:3001")
      .then((resposta) => {
        //Executar algo quando a requisição for bem sucedida(Código HTTP na faixa do 200)
        setProdutos(resposta.data.dados)
      console.table(produtos);
      })
      .catch((erro) => {
        //Executar algo quando a requisição não for bem sucedida(Código HTTP na faixa do 400 e 500)
        console.log(erro);
      });
     }, []);
    return (
    <div>
        <h1>Listagem de Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {produtos.map((produto:any) =>(
                        <tr>
                            <td></td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
    </div>
);
}

export default ListarProdutos;