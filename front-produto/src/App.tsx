import React from "react";
import CadastrarProduto from "./components/pages/CadastroProduto";
import ListarProdutos from "./components/pages/ListarProdutos"
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;

//npm i react-douter-dom @types/react-router-dom
