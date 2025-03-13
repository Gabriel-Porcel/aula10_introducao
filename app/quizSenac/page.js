'use client'
import { useState } from "react";
import "./quizSenac.css"

function QuizSenac() {

    const [p1, setP1] = useState(0)
    const [p2, setP2] = useState(0)
    const [p3, setP3] = useState(0)
    const [p4, setP4] = useState(0)
    const [p5, setP5] = useState(0)
    const [p6, setP6] = useState(0)
    const [p7, setP7] = useState(0)

    const [selecionado, setSelecionado] = useState(["", "", "", ""])

    const [showP1, setShowP1] = useState(true)
    const [showP2, setShowP2] = useState(false)
    const [showP3, setShowP3] = useState(false)
    const [showP4, setShowP4] = useState(false)
    const [showP5, setShowP5] = useState(false)
    const [showP6, setShowP6] = useState(false)
    const [showP7, setShowP7] = useState(false)

    const [showImagem1, setShowImagem1] = useState(false)
    const [showImagem2, setShowImagem2] = useState(false)
    const [showImagem3, setShowImagem3] = useState(false)
    const [showImagem4, setShowImagem4] = useState(false)
    const [showImagem5, setShowImagem5] = useState(false)
    const [showImagem6, setShowImagem6] = useState(false)
    const [showImagem7, setShowImagem7] = useState(false)

    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)

    function pontuacao() {

        setScore(p1 + p2 + p3 + p4 + p5 + p6 + p7)


    }

    return (
        <div class="tudo">



            {showP1 == true && showImagem1 == false &&

                <div className="alinha-imagem">
                    
                    <img className="pok" src="/imagens/charmander-s.png" width="500px" />

                    <img src="/imagens/quizhead1.png" width="500px" />

                    <br />

                    <div className="container">

                        <div className="opcao">
                            <button name="p1" className={selecionado[0]} onClick={() => { setP1(1); setSelecionado(["selecionado", "", "", ""]) }}> Charmander </button>
                        </div>
                        <div className="opcao">
                            <button name="p1" className={selecionado[1]} onClick={() => { setP1(0); setSelecionado(["", "selecionado", "", ""]) }}> Charizard </button>
                        </div>


                        <div className="opcao">
                            <button name="p1" className={selecionado[2]} onClick={() => { setP1(0); setSelecionado(["", "", "selecionado", ""]) }}> Cubone </button>
                        </div>
                        <div className="opcao">
                            <button name="p1" className={selecionado[3]} onClick={() => { setP1(0); setSelecionado(["", "", "", "selecionado"]) }}> Treecko </button>
                        </div>

                        <br />

                    </div>

                    <button className="enviar" onClick={() => { setShowImagem1(true) }}>Enviar</button>
                </div>
            }


            {showP1 == true && showImagem1 == true &&

                <div className="alinha-imagem">

                    <h3>Charmander</h3>
                    <img src="/imagens/charmander.png" width="500px" />
                    <div>
                        <button className="proximo" onClick={() => { setShowImagem1(false); setShowP1(false); setShowP2(true); setShowImagem2(false) }}>Próximo</button>
                    </div>
                </div>

            }


            {showP2 == true && showImagem2 == false &&

                <div className="alinha-imagem">
                    <img src="/imagens/mimikyu-s.png" width="500px" />
                    <img src="/imagens/quizhead1.png" width="500px" />

                    <br />

                    <div className="container">
                        <div className="opcao">
                            <button name="p2" className={selecionado[0]} onClick={() => { setP2(0); setSelecionado(["selecionado", "", "", ""]) }}> Pikachu </button>
                        </div>
                        <div className="opcao">
                            <button name="p2" className={selecionado[1]} onClick={() => { setP2(1); setSelecionado(["", "selecionado", "", ""]) }}> Mimikyu </button>
                        </div>
                        <div className="opcao">
                            <button name="p2" className={selecionado[2]} onClick={() => { setP2(0); setSelecionado(["", "", "selecionado", ""]) }}> Misdreavus </button>
                        </div>
                        <div className="opcao">
                            <button name="p2" className={selecionado[3]} onClick={() => { setP2(0); setSelecionado(["", "", "", "selecionado"]) }}> Pichu </button>
                        </div>
                        <br />

                    </div>

                    <button className="enviar" onClick={() => { setShowImagem2(true) }}>Enviar</button>
                </div>
            }

            {showP2 == true && showImagem2 == true &&

                <div className="alinha-imagem">
                    <h3>Mimikyu</h3>
                    <img src="/imagens/mimikyu.png" width="500px" />
                    <div>
                        <button className="proximo" onClick={() => { setShowImagem2(false); setShowP2(false); setShowP3(true); setShowImagem3(false) }}>Próximo</button>
                    </div>
                </div>

            }


            {showP3 == true && showImagem3 == false &&

                <div className="alinha-imagem">
                    <img src="/imagens/jolteon-s.png" width="500px" />
                    <img src="/imagens/quizhead1.png" width="500px" />
                    <br />

                    <div className="container">
                        <div className="opcao">
                            <button name="p3" className={selecionado[0]} onClick={() => { setP3(0); setSelecionado(["selecionado", "", "", ""]) }}> Joltik </button>
                        </div>
                        <div className="opcao">
                            <button name="p3" className={selecionado[1]} onClick={() => { setP3(0); setSelecionado(["", "selecionado", "", ""]) }}> Flareon </button>
                        </div>
                        <div className="opcao">
                            <button name="p3" className={selecionado[2]} onClick={() => { setP3(0); setSelecionado(["", "", "selecionado", ""]) }}> Eevee </button>
                        </div>
                        <div className="opcao">
                            <button name="p3" className={selecionado[3]} onClick={() => { setP3(1); setSelecionado(["", "", "", "selecionado"]) }}> Jolteon </button>
                        </div>
                        <br />

                    </div>

                    <button className="enviar" onClick={() => { setShowImagem3(true) }}>Enviar</button>
                </div>
            }

            {showP3 == true && showImagem3 == true &&

                <div className="alinha-imagem">
                    <h3>Jolteon</h3>
                    <img src="/imagens/jolteon.png" width="500px" />
                    <div>
                        <button className="proximo" onClick={() => { setShowImagem3(false); setShowP3(false); setShowP4(true); setShowImagem4(false) }}>Próximo</button>
                    </div>
                </div>

            }

            {showP4 == true && showImagem4 == false &&

                <div className="alinha-imagem">
                    <img src="/imagens/scyther-s.png" width="500px" />
                    <img src="/imagens/quizhead1.png" width="500px" />
                    <br />

                    <div className="container">
                        <div className="opcao">
                            <button name="p4" className={selecionado[0]} onClick={() => { setP4(0); setSelecionado(["selecionado", "", "", ""]) }}> Squirtle </button>
                        </div>
                        <div className="opcao">
                            <button name="p4" className={selecionado[1]} onClick={() => { setP4(0); setSelecionado(["", "selecionado", "", ""]) }}> Scizor </button>
                        </div>
                        <div className="opcao">
                            <button name="p4" className={selecionado[2]} onClick={() => { setP4(1); setSelecionado(["", "", "selecionado", ""]) }}> Scyther </button>
                        </div>
                        <div className="opcao">
                            <button name="p4" className={selecionado[3]} onClick={() => { setP4(0); setSelecionado(["", "", "", "selecionado"]) }}> Sceptile </button>
                        </div>
                        <br />

                    </div>

                    <button className="enviar" onClick={() => { setShowImagem4(true) }}>Enviar</button>
                </div>
            }

            {showP4 == true && showImagem4 == true &&

                <div className="alinha-imagem">
                    <h3>Scyther</h3>
                    <img src="/imagens/scyther.png" width="500px" />
                    <div>
                        <button className="proximo" onClick={() => { setShowImagem4(false); setShowP4(false); setShowP5(true); setShowImagem5(false) }}>Próximo</button>
                    </div>
                </div>

            }

            {showP5 == true && showImagem5 == false &&

                <div className="alinha-imagem">
                    <img src="/imagens/pikachu-s.png" width="500px" />
                    <img src="/imagens/quizhead1.png" width="500px" />
                    <br />

                    <div className="container">
                        <div className="opcao">
                            <button name="p5" className={selecionado[0]} onClick={() => { setP5(0); setSelecionado(["selecionado", "", "", ""]) }}> Mimikyu </button>
                        </div>
                        <div className="opcao">
                            <button name="p5" className={selecionado[1]} onClick={() => { setP5(1); setSelecionado(["", "selecionado", "", ""]) }}> Pikachu </button>
                        </div>
                        <div className="opcao">
                            <button name="p5" className={selecionado[2]} onClick={() => { setP5(0); setSelecionado(["", "", "selecionado", ""]) }}> Raichu </button>
                        </div>
                        <div className="opcao">
                            <button name="p5" className={selecionado[3]} onClick={() => { setP5(0); setSelecionado(["", "", "", "selecionado"]) }}> Pichu </button>
                        </div>
                        <br />

                    </div>

                    <button className="enviar" onClick={() => { setShowImagem5(true) }}>Enviar</button>
                </div>
            }

            {showP5 == true && showImagem5 == true &&

                <div className="alinha-imagem">
                    <h3>Pikachu</h3>
                    <img src="/imagens/pikachu.png" width="500px" />
                    <div>
                        <button className="proximo" onClick={() => { setShowImagem5(false); setShowP5(false); setShowP6(true); setShowImagem6(false) }}>Próximo</button>
                    </div>
                </div>

            }

            {showP6 == true && showImagem6 == false &&

                <div className="alinha-imagem">
                    <img src="/imagens/voltorb-s.png" width="500px" />
                    <img src="/imagens/quizhead1.png" width="500px" />
                    <br />

                    <div className="container">
                        <div className="opcao">
                            <button name="p6" className={selecionado[0]} onClick={() => { setP6(0); setSelecionado(["selecionado", "", "", ""]) }}> Pokébola </button>
                        </div>
                        <div className="opcao">
                            <button name="p6" className={selecionado[1]} onClick={() => { setP6(0); setSelecionado(["", "selecionado", "", ""]) }}> Electabuzz </button>
                        </div>
                        <div className="opcao">
                            <button name="p6" className={selecionado[2]} onClick={() => { setP6(0); setSelecionado(["", "", "selecionado", ""]) }}> Electrode </button>
                        </div>
                        <div className="opcao">
                            <button name="p6" className={selecionado[3]} onClick={() => { setP6(1); setSelecionado(["", "", "", "selecionado"]) }}> Voltorb </button>
                        </div>
                        <br />

                    </div>

                    <button className="enviar" onClick={() => { setShowImagem6(true) }}>Enviar</button>
                </div>
            }

            {showP6 == true && showImagem6 == true &&

                <div className="alinha-imagem">
                    <h3>Voltorb</h3>
                    <img src="/imagens/Voltorb.png" width="500px" />
                    <div>
                        <button className="proximo" onClick={() => { setShowImagem6(false); setShowP6(false); setShowP7(true); setShowImagem7(false) }}>Próximo</button>
                    </div>
                </div>

            }

            {showP7 == true && showImagem7 == false &&

                <div className="alinha-imagem">
                    <img src="/imagens/zekrom-s.png" width="500px" />
                    <img src="/imagens/quizhead1.png" width="500px" />
                    <br />

                    <div className="container">
                        <div className="opcao">
                            <button name="p7" className={selecionado[0]} onClick={() => { setP7(1); setSelecionado(["selecionado", "", "", ""]) }}> Charizard </button>
                        </div>
                        <div className="opcao">
                            <button name="p7" className={selecionado[1]} onClick={() => { setP7(0); setSelecionado(["", "selecionado", "", ""]) }}> Garchomp </button>
                        </div>
                        <div className="opcao">
                            <button name="p7" className={selecionado[2]} onClick={() => { setP7(0); setSelecionado(["", "", "selecionado", ""]) }}> Reshiran </button>
                        </div>
                        <div className="opcao">
                            <button name="p7" className={selecionado[3]} onClick={() => { setP7(0); setSelecionado(["", "", "", "selecionado"]) }}> Zekrom </button>
                        </div>
                        <br />

                    </div>

                    <button className="enviar" onClick={() => { setShowImagem7(true) }}>Enviar</button>
                </div>
            }

            {showP7 == true && showImagem7 == true &&

                <div className="alinha-imagem">
                    <h3>Zekrom</h3>
                    <img src="/imagens/zekrom.png" width="500px" />
                    <div>
                        <button className="proximo" onClick={() => { setShowImagem7(false); setShowP7(false); setShowScore(true); pontuacao() }}>Próximo</button>
                    </div>
                </div>

            }

            {showScore == true &&
                <div>
                    <h1>Qual é esse pokémon?</h1>
                    <h2>Pontuação: {score}/7</h2>
                </div>

            }

        </div>
    );
}

export default QuizSenac;