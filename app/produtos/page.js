import Menu from "./components/Menu";
import Produto from "./components/Produto";

function Produtos() {



    return ( 
       
        <div>
        
            <Menu/>

            <h1>Produtos</h1>
            <p>Bem-vindo a pagina de produtos 🙂</p>

            <hr/>

        <Produto nome="Maçã" preco="17,80" comprar={true}/>
        <Produto nome="Uva" preco="20,00" comprar={true}/>
        <Produto nome="Pera" preco="14,90" comprar={true}/>
        </div>

    );
}
    
export default Produtos;
