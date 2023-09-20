import './Projeto.css'

type ProjetoProps={
    titulo: string;
    informacao: string;
    imagem: string;
}

export default function Projeto(props:ProjetoProps){
    return(
        <div className="filme_content">
            <div className='foto_filme'>
                <img src={props.imagem} alt="" />
            </div>
            <div className="texto_foto">
                <h1>{props.titulo}</h1>
                <p className="informacao">{props.informacao}</p>
            </div>
        </div>
    )
}