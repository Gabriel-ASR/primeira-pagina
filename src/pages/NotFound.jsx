import { Link } from 'react-router-dom'
import lost from '../assets/perdido.png'

const NotFound = () => {
    return(
        <div className="mt-5 text-center alreadyLoggedBackground mx-auto">
            <h1 style={{fontFamily: "'Poppins', sans-serif", fontSize: "3.4em"}}>eita, um 404!</h1>
            <p style={{fontFamily: "'Poppins', sans-serif", fontSize: "1.5em"}}>Não foi possível achar a página que você está procurando.</p>
            <img src={lost} width="150px" className="mt-2"/>
            <p className="mt-3" style={{fontFamily: "'Poppins', sans-serif", fontSize: "1.5em"}}>Se não está feliz com isso, mande-nos uma reclamação em nossa página de contato clicando <Link to="/contato" style={{textDecoration: "none"}}>aqui</Link>.</p>
            
        </div>
    )
}

export default NotFound 