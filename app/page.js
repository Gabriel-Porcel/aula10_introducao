'use client'

import { useState } from "react";
import "./home.css"

export default function Home() {

    const [ carrinho, setCarrinho ] = useState(0)
    function removeCarrinho(){
        if(carrinho > 0){
            setCarrinho(carrinho-1)
        }
    }
    



    return (
        <div>
            <div className="menu">
                <h1>Conradito Market</h1>
                <p>O melhor supermercado do bairro!</p>
            </div>
            <hr/>
            <div className="posicaoCarrinho">
                <p className="carrinho">Itens no carrinho: {carrinho}</p>
                <button onClick={()=> removeCarrinho(carrinho-1)}>Remover item</button>
                <button onClick={()=> setCarrinho(0)}>Limpar carrinho</button>
            </div>
            <hr/>

            <h2>Produtos</h2>
            <div className="espacamento">
                <div className="produto">
                    <img src="data:image/jpeg;base64,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" width="150px"/>
                    <p>Cenoura</p>
                    <p>R$ 4,50 (kg)</p>
                    <button onClick={()=> setCarrinho(carrinho+1)}>Comprar</button>
                </div>
                <div className="produto">
                    <img src="https://media.istockphoto.com/id/157430678/pt/foto/tr%C3%AAs-batatas.jpg?s=612x612&w=0&k=20&c=BoUCWwC1mWkz2JzT8K0RLaJSYfRPEWWPRSMXL36pI9Q=" width="160px"/>
                    <p>Batata</p>
                    <p>R$ 2,50 (kg)</p>
                    <button onClick={()=> setCarrinho(carrinho+1)}>Comprar</button>
                </div>
                <div className="produto">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjBkf6wjHYyNJpaKlrrX8G09OjA5XZJEzBeQ&s" width="110px"/>
                    <p>cebola</p>
                    <p>R$ 3,00 (kg)</p>
                    <button onClick={()=> setCarrinho(carrinho+1)}>Comprar</button>
                </div>
                <div className="produto">
                    <img src="https://agristar.com.br/upload/blog/original/com-cultivo-correto--manjericao-traz-ainda-mais-beneficios-para-a-saude--26-04-2023-16-58-14-6304.jpg" width="190px"/>
                    <p>Manjericão</p>
                    <p>R$ 2,00 (kg)</p>
                    <button onClick={()=> setCarrinho(carrinho+1)}>Comprar</button>
                </div>
            </div>
        </div>
    );
}
