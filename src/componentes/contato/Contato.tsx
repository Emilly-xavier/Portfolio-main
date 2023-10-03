import './Contato.css'
import '../header/Header'

function Contato(){
    return(
        <>

            <form action="contato">
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="texto" id="nome" name="nome_usuario"></input>
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email_usuario"></input>
                </div>
                <div>
                    <label htmlFor="texto">Texto:</label>
                    <textarea id="texto" name="texto_usuario"></textarea>
                </div>
                <div className="button">
                    <button type="submit">Enviar</button>
                </div>
            </form>

        </>
    )
}
export default Contato