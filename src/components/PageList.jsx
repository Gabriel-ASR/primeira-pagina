import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

const PageList = () => {

    return (
        <div className="d-flex align-items-center d-none d-sm-block">
            <ul className="d-flex p-0 m-0 gap-5 pageListContainer">
                <li className="h-100"><Link className="navLink menuLink darkLink" to="/">Home</Link></li>
                <li className="h-100"><Link className="navLink menuLink darkLink" to="/about">Sobre</Link></li>
                <li className="h-100"><Link className="navLink menuLink darkLink" to="/contact">Contato</Link></li>
            </ul>
        </div>
    )
}

export default PageList