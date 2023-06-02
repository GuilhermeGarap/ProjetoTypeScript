//npm install i
//Imports
//Importando o express em TypeScript
import express from 'express';
import { router } from '../src/config/routes';
import cors from "cors";

const app = express();

app.use(cors());

//Configurar a aplicação para receber dados no formato json
app.use(express.json());

//Configurar a aplicação para usar o router
app.use(router);

//O comando listen roda a aplicação
app.listen(3001, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3001");
});
