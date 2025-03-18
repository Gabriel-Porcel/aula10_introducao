'use client'

import { useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import Menu from "../produtos/components/Menu";

export default function Contato(){

    const[name, setName] = useState()
    const[message, setMessage] = useState()
    // Testando um teste com uma testada
    const notifySuccess = () => toast.success("Mensagem enviada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
    });

    const notifyError = () => toast.error("Por favor, preencha todos os campos.", {
        position: "top-right",
        autoClose: 5000,
    });

    function sendMessage(e){

        e.preventDefault()


        if(name.length == 0 || message.length == 0){
            notifyError();
        }else{
            notifySuccess();
        }
    }
    
    

    return(

        <div>

            <Menu/>

            <h1>Página de contato</h1>
            <p>Entre em contato conosco</p>

            <hr/>

            <form onSubmit={(e)=> sendMessage(e)} >
                <label>
                    Digite seu nome:
                    <input onChange={(e)=> setName(e.target.value)}/>
                </label>

                <br/>

                <label>
                    Digite sua mensagem:
                    <input onChange={(e)=> setMessage(e.target.value)}/>
                </label>

                <br/>

                <button>Enviar</button>

            </form>

            <ToastContainer/>
        </div>
    )
}