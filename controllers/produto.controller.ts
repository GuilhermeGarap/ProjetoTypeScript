import { Request, Response } from "express";
import { Produto } from "../models/produto.model";

let produtos : Produto[] = [];

//Criar uma nova rota/funcionalidade para receber uma informação pela URL da requição. Sugestões: POSTMAN, INSOMNIA e RESTCLIENT
//Cadastrar produto
export class ProdutoController{
    cadastrar(request : Request, response : Response) : Response {
    let produto : Produto = new Produto();
    produto.nome = request.body.nome;
    produto.preco = request.body.preco;

    produtos.push(produto);
    console.log("Produto cadastrado! ");
    return response.status(201).json({mensagem : "Produto cadastrado", produto : produto})
    }

//Configurando uma requisição com o método GET para a raiz da aplicação
//Listar todos os produtos
    listar(request : Request, response : Response) : Response {
        console.log("Listagem realizada! ");
        return response.status(200).json({ message : "Ok", dados : produtos});
    }

//Criar uma nova rota/funcionalidade para receber uma informação pelo corpo da requisição
//Buscar produto por... 
    buscar(request : Request, response : Response) : Response {
    const nome = request.params.nome;  //OU const { produto, categoria} = request.params; - caso precise utilizar a constantes em algum outro momento novamente

        for(let produtoCadastrado of produtos){
            if (produtoCadastrado.nome == nome) {
                return response.status(200).json(
                    { message : "Produto: ", dados : produtoCadastrado });
            } 
        }
                return response.status(404).json(
                    { message : "Nenhum produto foi encontrado" });
    }
}

   
    
    

