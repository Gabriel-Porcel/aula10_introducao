'use client'

import { useState } from "react";
import "./painel.css"

function Painel() {

    const[user, setUser] = useState([""])
    const[password, setPassword] = useState([""])

    const[showError, setShowError] = useState(false)
    const[showSucces, setShowSucces] = useState(false)

    function validation(){
        if(user == "Gabriel" && password == "123"){
            setShowError(false)
            setShowSucces(true)
        }else if(user == "" && password == "" ){
            setShowError(false)
            setShowSucces(false)
        }else{setShowError(true)
            setShowSucces(false)
            return
        }
    }

    return ( 
        <div>
            <h1>Painel administrativo</h1>

            <label>
                Digite o usuário:
                <input onChange={(e)=> setUser(e.target.value)}/>
            </label>

            <br/>

            <label>
                Digite a senha:
                <input onChange={(e)=> setPassword(e.target.value)}/>
            </label>

            <br/>
            
            <button onClick={()=> validation()} >Entrar</button>

            {/* Operador TERNÁRIO */}

            {
                showError == true ?
                    <div className="error">
                        <p>Usuário ou senha incorretos</p>
                    </div>
                :
                    <div></div>
            }

            {
                showSucces == true ?
                    <div className="succes">
                        <p>Logado com sucesso!</p>
                    </div>
                :
                    <div></div>
            }

            

        </div>
    );
}

export default Painel;