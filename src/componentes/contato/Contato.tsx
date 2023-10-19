import './Contato.css'
import '../header/Header'
import {useState} from "react"

function Contato(){
    const [nome, setNome] = useState("")  
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")
    function mudaNome(e:React.ChangeEvent<HTMLInputElement>){
      console.log(e.target.value)
      setNome(e.target.value)
    }
    function mudaEmail(e:React.ChangeEvent<HTMLInputElement>){
      console.log(e.target.value)
      setEmail(e.target.value)
    }
    function mudaMensagem(e:React.ChangeEvent<HTMLTextAreaElement>){
      console.log(e.target.value)
      setMensagem(e.target.value)
    }
    return(
        <>
        <div className='formulario'>
            <form action="contato" className='contato'>
                <h1>Formulário de Contato</h1>
                <div>
                    <label htmlFor="nome">Nome: {nome}</label>
                    <input type="texto" id="nome" name="nome_usuario" onChange={mudaNome}></input>
                </div>
                <div>
                    <label htmlFor="email">E-mail: {email}</label>
                    <input type="email" id="email" name="email_usuario" onChange={mudaEmail}></input>
                </div>
                <div>
                    <label htmlFor="texto">Texto: {mensagem}</label>
                    <textarea id="texto" name="texto_usuario" onChange={mudaMensagem}></textarea>
                </div>
                <div className="button">
                    <button type="submit">Enviar</button>
                </div>
            </form>
    </div>
        </>
    )
}
export default Contato