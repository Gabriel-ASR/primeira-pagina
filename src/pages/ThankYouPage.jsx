import { Link } from 'react-router-dom'
import obrigado from '../assets/fe.png'

const ThankYouPage = () => {
    return(
        <div className="justify-content-center d-flex flex-column smallWidth mx-auto">
            <div className="d-flex justify-content-center mt-5">
                <img src={obrigado} width="100px"/>
            </div>
            <h1 className="text-center mt-4" style={{fontFamily: "'Montserrat', sans-serif",  fontWeight: "bold"}}>Obrigado!</h1>
            <p className="text-center mt-4" style={{fontFamily: "'Poppins', sans-serif", fontSize: "1.2em"}}>Sua solicitação foi encaminhada à nossa equipe e em breve será respondida no e-mail informado.</p>
            <p className="text-center"><Link style={{textDecoration: "none", fontFamily: "'Poppins', sans-serif"}} to="/">Voltar</Link></p>
        </div>
    )
}

export default ThankYouPage