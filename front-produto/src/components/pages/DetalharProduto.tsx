import { useParams } from "react-router-dom";

function DetalharProduto() {

    const { nome } = useParams();

    useEffect(() => {
        //Criar uma requisição com o axios para a sua API
        //Trazer o objeto do banco com o id
    });
    return <div></div>
}

export default DetalharProduto;

function useEffect(arg0: () => void) {
    throw new Error("Function not implemented.");
}
