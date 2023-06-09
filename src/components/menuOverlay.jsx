import { Link } from "react-router-dom"

const MenuOverlay = (props) => {
    return(
    <div className={props.currentState == "close" ? "position-absolute menuOverlay d-sm-none" : "position-fixed menuOverlay openOverlay d-sm-none"}>
        <ul className="w-100 p-0 d-flex flex-column">
            <li onClick={() => props.onNavigate()}><Link className="navLink menuLink" to="/">Home</Link></li>
            <li onClick={() => props.onNavigate()}><Link className="navLink menuLink" to="/about">Sobre</Link></li>
            <li onClick={() => props.onNavigate()}><Link className="navLink menuLink" to="/contact">Contato</Link></li>
        </ul>
    </div>
    )
}

export default MenuOverlay