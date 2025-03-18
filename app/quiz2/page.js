'use client'
import { useState } from "react"
import "./quiz.css"


function Quiz2() {

    const[ p1, setP1 ] = useState(0)
    const[ p2, setP2 ] = useState(0)
    const[ p3, setP3 ] = useState(0)
    const[ p4, setP4 ] = useState(0)

    const[ points, setPoints ] = useState(0)
       
    const[showP1, setShowP1] = useState(true)
    const[showP2, setShowP2] = useState(false)
    const[showP3, setShowP3] = useState(false)
    const[showP4, setShowP4] = useState(false)

    const[selected, setSelected] =useState(["","","",""])

    function calculatePoints(){

        let totalUpdated

        if(p4 == "Bleach"){
            totalUpdated = p1+p2+p3+1
            setPoints(totalUpdated)
        }else{
            totalUpdated = p1+p2+p3
            setPoints(totalUpdated)
        }
        // Pega do banco
        let bankValue = parseInt(localStorage.getItem("total"))
        // Manda para o banco
        localStorage.setItem("total", totalUpdated + bankValue)

    }

    

    

    return ( 
        <div>
            <h1>Quiz Conradito</h1>
            <p>Assinale a opção correta</p>
            
            <hr/>
                    {/* colocar && no lugar de ? no operador ternário possibilita retornar apenas o "if" */}
            {
                showP1 == true &&  
                    <div>
                        <h2>Qual a cor de cabelo do cavalo branco de Napoleãum?</h2>
                        <label> <input name="p1" type="radio" onChange={ ()=> setP1(0) } /> Preto </label>
                        <br/>
                     
                        <label> <input name="p1" type="radio" onChange={ ()=> setP1(0) } /> Azul </label>
                        <br/>
                        <label> <input name="p1" type="radio" onChange={ ()=> setP1(0) } /> Branco </label>
                        <br/>
                        <label> <input name="p1" type="radio" onChange={ ()=> setP1(1) } /> Transparente </label>
                        <br/><br/>
                        <hr/>
                        <button onClick={()=> {setShowP1(false); setShowP2(true)}}>Enviar resposta</button>
                    </div>
            }

            {
                showP2 == true &&
                    <div>
                        <h2>Qual a melhor letra?</h2>
                        <label> <input name="p2" type="radio" onChange={ ()=> setP2(1)} /> A </label>
                        <br/>
                        <label> <input name="p2" type="radio" onChange={ ()=> setP2(0)} /> B </label>
                        <br/>
                        <label> <input name="p2" type="radio" onChange={ ()=> setP2(0)} /> C </label>
                        <br/>
                        <label> <input name="p2" type="radio" onChange={ ()=> setP2(0)} /> X </label>
                        <br/><br/>
                        <hr/>
                        <button onClick={()=> {setShowP2(false); setShowP3(true)}}>Enviar resposta</button>
                    </div>
            }

            {
                showP3 == true &&
                    <div>
                        <h2>Quanto é dois + 2?</h2>
                            <ul>
                                <p name="p3" className={selected[0]} onClick={()=>{ setP3(0); setSelected(["selected","","",""]) }}> 2 </p>
                                <p name="p3" className={selected[1]} onClick={()=>{ setP3(0); setSelected(["","selected","",""]) }}> 0 </p>
                                <p name="p3" className={selected[2]} onClick={()=>{ setP3(1); setSelected(["","","selected",""]) }}> aaaa </p>
                                <p name="p3" className={selected[3]} onClick={()=>{ setP3(0); setSelected(["","","","selected"]) }}> sim </p>
                                <br/><br/>
                                <hr/>
                                <button onClick={()=> {setShowP3(false); setShowP4(true)}}>Enviar resposta</button>
                            </ul>
                    </div>
            }            

            {
                showP4 == true &&
                    <div>
                        <h2>Qual é o melhor anime do mundo?</h2>
                            <form>
                            <label> <input onChange={ (e)=> setP4(e.target.value)} /> </label>
                            </form>
                            <br/><br/>
                            <hr/>
                            <button onClick={()=> {setShowP4(false); calculatePoints()}}>Enviar resposta</button>
                    </div>
            }


            {/*<button onClick={ ()=> calculatePoints() } >Enviar respostas</button>*/}

            <p>Total de pontos: {points}</p>
        </div>
    );
}

export default Quiz2;