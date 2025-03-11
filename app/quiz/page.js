'use client'
import { useState } from "react"
import "./quiz.css"


function Quiz() {

    const[ p1, setP1 ] = useState(0)
    const[ p2, setP2 ] = useState(0)
    const[ p3, setP3 ] = useState(0)
    const[ p4, setP4 ] = useState(0)
    const[anime, setAnime] = useState()
    const[selected, setSelected] =useState(["","","",""])
    const[ points, setPoints ] = useState(0)
       

    function calculatePoints(){
        
        if(anime == "Bleach"){
            setP4(1)
        }else{
            setP4(0)
        }

        setPoints(p1+p2+p3+p4)
    }

    

    

    return ( 
        <div>
            <h1>Quiz Conradito</h1>
            <p>Assinale a opção correta</p>
            
            <hr/>

            <h2>Qual a cor de cabelo do cavalo branco de Napoleãum?</h2>
            <label> <input name="p1" type="radio" onChange={ ()=> setP1(0) } /> Preto </label>
            <br/>
            <label> <input name="p1" type="radio" onChange={ ()=> setP1(0) } /> Azul </label>
            <br/>
            <label> <input name="p1" type="radio" onChange={ ()=> setP1(0) } /> Branco </label>
            <br/>
            <label> <input name="p1" type="radio" onChange={ ()=> setP1(1) } /> Transparente </label>
            <br/>

            <hr/>

            <h2>Qual a melhor letra?</h2>
            <label> <input name="p2" type="radio" onChange={ ()=> setP2(1)} /> A </label>
            <br/>
            <label> <input name="p2" type="radio" onChange={ ()=> setP2(0)} /> B </label>
            <br/>
            <label> <input name="p2" type="radio" onChange={ ()=> setP2(0)} /> C </label>
            <br/>
            <label> <input name="p2" type="radio" onChange={ ()=> setP2(0)} /> X </label>
            
            <hr/>

            <h2>Quanto é dois + 2?</h2>
            <ul>
                <p name="p3" className={selected[0]} onClick={()=>{ setP3(0); setSelected(["selected","","",""]) }}> 2 </p>
                <p name="p3" className={selected[1]} onClick={()=>{ setP3(0); setSelected(["","selected","",""]) }}> 0 </p>
                <p name="p3" className={selected[2]} onClick={()=>{ setP3(1); setSelected(["","","selected",""]) }}> aaaa </p>
                <p name="p3" className={selected[3]} onClick={()=>{ setP3(0); setSelected(["","","","selected"]) }}> sim </p>
            </ul>

            <hr/>

            <h2>Qual é o melhor anime do mundo?</h2>

            <form>
            <label> <input onChange={ (e)=> setAnime(e.target.value)} /> </label>

            </form>

            <br/><br/>

            <button onClick={ ()=> calculatePoints() } >Enviar respostas</button>

            <p>Total de pontos: {points}</p>
        </div>
    );
}

export default Quiz;