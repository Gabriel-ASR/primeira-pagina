import { Link } from "react-router-dom"

const PageList = () => {
    return (
        <div className="d-flex align-items-center d-none d-sm-block">
            <ul className="d-flex p-0 m-0 gap-5 pageListContainer">
                <li className="h-100"><Link to="/">Home</Link></li>
                <li className="h-100"><Link to="/about">Sobre</Link></li>
                <li className="h-100"><Link to="/contact">Contato</Link></li>
            </ul>
        </div>
    )
}

export default PageList