import './Footer.css'
import Logo1 from '../../assets/instagram_logo.png'
import Logo2 from '../../assets/facebook_logo.png'

export default function Footer(){
    return(
        <footer>
           <h1 className='titulo'>Emilly Xavier</h1>
           
           <div className='imagens'>
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
           </div>

           <div className='rodape'>
            <a href="#">Home</a>
            <a href="#">Informações</a>
            <a href="#">Entre em contato</a>
           </div>

           <div className='rodape2'>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos e Condições</a>
            <a href="#">Saiba mais</a>
           </div>
        </footer>
    )
}