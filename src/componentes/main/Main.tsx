import { useState } from "react"
import Filme from "../projeto/Projeto"
import './Main.css'
type ProjetoType = {
    id:number,
    titulo:string,
    informacao:string,
    imagem:string
}

export default function Main(){
    //Hook
    const [texto, setTexto] = useState("")

    const projetos:ProjetoType[] = [
    {
        id:1,
        titulo: "TCC - Aplicativo de Coleta Seletiva",
        informacao: "Projeto de conclusão de curso sobre um aplicativo que ajude na desinformação dos munícipes e ajude na coleta seletiva." ,
        imagem: "/tcc.png"
    },
    {
        id:2,
        titulo:"Tabuleiro sobre Poluição Hídrica",
        informacao:"Atividade desenvolvida na disciplina de Biologia, um jogo utilizando aplicações da informática.",
        imagem: "/tabuleiro_biologia.png"
    },
    {
        id:3,
        titulo:"Aplicativo de Reciclagem",
        informacao:"Rascunho tela de Aprenda a Reciclar do aplicativo de reciclagem.",
        imagem: "/reciclagem.png"
    },
    {
        id:4,
        titulo:"Slide Química - Fenois e Éteres",
        informacao:"Apresentação de seminário da matéria de Química sobre os Fenóis e Éteres.",
        imagem: "/quimica_fenois.png"
    },
    {
        id:5,
        titulo:"Boutique Modas",
        informacao:"Atividade de sala, criar uma WireFrame de baixa fidelidade de uma tela de cadastro.",
        imagem: "/boutique_modas.png"
    },
    {
        id:6,
        titulo:"Cine Pipoca",
        informacao:"Protótipo de site de streaming, que contêm filme e séries para assistir online.",
        imagem: "/cine_pipoca.png"
    },
    {
        id:7,
        titulo:"Internet das Coisas",
        informacao:"Apresentação de seminário sobre Bairro Inteligente, utilizando como exemplo o bairro Vila A em Foz do Iguaçu.",
        imagem: "/internet_das_coisas.png"
    },
    {
        id:8,
        titulo:"Livraria Online",
        informacao:"Desenvolvimento de um protótipo de baixa fidelidade de uma livraria online.",
        imagem: "/livraria.png"
    },
    {
        id:9,
        titulo:"Química das Drogas",
        informacao:"Apresentação seminário sobre Químicas das drogas como: Cocaína, Crack e Ecstasy.",
        imagem: "/quimica_das_drogas.png"
    },
    {
        id:10,
        titulo:"Agência de Turismo",
        informacao:"Protótipo de um site de uma agência de turismo, onde pode ser comprado pacotes de viagens.",
        imagem: "/turismo.png"
    }
    ]

    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value) 
    }
    return(
        <>
        <div className="pesquisa">
            <p>Buscar projeto</p>
            <input className='barrapesquisa' type="text" onChange={mudaTexto}/>
        <div>
            <p className='texto_digitado' >Pesquisa: {texto}</p>
            </div>
        </div>

            <main className="content-main">

            {projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto.toLowerCase())).map((projeto:ProjetoType)=>
                    <Filme key={projeto.id} 
                           titulo={projeto.titulo} 
                           informacao={projeto.informacao} 
                           imagem={projeto.imagem}
                    />
                    )
                }
            
        </main>
        </>
    )
}