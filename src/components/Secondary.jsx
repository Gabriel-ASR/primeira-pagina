import { useContext } from "react"
import SecondaryContext from "../contexts/SecondaryContext"
import { Link } from "react-router-dom"
import { FiExternalLink } from 'react-icons/fi'

const Secondary = () => {

    const { newsAuthor, newsContent, newsDate, newsTitle } = useContext(SecondaryContext)

    return(
        <div className="d-flex flex-row secondary">
            <div className="d-flex flex-column">
                <h1 className="secondaryTitle"><Link className="blackNavLink" to="/brasil-ganha-ouro-em-atletismo">{newsTitle}<FiExternalLink /></Link></h1>
                <span className="secondaryInfo">{`${newsAuthor} | ${newsDate}`}</span>
                <p className="secondaryInfo">{`${newsContent}`}</p>
            </div>
        </div>
    )
}

export default Secondary