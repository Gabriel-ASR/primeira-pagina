import { useContext } from "react"
import PrincipalContext from "../contexts/PrincipalContext"
import { Link } from "react-router-dom"

const Principal = () => {

    const { newsTitle, newsContent, newsAuthor, newsDate } = useContext(PrincipalContext)

    return (
        <div className="d-flex flex-row align-items-center gap-2 principal">
            <div className="principalImage "></div>
            <div className="w-50 h-100 d-flex flex-column justify-content-between">
                <h1 className="principalTitle d-inline-block">{newsTitle}</h1>
                <span className="principalInfo">{`${newsAuthor} | ${newsDate}`}</span>
                <div className="paragraph overflow-hidden smallWidth">
                    <p className="principalInfo">{newsContent}</p>
                </div>
                <Link to="/vazamento-de-dados" className="principalInfo principalReadMore blackNavLink">Ler mais...</Link>
            </div>
        </div>
    )
}

export default Principal