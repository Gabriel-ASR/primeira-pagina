import { Link } from "react-router-dom"

const CatList = () => {
    return (
        <ul className="list-unstyled catList d-flex justify-content-between h-100 align-items-center">
            <li className="catItem"><Link  className="navLink" to="esportes-lista-noticias">Esportes</Link></li>
            <li className="catItem"><Link  className="navLink" to="educacao-lista-noticias">Educação</Link></li>
            <li className="catItem"><Link  className="navLink" to="economia-lista-noticias">Economia</Link></li>
            <li className="catItem"><Link  className="navLink" to="politica-lista-noticias">Política</Link></li>
            <li className="catItem"><Link  className="navLink" to="entretenimento-lista-noticias">Entretenimento</Link></li>
            <li className="catItem d-none d-sm-inline"><Link  className="navLink" to="saude-lista-noticias">Saúde</Link></li>
            <li className="catItem d-none d-sm-inline"><Link  className="navLink" to="tecnologia-lista-noticias">Tecnologia</Link></li>
            <li className="catItem d-none d-md-inline"><Link  className="navLink" to="ciencia-lista-noticias">Ciência</Link></li>
            <li className="catItem d-none d-md-inline"><Link  className="navLink" to="turismo-lista-noticias">Turismo</Link></li>
            <li className="catItem d-none d-lg-inline"><Link  className="navLink" to="negocios-lista-noticias">Negócios</Link></li>
            <li className="catItem d-none d-xl-inline"><Link  className="navLink" to="moda-lista-noticias">Moda</Link></li>
            <li className="catItem d-none d-xl-inline"><Link  className="navLink" to="alimentacao-lista-noticias">Alimentação</Link></li>
            <li className="catItem d-none d-xxl-inline"><Link  className="navLink" to="jogos-lista-noticias">Jogos</Link></li>
        </ul>
    )
}

export default CatList
