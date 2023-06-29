import { Link } from "react-router-dom"


const CategoryNews = ({ title, author, content, path }) => {
    return(

        <div className="d-flex flex-column filterContainer rounded p-3">
            <div className="d-flex flex-column flex-sm-row justify-content-between">
                <h1 className="filterTitle">{title}</h1>
                <span className="filterAuthor align-self-sm-center">{author}</span>
            </div>
            <p className="filterContent mt-3">{content}</p>
                <span><Link className="blackNavLink recentLink" to={path}>Ler Mais...</Link></span>
        </div>

    )
}

export default CategoryNews